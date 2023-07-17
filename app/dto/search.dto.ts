import { IsNumber, IsOptional, IsString } from "class-validator";

export class SearchDto {
	@IsOptional()
	@IsString()
	page: number;
	
	@IsOptional()
	@IsString()
	limit: number;
}