import { Module } from '@nestjs/common';
import { ProjectController } from "./project.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectEntity } from "./entity/project.entity";
import { ProjectStatusEntity } from "./entity/project-status.entity";
import { LaborEntity } from "./entity/labor.entity";
import { ProjectService } from "./project.service";
import { ProjectTypeEntity } from "./entity/project-type.entity";

@Module({
	imports: [TypeOrmModule.forFeature([ProjectEntity, ProjectStatusEntity, LaborEntity, ProjectTypeEntity])],
	controllers: [ProjectController],
	providers: [ProjectService],
})
export class ProjectModule {}
