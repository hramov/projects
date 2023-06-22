import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";

@Entity({
				name: 'settings'
})
export class SettingsEntity extends BaseEntity {
				@Column({
								name: 'setting',
								type: 'varchar'
				})
				setting: string;
				
				@Column({
								name: 'value',
								type: 'jsonb'
				})
				value: any;
}