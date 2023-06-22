import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";

@Entity({
				name: 'issue_priority'
})
export class IssuePriorityEntity extends BaseEntity {
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
}