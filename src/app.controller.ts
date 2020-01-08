import { Get, Post, Body, Query, Delete, Put } from '@nestjs/common';

interface Owner {
  id: String
  name: String
  purchaseDate: Date
}

interface Manufacture {
  id: String
  name: String
  phone: String
  siret: Number
}

interface Car {
  id: String
  manufacturer: String
  price: Number
  firstRegistrationDate: Date
  owners: Array<String>
}

type payloadType = Owner | Manufacture | Car

class AppController {
  service: any;
  constructor(Service: any) {
    this.service = new Service();
  }

  @Get()
  async find(@Query() params: Object) {
    const cars = await this.service.find(params);
    return cars;
  }
  @Get()
  async getAll() {
    const cars = await this.service.find();
    return cars;
  }
  @Post()
  create(@Body() payload: payloadType) {
    const response = this.service.create(payload);
    return response;
  }
  @Put()
  update(@Body() payload: payloadType) {
    const response = this.service.update(payload.id, payload);
    return response;
  }
  @Delete()
  delete(@Body() payload: payloadType) {
    const response= this.service.delete(payload.id);
    return response;
  }
}

export default AppController;
