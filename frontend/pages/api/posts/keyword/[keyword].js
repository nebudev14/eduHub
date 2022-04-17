import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { keyword } = req.query;
    const posts = await prisma.post.findMany({
      where: {
        keywords: {
          has: keyword
        }
      }
    })

    res.status(200).json(posts);
  }
  