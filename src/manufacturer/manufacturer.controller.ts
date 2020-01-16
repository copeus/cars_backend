import { Controller } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Get, Post, Body, Query, Delete, Put } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerDto } from './manufacturer.dto';

@ApiTags('Manufacturers')
@Controller('manufacturers')
class ManufacturerController {
  service = new ManufacturerService();
  @Get()
  @ApiOkResponse({ type: this.dto, isArray: true })
  async find(@Query() params: ManufacturerDto) {
    return await this.service.find(params);
  }
  @Get()
  @ApiOkResponse({ type: ManufacturerDto, isArray: true })
  async getAll() {
    return await this.service.find();
  }
  @Post()
  @ApiOkResponse({ type: ManufacturerDto, isArray: true })
  create(@Body() payload: ManufacturerDto) {
    return this.service.create(payload);
  }
  @Put()
  @ApiOkResponse({ type: ManufacturerDto, isArray: true })
  async update(@Body() payload: ManufacturerDto) {
    const res = await this.service.update(payload.id, payload);
    return { changed: !!res.raw.changedRows };
  }
  @Delete()
  @ApiOkResponse({ type: ManufacturerDto, isArray: true })
  delete(@Body() payload: ManufacturerDto) {
    return this.service.delete(payload);
  }
}

export default ManufacturerController;
