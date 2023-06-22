import { ForbiddenException, Injectable } from "@nestjs/common";
import {RegisterDto} from "./dto/register.dto";
import {LoginDto} from "./dto/login.dto";
import {PasswordsDontMatchError} from "./error/PasswordsNotMatch.error";
import { compare } from 'bcrypt';
import {LoginOrPasswordIncorrectError} from "./error/LoginOrPasswordIncorrect.error";
import {JwtService} from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { UserAlreadyExistsError } from "./error/UserAlreadyExists.error";
import { secret, secretRefresh } from "./constants/auth.constants";

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {}
    
    async register(dto: RegisterDto): Promise<{ access_token: string, refresh_token: string } | Error> {
        
        const existing = await this.userService.findByLogin(dto.login);
        
        if (existing) {
            return new UserAlreadyExistsError();
        }
        
        if (dto.password !== dto.confirm_password) {
            return new PasswordsDontMatchError();
        }
        
        const user = await this.userService.create(dto);
        
        if (user instanceof Error) {
            return user;
        }
        
        const payload = {id: user.id, login: user.login };
        
        return this.getTokens(payload);
    }
    
    async login(dto: LoginDto) {
        const user = await this.userService.findByLogin(dto.login);
        
        if (!user) {
            return new LoginOrPasswordIncorrectError();
        }
        
        const valid = await compare(dto.password, user.password);
        
        if (!valid) {
            return new LoginOrPasswordIncorrectError();
        }
        
        const payload = {id: user.id, login: user.login };
        return this.getTokens(payload);
    }
    
    async refreshTokens(refreshToken: string) {
        const refreshData = await this.jwtService.verifyAsync(refreshToken, {
            secret: secretRefresh,
        });
        const user = await this.userService.findById(refreshData.id)
        if (!user) throw new ForbiddenException('Access Denied');
        
        return this.getTokens({ id: user.id, login: user.login });
    }
    
    private async getTokens(payload: { id: number, login: string }) {
        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync(
                payload,
                {
                    secret: secret,
                    expiresIn: '15m',
                },
            ),
            this.jwtService.signAsync(
                payload,
                {
                    secret: secretRefresh,
                    expiresIn: '7d',
                },
            ),
        ]);
        return {
            access_token,
            refresh_token,
        };
        
    }
}
