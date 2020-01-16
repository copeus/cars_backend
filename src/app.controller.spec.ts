import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { AppModule } from './app.module';

import CarController from './car/car.controller';
import OwnerController from './owner/owner.controller';
import ManufacturerController from './manufacturer/manufacturer.controller';

import { CarDto } from './car/car.dto';
import { OwnerDto } from './owner/owner.dto';
import { ManufacturerDto } from './manufacturer/manufacturer.dto';

const newCar:CarDto = {
  price: 15000,
  firstRegistrationDate: new Date(),
  manufacturer: 1,
  owners: [1]
}

const newOnwer:OwnerDto = {
  name: 'Michael',
  purchaseDate: new Date()
}

const newManufacturer:ManufacturerDto = {
  name: 'MG',
  phone: '+41241232',
  siret: 123124131
}


describe('AppController', () => {
  let carController: CarController;
  let ownerController: OwnerController;
  let manufacturerController: ManufacturerController;

  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = await module.createNestApplication().init();

    carController = app.get<CarController>(CarController)
    ownerController = app.get<OwnerController>(OwnerController)
    manufacturerController = app.get<ManufacturerController>(ManufacturerController)

  });

  describe('Cars', () => {
    it('Should return all cars', async () => {
      expect(await carController.getAll()).toHaveLength;
    });
    it('Should return car by filter', async () => {
      expect(await carController.find({ id: '1' })).toHaveLength;
    })
    it('Should create a car', async () => {
      expect(await carController.create(newCar)).toHaveProperty('id');
    })
    it('Should update a car', async () => {
      expect(await carController.update({ id: '1', price: 15000 })).toHaveProperty('changed');
    })
    it('Should delete a car', async () => {
      const created = await carController.create(newCar)
      expect(await carController.delete({ id: created.id })).toHaveLength;
    })
  });

  describe('Owners', () => {
    it('Should return all onwers', async () => {
      expect(await ownerController.getAll()).toHaveLength;
    });
    it('Should return owner by filter', async () => {
      expect(await ownerController.find({ id: '1' })).toHaveLength;
    })
    it('Should create an owner', async () => {
      expect(await ownerController.create(newOnwer)).toHaveProperty('id');
    })
    it('Should update an owner', async () => {
      expect(await ownerController.update({ id: '1', name: 'John' })).toHaveProperty('changed');
    })
    it('Should delete an owner', async () => {
      const created = await ownerController.create(newOnwer)
      expect(await ownerController.delete({ id: created.id })).toHaveLength;
    })
  });

  describe('Manufacturers', () => {
    it('Should return all manufacturers', async () => {
      expect(await manufacturerController.getAll()).toHaveLength;
    });
    it('Should return manufacturer by filter', async () => {
      expect(await manufacturerController.find({ id: '1' })).toHaveLength;
    })
    it('Should create a manufacturer', async () => {
      expect(await manufacturerController.create(newManufacturer)).toHaveProperty('id');
    })
    it('Should update a manufacturer', async () => {
      expect(await manufacturerController.update({ id: '1', name: 'Abarth' })).toHaveProperty('changed');
    })
    it('Should delete a manufacturer', async () => {
      const created = await manufacturerController.create(newManufacturer)
      expect(await manufacturerController.delete({ id: created.id })).toHaveLength;
    })
  });

  afterEach(async () => {
    await app.close()
  })
});


