import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 建立Swagger頁面設定檔  
  const userApiOptions = new DocumentBuilder()
    .setTitle('app API Doc')
    .setDescription('app API Info')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('app') // match tags in controllers
    .build();

  // 沒有指定第三個參數代表所有Module的controller都會被偵測
  const userApiDocument = SwaggerModule.createDocument(app, userApiOptions);
  // 指定Swagger API頁面路徑及傳入nest app及頁面設定檔
  SwaggerModule.setup('v1/api/', app, userApiDocument);

  await app.listen(3000);
}
bootstrap();
