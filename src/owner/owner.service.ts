import { Injectable } from '@nestjs/common';
import { Owner } from './owner.entity';
import { AppService } from '../app.service';

@Injectable()
export class OwnerService extends AppService {
  constructor() {
    super(Owner)
  }
}
