import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    
    await prisma.user.create({
      data: {
        name: 'Enderson',
        email: 'souuza98120@gmail.com',
        posts: {
          create: { title: 'Iniciando no prisma' },
        },
        profile: {
          create: { bio: 'Programador Back-end' },
        },
      },
    })
  
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })
    console.dir(allUsers, { depth: null })
  }



main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })