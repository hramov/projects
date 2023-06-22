import { Column, Entity, ManyToMany, ManyToOne, OneToMany, JoinTable, JoinColumn } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";
import { ProjectStatusEntity } from "./project-status.entity";
import { UserEntity } from "../../user/entity/user.entity";

@Entity({
				name: 'project'
})
export class ProjectEntity extends BaseEntity {
				@Column({
								name: 'identifier',
								type: 'varchar'
				})
				identifier: string;
				
				@Column({
								name: 'title',
								type: 'varchar'
				})
				title: string;
				
				@Column({
								name: 'description',
								type: 'varchar'
				})
				description: string;
				
				@Column({
								name: 'homepage',
								type: 'varchar'
				})
				homepage: string;
				
				@Column({
								name: 'is_public',
								type: 'boolean'
				})
				is_public: boolean;
				
				@Column({
								name: 'version',
								type: 'numeric'
				})
				version: number;
				
				@ManyToOne(() => ProjectEntity, project => project.id)
				@JoinColumn({
								name: 'parent',
				})
				parent: ProjectEntity;

				@ManyToOne(() => ProjectStatusEntity, status => status.id)
				@JoinColumn({
								name: 'status',
				})
				status: ProjectStatusEntity;
				
				@ManyToMany(() => UserEntity, { eager: true })
				@JoinTable({
								name: "user_project",
								joinColumn: {
												name: "project_id",
												referencedColumnName: "id"
								},
								inverseJoinColumn: {
												name: "user_id",
												referencedColumnName: "id"
								}
				})
				members: UserEntity[];
}