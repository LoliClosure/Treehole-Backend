import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  @ApiProperty({ description: '用户昵称' })
  nickname?: string;

  @ApiProperty({ description: '用户头像' })
  avatar?: string;
}
