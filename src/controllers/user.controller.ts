import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserBody } from 'src/dtos/user-body';

@Controller('users')
export class UserController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getUsers() {
    const users = await this.prisma.user.findMany();

    return {
      users: users.length,
      data: users,
    };
  }

  @Post()
  async createuser(@Body() body: UserBody) {
    await this.prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });

    return {
      name: body.name,
      email: body.email,
    };
  }
}
