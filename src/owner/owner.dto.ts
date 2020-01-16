import { ApiProperty } from "@nestjs/swagger";

export class OwnerDto {
  @ApiProperty()
  id?: String

  @ApiProperty()
  name?: String

  @ApiProperty()
  purchaseDate?: Date
}