import { NestFactory } from '@nestjs/core';
import { NextFunction, Request } from "express";
import {AppModule} from "./app.module";
import { ASYNC_STORAGE, LOGGER } from "./common/constants";
import {CustomLoggerService} from "./common/logger/custom-logger.service";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";
import { v4 } from 'uuid';
import { Logger } from "./common/logger/logger";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const logger = new Logger('App')
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: logger,
  });
  
  const configService = app.get<ConfigService>(ConfigService)

  app.setGlobalPrefix(configService.get<string>('app.global_prefix'));
  app.enableCors();

  app.use((req: Request, res: any, next: NextFunction) => {
    logger.log(`New request from ${req.ip} to ${req.path}`)
    const asyncStorage = app.get(ASYNC_STORAGE);
    const traceId = req.headers['x-request-id'] || v4().toString();
    const store = new Map<string, string>().set('traceId', traceId as string);
    asyncStorage.run(store, () => {
      next();
    });
  });

  app.useGlobalPipes(new ValidationPipe());

  app.useLogger(app.get<CustomLoggerService>(LOGGER));

  const swaggerConfig = new DocumentBuilder()
      .setTitle('GVC Projects')
      .setDescription('GVC Projects MVC')
      .setVersion('1.0.0')
      .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(configService.get<number>('app.port'));
}

bootstrap().catch((err: unknown) => console.error(err))
