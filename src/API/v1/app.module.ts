import { Module } from '@nestjs/common';
import {LoggerModule} from "./common/logger/logger.module";
import {AuthModule} from "./modules/auth/auth.module";
import {PostgresModule} from "./common/persistent/postgres/postgres.module";

@Module({
  imports: [PostgresModule, LoggerModule, AuthModule],
})
export class AppModule {}
