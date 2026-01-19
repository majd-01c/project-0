import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const password = await bcrypt.hash('123456', 10);

  await prisma.user.upsert({
    where: { email: 'majd' },
    update: {},
    create: {
      email: 'majd',
      password,
      firstName: 'Majd',
      lastName: 'User',
    },
  });

  console.log('✅ Seed user "majd" created with password "123456"');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
