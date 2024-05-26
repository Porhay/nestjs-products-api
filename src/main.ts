import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const logger = new Logger('main');

  app.enableCors();
  app.setGlobalPrefix('api');

  const port = config.get('API_PORT');
  await app.listen(port, () => {
    logger.log(`Server is started on PORT: ${port}`);
  });
}
bootstrap();
