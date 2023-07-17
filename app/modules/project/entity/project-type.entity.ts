import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";
import { ProjectEntity } from "./project.entity";

@Entity({
	name: 'project_type'
})
export class ProjectTypeEntity extends BaseEntity {
	@Column({
		name: 'title',
		type: 'varchar'
	})
	title: string;
	
	@Column({
		name: 'code',
		type: 'varchar'
	})
	code: string;
	
	@Column({
		name: 'is_active',
		type: 'boolean'
	})
	is_active: boolean;
	
	@OneToMany(() => ProjectEntity, project => project.type)
	projects: ProjectEntity[];
}