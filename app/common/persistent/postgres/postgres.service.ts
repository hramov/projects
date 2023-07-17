import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PostgresService implements TypeOrmOptionsFactory {
				constructor(private readonly configService: ConfigService) {}
				createTypeOrmOptions(): TypeOrmModuleOptions {
								return {
												type: 'postgres',
												host: this.configService.get<string>('database.postgres.host'),
												port: this.configService.get<number>('database.postgres.port'),
												username: this.configService.get<string>('database.postgres.user'),
												password: this.configService.get<string>('database.postgres.password'),
												database: this.configService.get<string>('database.postgres.database'),
												entities: ['../../modules/**/*.entity.ts'],
												synchronize: this.configService.get<boolean>('database.sync'),
												autoLoadEntities: true,
								};
				}
}
