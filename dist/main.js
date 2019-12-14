"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const userApiOptions = new swagger_1.DocumentBuilder()
        .setTitle('app API Doc')
        .setDescription('app API Info')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('app')
        .build();
    const userApiDocument = swagger_1.SwaggerModule.createDocument(app, userApiOptions);
    swagger_1.SwaggerModule.setup('v1/api/', app, userApiDocument);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map