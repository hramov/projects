import { Module } from '@nestjs/common';
import {LoggerModule} from "../lib/api/common/logger/logger.module";
import {AuthModule} from "./auth/auth.module";
import {PostgresModule} from "../lib/api/common/persistent/postgres/postgres.module";
import { ProjectModule } from "./project/project.module";

@Module({
  imports: [
    PostgresModule, LoggerModule, AuthModule, ProjectModule
  ],
})
export class AppModule {}
