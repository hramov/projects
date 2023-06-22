import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";

@Entity({
				name: 'object_type'
})
export class ObjectTypeEntity extends BaseEntity {
				@Column({
								name: 'title',
								type: 'varchar'
				})
				title: string;

				@Column({
								name: 'active',
								type: 'boolean'
				})
				active: boolean;
}