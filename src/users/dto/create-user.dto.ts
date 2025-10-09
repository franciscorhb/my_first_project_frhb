// src/users/dto/create-user.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';

// 1. Usamos Omit para crear el DTO a partir del tipo User,
//    excluyendo los campos que son autogenerados o gestionados por Prisma/DB.
export class CreateUserDto
  implements Omit<User, 'id' | 'createdAt' | 'updatedAt'>
{
  // Nota: Si 'role' tiene un valor por defecto en Prisma, omítelo.
  // Si no tiene valor por defecto, inclúyelo aquí (ejemplo abajo).

  @ApiProperty({ required: true, example: 'usuario@empresa.com' })
  email: string;

  @ApiProperty({ required: true, example: 'John Doe' })
  name: string;

  @ApiProperty({ required: true, example: 'password123' })
  password: string;

  @ApiProperty({ required: true, example: '+1-555-0001' })
  telephone: string;

  // Si 'role' NO tiene un valor por defecto, DEBES incluirlo aquí
  @ApiProperty({ required: true, enum: Role, example: Role.USER })
  role: Role; // Asegúrate de que 'Role' se importa correctamente desde @prisma/client

  @ApiProperty({ required: true, example: 1, description: 'ID del Tenant' })
  tenantId: number;
}
