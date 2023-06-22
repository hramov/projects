import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";
import { UserEntity } from "./user.entity";

@Entity({
				name: 'user_preferences'
})
export class UserPreferencesEntity extends BaseEntity {
				
				@OneToOne(() => UserEntity)
				@JoinColumn({
								name: 'user'
				})
				user: UserEntity;
				
				@Column({
								name: 'preferences',
								type: 'jsonb'
				})
				preferences: any;
}