import { Entity, PrimaryGeneratedColumn, BaseEntity, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { Car } from '../car/car.entity';

@Entity()
@Unique(['car'])
export class Discount extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(_type => Car, ({ id }) => id)
  @JoinColumn({ name: 'car'})
  car: Car;
}