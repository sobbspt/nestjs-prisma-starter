import { ApiProperty } from "@nestjs/swagger";

export class PostQueryInput {
  @ApiProperty({ required: false })
  query: string;
}
