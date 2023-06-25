import { Module } from '@nestjs/common';
import { FETCH } from "../constants";
import { Fetch } from "./fetch";

@Module({
				providers: [
								{
												provide: FETCH,
												useFactory: () => {
																return new Fetch();
												}
								},
				],
				exports: [FETCH],
})
export class LoggerModule {}
