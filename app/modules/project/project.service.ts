import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { ProjectEntity } from "./entity/project.entity";
import { FindManyOptions, ILike, Repository } from "typeorm";
import { SearchProjectDto } from "./dto/search-project.dto";

@Injectable()
export class ProjectService {
	
	constructor(@InjectRepository(ProjectEntity) private readonly projectRepository: Repository<ProjectEntity>) {}
	
	create(createProjectDto: CreateProjectDto) {
		return 'This action adds a new project';
	}
	
	
	findAll(searchDto: SearchProjectDto) {
		return this.projectRepository.find({
			where: {
				title: searchDto.title ? ILike('%' + searchDto.title + '%') : null,
				status_id: searchDto.status ? Number(searchDto.status) : null,
			},
			take: searchDto.limit,
			skip: (searchDto.page - 1) * searchDto.limit,
		});
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
