import { Controller } from '@nestjs/common';
import AppController from 'src/app.controller';
import { OwnersService } from './owners.service';

@Controller('owners')
class OwnersController extends AppController {
  constructor() {
    super(OwnersService)
  }
}

export default OwnersController;
