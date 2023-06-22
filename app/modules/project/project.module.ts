import { Module } from '@nestjs/common';
import { ProjectController } from "./project.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectEntity } from "./entity/project.entity";
import { ProjectStatusEntity } from "./entity/project-status.entity";
import { LaborEntity } from "./entity/labor.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity, ProjectStatusEntity, LaborEntity])],
  controllers: [ProjectController]
})
export class ProjectModule {}
