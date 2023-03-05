import { PrismaService } from '@/prisma/prisma.service';
import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findUserById = async (id: number) => {
    return await this.prisma.user.findUnique({ where: { id } });
  };

  findUserMany = () => {
    return this.prisma.user.findMany();
  };

  createUser = () => {
    return this.prisma.user.create({
      data: {
        name: faker.name.fullName(),
        email: faker.internet.email(),
      },
    });
  };
}
