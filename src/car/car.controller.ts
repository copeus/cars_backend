import { Controller } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Get, Post, Body, Query, Delete, Put } from '@nestjs/common';
import { CarDto } from './car.dto';
import { CarService } from './car.service';

@ApiTags('Cars')
@Controller('cars')
class CarController {
  service = new CarService();

  @Get()
  @ApiOkResponse({ type: CarDto, isArray: true })
  async find(@Query() params: CarDto) {
    return await this.service.find(params);
  }
  @Get()
  @ApiOkResponse({ type: CarDto, isArray: true })
  async getAll() {
    return await this.service.find();
  }
  @Post()
  @ApiOkResponse({ type: CarDto, isArray: true })
  create(@Body() payload: CarDto) {
    return this.service.create(payload);
  }
  @Put()
  @ApiOkResponse({ type: CarDto, isArray: true })
  async update(@Body() payload: CarDto) {
    const res = await this.service.update(payload.id, payload);
    return { changed: !!res.raw.changedRows };
  }
  @Delete()
  @ApiOkResponse({ type: CarDto, isArray: true })
  delete(@Body() payload: CarDto) {
    return this.service.delete(payload);
  }
}

export default CarController;
