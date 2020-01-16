import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { Car } from './car/car.entity';
import { Manufacturer } from './manufacturer/manufacturer.entity';
import { Owner } from './owner/owner.entity';
import { CarModule } from './car/car.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { OwnerModule } from './owner/owner.module';
import { DiscountModule } from './discount/discount.module';
import { Discount } from './discount/discount.entity';

const config:any = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "cars",
  entities: [Car, Manufacturer, Owner, Discount],
  synchronize: true
}

const customModules = [
  CarModule,
  ManufacturerModule,
  OwnerModule,
  DiscountModule
]

@Module({
  imports: [TypeOrmModule.forRoot(config), ScheduleModule.forRoot(), ...customModules]
})
export class AppModule {}
