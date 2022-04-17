import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { slug } = req.query;
    const post = await prisma.post.findUnique({
      where: { slug: slug }
    })
    
    res.status(200).json(post);
  }
  