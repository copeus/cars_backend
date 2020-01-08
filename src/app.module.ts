import { Module } from '@nestjs/common';
import CarsController from './cars/cars.controller';
import ManufactureController from './manufactures/manufactures.controller';
import { OwnersService } from './owners/owners.service';
import { ManufacturerService } from './manufactures/manufactures.service';
import { CarsService } from './cars/cars.service';
import OwnersController from './owners/owners.controller';

@Module({
  controllers: [CarsController, ManufactureController, OwnersController],
  providers: [ CarsService, ManufacturerService, OwnersService],
})
export class AppModule {}
