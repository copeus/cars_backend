import { Controller } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Get, Post, Body, Query, Delete, Put } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerDto } from './owner.dto';

@ApiTags('Owners')
@Controller('owners')
class OwnerController {
  service = new OwnerService();
  @Get()
  @ApiOkResponse({ type: OwnerDto, isArray: true })
  async find(@Query() params: OwnerDto) {
    return await this.service.find(params);
  }
  @Get()
  @ApiOkResponse({ type: OwnerDto, isArray: true })
  async getAll() {
    return await this.service.find();;
  }
  @Post()
  @ApiOkResponse({ type: OwnerDto, isArray: true })
  create(@Body() payload: OwnerDto) {
    return this.service.create(payload);
  }
  @Put()
  @ApiOkResponse({ type: OwnerDto, isArray: true })
  async update(@Body() payload: OwnerDto) {
    const res = await this.service.update(payload.id, payload);
    return { changed: !!res.raw.changedRows };
  }
  @Delete()
  @ApiOkResponse({ type: OwnerDto, isArray: true })
  delete(@Body() payload: OwnerDto) {
    return this.service.delete(payload);
  }
}

export default OwnerController;
