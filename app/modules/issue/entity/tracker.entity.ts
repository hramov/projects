import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";

@Entity({
				name: 'tracker'
})
export class TrackerEntity extends BaseEntity {
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
								name: 'description',
								type: 'varchar'
				})
				description: string;
				
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