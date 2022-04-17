import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const result = await prisma.teacher.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }
    })
    res.status(200).json(result)
  }
  