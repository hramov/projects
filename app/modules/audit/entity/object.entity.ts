import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";
import { ObjectTypeEntity } from "./object-type.entity";

@Entity({
				name: 'object'
})
export class ObjectEntity extends BaseEntity {
				
				@Column({
								name: 'object_id',
								type: 'integer'
				})
				object_id: number;
				
				@ManyToOne(() => ObjectTypeEntity, type => type.id)
				@JoinColumn({
								name: 'object_type',
				})
				object_type: ObjectTypeEntity;
}