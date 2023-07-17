import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Public } from "../auth/decorators/public.decorator";
import { FilterPipe } from "../../pipes/filter.pipe";
import { SearchProjectDto } from "./dto/search-project.dto";

@Controller('project')
export class ProjectController {
	constructor(private readonly projectsService: ProjectService) {}
	
	@Public()
	@Post()
	create(@Body() createProjectDto: CreateProjectDto) {
		const result = this.projectsService.create(createProjectDto);
		if (result instanceof Error) {
			throw result;
		}
		return result;
	}
	
	@Get()
	@Public()
	findAll(@Query('', FilterPipe) searchDto: SearchProjectDto) {
		return this.projectsService.findAll(searchDto);
	}
	
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.projectsService.findOne(+id);
	}
	
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
		return this.projectsService.update(+id, updateProjectDto);
	}
	
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.projectsService.remove(+id);
	}
	
}
