import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";
import { EventEntity } from "./event.entity";

@Entity({
				name: 'audit'
})
export class AuditEntity extends BaseEntity {
				
				@ManyToOne(() => EventEntity, event => event.id)
				@JoinColumn({
								name: 'event',
				})
				event: EventEntity;
				
				@Column({
								name: 'value',
								type: 'jsonb'
				})
				value: any;
}