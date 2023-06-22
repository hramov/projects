import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";

@Entity({
				name: 'issue_status'
})
export class IssueStatusEntity extends BaseEntity {
				@Column({
								name: 'title',
								type: 'varchar'
				})
				title: string;
				
				@Column({
								name: 'position',
								type: 'integer'
				})
				position: number;
				
				@Column({
								name: 'default_done_ration',
								type: 'integer',
								nullable: true,
				})
				default_done_ration: number;
				
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