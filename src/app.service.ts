import { Injectable } from '@nestjs/common';
import { CarDto } from './car/car.dto';
import { ManufacturerDto } from './manufacturer/manufacturer.dto';
import { OwnerDto } from './owner/owner.dto';
import { DiscountDto } from './discount/discount.dto';

type payloadType = OwnerDto | ManufacturerDto | CarDto | DiscountDto

@Injectable()
export class AppService {
  public Entity: any
  constructor(Entity: any) {
    this.Entity = Entity
  }

  async find(input?: Object) {
    const find = input ? input : {};
    return await this.Entity.find(find);
  }

  async create(payload: payloadType) {
    const newCar = this.Entity.create(payload);
    return await this.Entity.save(newCar);
  }

  async update(id: String, payload: payloadType) {
    return await this.Entity.update(id, payload);
  }

  async delete(payload: payloadType) {
    const item = await this.find(payload);
    return await this.Entity.remove(item);
  }
}
