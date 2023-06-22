import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";

@Entity({
				name: 'user'
})
export class UserEntity extends BaseEntity {
				@Column({
								name: 'login',
								type: 'varchar'
				})
				login: string;
				
				@Column({
								name: 'password',
								type: 'varchar'
				})
				password: string;
				
				@Column({
								name: 'firstname',
								type: 'varchar'
				})
				firstname: string;
				
				@Column({
								name: 'lastname',
								type: 'varchar'
				})
				lastname: string;
				
				@Column({
								name: 'admin',
								type: 'boolean'
				})
				admin: boolean;
				
				@Column({
								name: 'status',
								type: 'integer'
				})
				status: number;
				
				@Column({
								name: 'last_login',
								type: 'timestamp'
				})
				last_login: Date;
				
				@Column({
								name: 'auth_source_id',
								type: 'integer'
				})
				auth_source_id: number;
				
				@Column({
								name: 'type',
								type: 'varchar'
				})
				type: string;
				
				@Column({
								name: 'mail_notification',
								type: 'varchar'
				})
				mail_notification: string;
				
				@Column({
								name: 'must_change_password',
								type: 'boolean'
				})
				must_change_password: boolean;
				
				@Column({
								name: 'password_changed',
								type: 'timestamp'
				})
				password_changed: Date;
				
				@Column({
								name: 'refresh_token',
								type: 'varchar'
				})
				refresh_token: string;
}