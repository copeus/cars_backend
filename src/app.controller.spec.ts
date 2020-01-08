import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const now = new Date();

const polo = {
  id: 1,
  price: 18500,
  firstRegistrationDate: now,
  manufacturer: {
    id: 1,
    name: 'Volkswagen',
    phone: '+38000009',
    siret: +now
  },
  owners: [
    { id: 1, name: 'Dyadya', purschaseDate: now },
    { id: 2, name: 'Kevin', purschaseDate: now }
   ]
}

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getCars()).toBe([]);
    });
  });
});
