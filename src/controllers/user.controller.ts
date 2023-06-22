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
        socialName: body.socialName,
        email: body.email,
        document: body.document,
        password: body.password,
        phone: body.phone,
        address: {
          street: body.address.street,
          number: body.address.number,
          neighborhood: body.address.neighborhood,
          complement: body.address.complement,
          city: body.address.city,
          state: body.address.state,
          zipCode: body.address.zipCode,
        },
      },
    });

    return {
      name: body.name,
      email: body.email,
    };
  }
}
