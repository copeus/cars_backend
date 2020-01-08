import { Controller } from '@nestjs/common';
import AppController from 'src/app.controller';
import { ManufacturerService } from './manufactures.service';

@Controller('manufacture')
class ManufactureController extends AppController  {
  constructor() {
    super(ManufacturerService)
  }
}

export default ManufactureController;
