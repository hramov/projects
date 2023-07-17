import { IsOptional, IsString } from "class-validator";
import { SearchDto } from "../../../dto/search.dto";

export class SearchProjectDto extends SearchDto {
	@IsOptional()
	@IsString()
	title: string;
	
	@IsOptional()
	@IsString()
	status: string;
}