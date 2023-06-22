import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuditEntity } from "./entity/audit.entity";
import { EventEntity } from "./entity/event.entity";
import { ObjectTypeEntity } from "./entity/object-type.entity";
import { ObjectEntity } from "./entity/object.entity";

@Module({
				imports: [TypeOrmModule.forFeature([AuditEntity, EventEntity, ObjectEntity, ObjectTypeEntity])]
})
export class AuditModule {}
