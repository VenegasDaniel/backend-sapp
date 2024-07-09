import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpia los datos existentes
  await prisma.contribution.deleteMany();

  // Inserta datos de prueba
  await prisma.contribution.createMany({
    data: [
      {
        employeeId: 'emp001',
        amount_afp: 150000,
        amount_isapre: 80000,
        amount_seguro: 20000,
        amount_total: 250000,
        date: new Date()
      },
      {
        employeeId: 'emp002',
        amount_afp: 120000,
        amount_isapre: 60000,
        amount_seguro: 15000,
        amount_total: 195000,
        date: new Date()
      },
      {
        employeeId: 'emp003',
        amount_afp: 180000,
        amount_isapre: 90000,
        amount_seguro: 30000,
        amount_total: 300000,
        date: new Date()
      },
      // Añade más datos de prueba según sea necesario
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
