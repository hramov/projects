import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";
import { ProjectEntity } from "./project.entity";
import { CategoryEntity } from "../../issue/entity/category.entity";
import { IssueEntity } from "../../issue/entity/issue.entity";
import { UserEntity } from "../../user/entity/user.entity";

@Entity({
				name: 'labor'
})
export class LaborEntity extends BaseEntity {
				@ManyToOne(() => IssueEntity, issue => issue.id)
				@JoinColumn({
								name: 'issue'
				})
				issue: IssueEntity;
				
				@ManyToOne(() => UserEntity, user => user.id)
				@JoinColumn({
								name: 'user'
				})
				user: UserEntity;
				
				@Column({
								name: 'added',
								type: 'timestamp'
				})
				added: Date;
				
				@Column({
								name: 'amount',
								type: 'numeric'
				})
				amount: number;
				
				@Column({
								name: 'comment',
								type: 'text'
				})
				comment: string;
}