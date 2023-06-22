import { Module } from '@nestjs/common';
import {LoggerModule} from "../../common/logger/logger.module";
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {JwtModule} from "@nestjs/jwt";
import {APP_GUARD} from "@nestjs/core";
import {AuthGuard} from "./auth.guard";
import {RolesGuard} from "./roles.guard";
import {secret} from "./auth.constants";
import { UserModule } from "../user/user.module";
import { RoleModule } from "../role/role.module";

@Module({
    imports: [LoggerModule,
        JwtModule.register({
            global: true,
            secret: secret, // TODO move to config
            signOptions: { expiresIn: '30m' },
        }),
        TypeOrmModule.forFeature([]),
      UserModule,
      RoleModule
    ],
    providers: [AuthService, {
        provide: APP_GUARD,
        useClass: AuthGuard,
    }, {
        provide: APP_GUARD,
        useClass: RolesGuard,
    },],
    controllers: [AuthController]
})
export class AuthModule {}