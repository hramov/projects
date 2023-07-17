import { IsNumber, IsString } from "class-validator";

export class CreateProjectDto {
	
	@IsString()
	title: string;
	
	@IsNumber()
	manager_id: number;
	
	@IsNumber()
	type_id: number;
}
