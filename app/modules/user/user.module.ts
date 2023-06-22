import { Module } from '@nestjs/common';
import {LoggerModule} from "../../common/logger/logger.module";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserEntity } from "./entity/user.entity";
import { UserPreferencesEntity } from "./entity/user-preferences.entity";

@Module({
    imports: [LoggerModule, TypeOrmModule.forFeature([UserEntity, UserPreferencesEntity])],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {}
