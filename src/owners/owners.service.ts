import { Injectable } from '@nestjs/common';
import { OwnerModel } from '../DB';
import { AppService } from 'src/app.service';

@Injectable()
export class OwnersService extends AppService {
  constructor(){
    super(OwnerModel)
  }
}
