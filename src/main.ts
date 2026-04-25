import 'dotenv/config';
import {NestFactory} from "@nestjs/core";
import {NestExpressApplication} from "@nestjs/platform-express";
import {AppModule} from "@/app.module";
import {configureSwagger} from "@/configs/swagger.config";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  configureSwagger(app);
  await app.listen(8888, () => console.log("Server is up and running"));
}

bootstrap();