import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";
import { UserEntity } from "../../user/entity/user.entity";
import { ObjectEntity } from "./object.entity";

@Entity({
				name: 'event'
})
export class EventEntity extends BaseEntity {
				@Column({
								name: 'title',
								type: 'varchar'
				})
				title: string;
				
				@ManyToOne(() => ObjectEntity, type => type.id)
				@JoinColumn({
								name: 'object',
				})
				object: ObjectEntity;
				
				@ManyToOne(() => UserEntity, user => user.id)
				@JoinColumn({
								name: 'user',
				})
				user: UserEntity;
				
				@Column({
								name: 'object_type',
								type: 'integer'
				})
				value: any;
}