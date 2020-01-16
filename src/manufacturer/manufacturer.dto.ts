import { ApiProperty } from "@nestjs/swagger";

export class ManufacturerDto {
  @ApiProperty()
  id?: String

  @ApiProperty()
  name?: String

  @ApiProperty()
  phone?: String

  @ApiProperty()
  siret?: Number
}