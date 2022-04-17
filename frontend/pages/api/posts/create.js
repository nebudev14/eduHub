import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {    
    const result = await prisma.post.create({
        data: {
            title: req.body.title,
            desc: req.body.desc,
            link: req.body.link,
            author: req.body.author,
            keywords: req.body.keywords
        }
    })
    res.status(200).json(result)
  }
  