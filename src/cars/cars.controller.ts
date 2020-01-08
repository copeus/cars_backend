import { Controller } from '@nestjs/common';
import AppController from 'src/app.controller';
import { CarsService } from './cars.service';

@Controller('cars')
class CarsController extends AppController {
  constructor() {
    super(CarsService)
  }
}

export default CarsController;
