import { Injectable } from '@nestjs/common';
import { ManufacturerModel } from '../DB';
import { AppService } from 'src/app.service';

@Injectable()
export class ManufacturerService extends AppService {
  constructor(){
    super(ManufacturerModel)
  }
}
