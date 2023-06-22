import { Entity } from "typeorm";
import { BaseEntity } from "../../../common/persistent/entity/entity";

@Entity({
				name: 'category'
})
export class CategoryEntity extends BaseEntity {

}