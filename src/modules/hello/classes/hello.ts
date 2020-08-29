import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Hello {
  @ApiProperty({ example: 'lzc', description: 'name ' })
  name: string;

  @ApiProperty({ example: 1, description: 'age' })
  age: number;

  @ApiProperty({ example: 'male', description: 'gender' })
  gender: string;

  @ApiProperty({ example: 'id', description: 'id' })
  id: string;

  @ApiProperty({ enum: UserRole })
  role: UserRole;
}
