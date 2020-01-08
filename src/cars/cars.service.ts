import { Injectable } from '@nestjs/common';
import { CarModel } from '../DB';
import { AppService } from 'src/app.service';

@Injectable()
export class CarsService extends AppService {
  constructor(){
    super(CarModel)
  }
}
