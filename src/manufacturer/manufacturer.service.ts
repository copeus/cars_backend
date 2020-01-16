import { Injectable } from '@nestjs/common';
import { Manufacturer } from './manufacturer.entity';
import { AppService } from '../app.service';

@Injectable()
export class ManufacturerService extends AppService {
  constructor() {
    super(Manufacturer)
  }
}
