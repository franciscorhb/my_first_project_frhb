
import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';

export class CreateUserDto
  implements Omit<User, 'id' | 'createdAt' | 'updatedAt'>
{
  @ApiProperty({ required: true, example: 'usuario@empresa.com' })
  email: string;

  @ApiProperty({ required: true, example: 'John Doe' })
  name: string;

  @ApiProperty({ required: true, example: 'password123' })
  password: string;

  @ApiProperty({ required: true, example: '+1-555-0001' })
  telephone: string;

  @ApiProperty({ required: true, enum: Role, example: Role.USER })
  role: Role; 

  @ApiProperty({ required: true, example: 1, description: 'ID del Tenant' })
  tenantId: number;   
}