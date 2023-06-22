import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SettingsEntity } from "./entity/settings.entity";

@Module({
				imports: [TypeOrmModule.forFeature([SettingsEntity])]
})
export class SettingsModule {}
