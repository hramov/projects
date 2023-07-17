import { Module } from '@nestjs/common';
import {LoggerModule} from "./common/logger/logger.module";
import {AuthModule} from "./modules/auth/auth.module";
import {PostgresModule} from "./common/persistent/postgres/postgres.module";
import { ProjectModule } from "./modules/project/project.module";
import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { UserModule } from "./modules/user/user.module";
import { SettingsModule } from "./modules/settings/settings.module";
import { AuditModule } from "./modules/audit/audit.module";
import { IssueModule } from './modules/issue/issue.module';
import { ConfigModule } from "@nestjs/config";
import config from "../config/config";

@Module({
  imports: [
      // config
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
      
      // external modules
    CacheModule.register({ isGlobal: true }),
    
    // infrastructure modules
    PostgresModule, LoggerModule,
      
      // system modules
    SettingsModule, AuditModule,
      
      // app modules
    AuthModule, ProjectModule, UserModule, IssueModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ]
})
export class AppModule {}
