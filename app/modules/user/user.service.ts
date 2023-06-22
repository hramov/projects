import { Injectable } from '@nestjs/common';
import {UserDto} from "./dto/user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { RegisterDto } from "../auth/dto/register.dto";
import { CannotFindRoleError } from "../auth/error/CannotFindRole.error";
import { UserEntity } from "./entity/user.entity";

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

    // async getById(userId: Uuid) {
    //     return this.userRepository.findOne({
    //         where: {
    //             id: userId.toString(),
    //         },
    //         relations: {
    //             role: true,
    //             shop: true,
    //         },
    //     });
    // }
    //
    // async create(dto: RegisterDto) {
    //     user.tg_name = dto.tg_name;
    //
    //     const role = await this.roleRepository.findOneBy({code: dto.role_code});
    //     if (!role || !role.id) {
    //         return new CannotFindRoleError();
    //     }
    //
    //     user.role = role;
    //
    //     const salt = await genSalt(5)
    //     user.password = await hash(dto.password, salt);
    //
    //     const result = await this.userRepository.save(user);
    // }
    //
    // save(dto: UserDto) {
    //     return Promise.resolve(undefined);
    // }
    //
    // delete(userId: Uuid) {
    //     return Promise.resolve(undefined);
    // }

}
