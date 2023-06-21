import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService],
})
export class AppModule {}
