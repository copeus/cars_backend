import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function root() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => console.log('App listen at http://localhost:3000'));
}

root();
