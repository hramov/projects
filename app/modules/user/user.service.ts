import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {genSalt, hash} from "bcrypt";
import {RegisterDto} from "../auth/dto/register.dto";
import { UserEntity } from "./entity/user.entity";

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    ) {}
    
    async findById(userId: number) {
        return this.userRepository.findOne({
            where: {
                id: userId
            },
        });
    }
    
    async findByLogin(login: string) {
        return this.userRepository.findOne({
            where: {
                login: login,
            },
        });
    }
    
    async create(dto: RegisterDto) {
        const user = this.userRepository.create();
        user.login = dto.login;
        
        const salt = await genSalt(5)
        user.password = await hash(dto.password, salt);
        
        await this.userRepository.save(user);
        return user;
    }
    
}
