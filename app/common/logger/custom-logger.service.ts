import { Inject, Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import {ASYNC_STORAGE} from "../constants";
import { Logger } from './logger';

@Injectable()
export class CustomLoggerService {
	private readonly logger: Logger = new Logger(CustomLoggerService.name);
	constructor(
		@Inject(ASYNC_STORAGE)
		private readonly asyncStorage: AsyncLocalStorage<Map<string, string>>,
	) {}

	debug(msg: string, context?: string, opts?: any) {
		const traceId = this.asyncStorage.getStore()?.get('traceId');
		this.logger.log(msg, context, {
			traceId,
		});
	}

	log(msg: string, context?: string, opts?: any): any {
		const traceId = this.asyncStorage.getStore()?.get('traceId');
		this.logger.log(msg, context, {
			traceId,
		});
	}

	warn(msg: string, context?: string, opts?: any) {
		const traceId = this.asyncStorage.getStore()?.get('traceId');
		this.logger.warn(msg, context, {
			traceId,
		});
	}

	error(msg: string, context?: string, stack?: any, opts?: any) {
		const traceId = this.asyncStorage.getStore()?.get('traceId');
		this.logger.error(msg, context, stack, {
			traceId,
		});
	}
}
