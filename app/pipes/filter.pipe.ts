import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class FilterPipe implements PipeTransform {
	transform(value: any, metadata: ArgumentMetadata) {
		const filters = {};
		
		for (let f in value) {
			filters[f] = value[f]
		}
		
		if (!filters['page']) {
			filters['page'] = 1
		} else {
			filters['page'] = Number(filters['page'])
		}
		
		if (!filters['limit']) {
			filters['limit'] = 10
		} else {
			filters['limit'] = Number(filters['limit'])
		}
		
		return filters;
	}
}