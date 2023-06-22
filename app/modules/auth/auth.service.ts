import {Injectable} from '@nestjs/common';
import {RegisterDto} from "./dto/register.dto";
import {LoginDto} from "./dto/login.dto";
import {PasswordsDontMatchError} from "./error/PasswordsNotMatch.error";
import { compare } from 'bcrypt';
import {CannotFindRoleError} from "./error/CannotFindRole.error";
import {LoginOrPasswordIncorrectError} from "./error/LoginOrPasswordIncorrect.error";
import {JwtService} from "@nestjs/jwt";
import { v4 } from 'uuid';
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
        // private readonly roleService: RoleService
    ) {}

    // async register(dto: RegisterDto): Promise<v4 | Error> {
    //
    //     if (dto.password !== dto.confirm_password) {
    //         return new PasswordsDontMatchError();
    //     }
    //
    //     const user = this.userService.create(dto);
    //
    //
    //
    //     return result.id;
    // }
    //
    // async login(dto: LoginDto) {
    //     const user = await this.userRepository.findOne({
    //         where: {tg_name: dto.tg_name}, relations: {role: true}
    //     });
    //
    //     if (!user) {
    //         return new LoginOrPasswordIncorrectError();
    //     }
    //
    //     const valid = await compare(dto.password, user.password);
    //
    //     if (!valid) {
    //         return new LoginOrPasswordIncorrectError();
    //     }
    //
    //     const role = await this.roleRepository.findOneBy({id: user.role.id });
    //     if (!role || !role.id) {
    //         return new CannotFindRoleError();
    //     }
    //
    //     const payload = { id: user.id, tg_name: user.tg_name, role_code: role.code };
    //     return {
    //         access_token: await this.jwtService.signAsync(payload),
    //     };
    // }
}
