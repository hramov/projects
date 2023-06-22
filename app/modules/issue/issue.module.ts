import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { IssueEntity } from "./entity/issue.entity";
import { IssueStatusEntity } from "./entity/issue-status.entity";
import { CategoryEntity } from "./entity/category.entity";
import { IssuePriorityEntity } from "./entity/issue-priority.entity";
import { TrackerEntity } from "./entity/tracker.entity";

@Module({
				imports: [TypeOrmModule.forFeature([IssueEntity, IssueStatusEntity, CategoryEntity, IssuePriorityEntity, TrackerEntity])]
})
export class IssueModule {}
