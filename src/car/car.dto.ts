import { ApiProperty } from "@nestjs/swagger";

export class CarDto {

  @ApiProperty()
  id?: String

  @ApiProperty()
  manufacturer?: Number

  @ApiProperty()
  price?: Number

  @ApiProperty()
  firstRegistrationDate?: Date

  @ApiProperty()
  owners?: Number[]
}