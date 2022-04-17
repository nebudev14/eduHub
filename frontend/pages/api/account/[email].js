import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { email } = req.query;
    
    const account = await prisma.teacher.findUnique({
      where: { email: email }
    })
    res.status(200).json(account)
  }
  