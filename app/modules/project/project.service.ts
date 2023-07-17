import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { ProjectEntity } from "./entity/project.entity";
import { FindManyOptions, ILike, Repository } from "typeorm";
import { SearchProjectDto } from "./dto/search-project.dto";
import { ProjectStatus } from "./project-status";
import { v4 } from 'uuid';
import { UserService } from "../user/user.service";
import { ProjectTypeEntity } from "./entity/project-type.entity";
import { ProjectStatusEntity } from "./entity/project-status.entity";

@Injectable()
export class ProjectService {
	
	constructor(
		@InjectRepository(ProjectEntity) private readonly projectRepository: Repository<ProjectEntity>,
		@InjectRepository(ProjectStatusEntity) private readonly projectStatusRepository: Repository<ProjectStatusEntity>,
		@InjectRepository(ProjectTypeEntity) private readonly projectTypeRepository: Repository<ProjectTypeEntity>,
		private readonly userService: UserService
	) {}
	
	async create(createProjectDto: CreateProjectDto) {
		const project = this.projectRepository.create();
		project.identifier = v4();
		project.title = createProjectDto.title;
		project.manager_id = createProjectDto.manager_id;
		project.manager = await this.userService.findById(project.manager_id);
		project.status_id = ProjectStatus.New;
		project.status = await this.projectStatusRepository.findOne({ where: { id: project.status_id }});
		project.type_id = createProjectDto.type_id;
		project.type = await this.projectTypeRepository.findOne({ where: { id: project.type_id }});
		
		return this.projectRepository.save(project);
	}
	
	
	async findAll(searchDto: SearchProjectDto) {
		const projects = await this.projectRepository.find({
			where: {
				title: searchDto.title ? ILike('%' + searchDto.title + '%') : null,
				status_id: searchDto.status ? Number(searchDto.status) : null,
			},
			take: searchDto.limit,
			skip: (searchDto.page - 1) * searchDto.limit,
			relations: ['status', 'type', 'manager']
		});
		
		const count = await this.projectRepository.countBy({ is_active: true });
		
		return {
			data: projects, count
		}
	}
	
	findOne(id: number) {
		return this.projectRepository.findOne({ where: { id: id }})
	}
	
	update(id: number, updateProjectDto: UpdateProjectDto) {
		return `This action updates a #${id} project`;
	}
	
	remove(id: number) {
		return `This action removes a #${id} project`;
	}
}
