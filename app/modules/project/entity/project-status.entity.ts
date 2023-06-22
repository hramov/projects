import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";
import { ProjectEntity } from "./project.entity";

@Entity({
				name: 'project_status'
})
export class ProjectStatusEntity extends BaseEntity {
				@Column({
								name: 'title',
								type: 'varchar'
				})
				title: string;
				
				@Column({
								name: 'color',
								type: 'varchar'
				})
				color: string;
				
				@Column({
								name: 'is_active',
								type: 'boolean'
				})
				is_active: boolean;
				
				@OneToMany(() => ProjectEntity, project => project.status)
				projects: ProjectEntity[];
}