import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, BaseEntity, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
import { Owner } from '../owner/owner.entity';
import { Manufacturer } from '../manufacturer/manufacturer.entity';

@Entity('cars')
export class Car extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @ManyToOne(_type => Manufacturer, ({ id }) => id)
  @JoinColumn()
  manufacturer: Manufacturer;

  @Column()
  price: Number;

  @Column()
  firstRegistrationDate: Date;

  @ManyToMany(_type => Owner, ({ id }) => id)
  @JoinTable()
  owners: Owner[];
}