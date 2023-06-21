import { Module } from '@nestjs/common';
import {LoggerModule} from "./common/logger/logger.module";
import {AuthModule} from "./modules/auth/auth.module";
import {PostgresModule} from "./common/persistent/postgres/postgres.module";
import { ProjectModule } from "./modules/project/project.module";

@Module({
  imports: [
    PostgresModule, LoggerModule, AuthModule, ProjectModule
  ],
})
export class AppModule {}
