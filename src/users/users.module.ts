import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa el módulo de Prisma

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PrismaModule], // Hace que PrismaService esté disponible
})
export class UsersModule {}