import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";
import { ProjectEntity } from "../../project/entity/project.entity";
import { CategoryEntity } from "./category.entity";
import { IssueStatusEntity } from "./issue-status.entity";
import { UserEntity } from "../../user/entity/user.entity";
import { IssuePriorityEntity } from "./issue-priority.entity";

@Entity({
				name: 'issue'
})
export class IssueEntity extends BaseEntity {
				
				@ManyToOne(() => UserEntity, user => user.id)
				@JoinColumn({
								name: 'author'
				})
				author: UserEntity;
				
				@ManyToOne(() => ProjectEntity, project => project.id)
				@JoinColumn({
								name: 'project'
				})
				project: ProjectEntity;
				
				@Column({
								name: 'subject',
								type: 'varchar'
				})
				subject: string;
				
				@Column({
								name: 'description',
								type: 'varchar'
				})
				description: string;
				
				@Column({
								name: 'due_date',
								type: 'timestamp'
				})
				due_date: Date;
				
				@ManyToOne(() => CategoryEntity, category => category.id)
				@JoinColumn({
								name: 'category'
				})
				category: CategoryEntity;
				
				@ManyToOne(() => IssueStatusEntity, status => status.id)
				@JoinColumn({
								name: 'status'
				})
				status: IssueStatusEntity;
				
				@ManyToOne(() => UserEntity, user => user.id)
				@JoinColumn({
								name: 'assignee'
				})
				assignee: UserEntity;
				
				@ManyToOne(() => IssuePriorityEntity, priority => priority.id)
				@JoinColumn({
								name: 'priority'
				})
				priority: IssuePriorityEntity;
				
				@Column({
								name: 'start_date',
								type: 'timestamp'
				})
				start_date: Date;
				
				@Column({
								name: 'done_ration',
								type: 'integer'
				})
				done_ration: number;
				
				@Column({
								name: 'estimated_hours',
								type: 'double precision'
				})
				estimated_hours: number;
				
				@ManyToOne(() => IssueEntity, issue => issue.id)
				@JoinColumn({
								name: 'parent'
				})
				parent: IssueEntity;
				
				@ManyToOne(() => IssueEntity, issue => issue.id)
				@JoinColumn({
								name: 'root'
				})
				root: IssueEntity;
				
				@Column({
								name: 'private',
								type: 'boolean'
				})
				private: boolean;
				
				@Column({
								name: 'closed',
								type: 'timestamp'
				})
				closed: Date;
}