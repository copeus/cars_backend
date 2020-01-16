import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { Cron } from '@nestjs/schedule';
import { Car } from './car.entity';
import { AppService } from '../app.service';
import { CarDto } from './car.dto';
import { Discount } from '../discount/discount.entity';
import { Owner } from '../owner/owner.entity';

const MONTHLY = '0 0 1 * * *';
const MINUTELY = '30 * * * * *';

@Injectable()
export class CarService extends AppService {
  constructor() {
    super(Car)
  }
  async find(input?: CarDto) {
    const find:any = { ...input };
    delete find.id;
    const joined = this.Entity.createQueryBuilder('cars').leftJoinAndSelect('cars.manufacturer', 'manufacturers').leftJoinAndSelect('cars.owners', 'owners');
    return input && input.id ? joined.where(find).andWhereInIds(input.id).getMany() : joined.where(find).getMany();
  }
  async create(payload: CarDto) {
    const input = { ...payload, firstRegistrationDate: moment('2018-10-20', 'YYYY-MM-DD').format(), owners: payload.owners.map((id) => ({ id: +id }))};
    const newCar = this.Entity.create(input);
    const res = await this.Entity.save(newCar);
    return res;
  }

  @Cron(MONTHLY)
  async expiredUsers() {
    const expireDate = moment().subtract(18, 'month');
    const owners = await Owner.find();

    const expired = owners.filter((owner) => {
      const purchaseDate = moment(owner.purchaseDate);
      const isExpired = purchaseDate.isBefore(expireDate);

      return isExpired;
    });
    expired.length > 0 && Owner.remove(expired);
  }

  @Cron(MONTHLY)
  async discount() {
    const start = moment().subtract(12, 'month');
    const end = moment().subtract(18, 'month');
    const cars = await this.find();
    const discount = await Discount.find({ relations: ['car'] });
    const newDiscounts = [];

    cars.forEach((car: any) => {
      const carDate = moment(car.firstRegistrationDate);
      const isBetween = carDate.isBetween(end, start, null, '()');
      const isHaveDiscount = discount.filter((item) => {
        return +item.car.id === +car.id
      }).length > 0;

      if (isBetween && !isHaveDiscount) {
        const res = { ...car, price: Math.floor(+car.price * 0.8) };

        const newDiscount = new Discount();
        newDiscount.car = car
        newDiscounts.push(newDiscount);
        this.Entity.save(res);
      }
    });
    newDiscounts.length > 0 && Discount.save(newDiscounts);
  }
}
