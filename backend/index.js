const { PrismaClient } = require("@prisma/client");

const express = require("express");
const cors = require("cors");
const prisma = new PrismaClient();

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
  const posts = prisma.post.findMany();
  res.json(posts);
});

app.get("/posts/:id", async (req, res) => {
  const post = prisma.post.findUnique({
    where: { id: req.params.id },
  });
  res.json(post);
});

app.post("/account/create", async (req, res) => {
  const result = await prisma.teacher.create({
    data: {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
    },
  });
  res.json(result);
});

app.listen(port, () => {
  console.log(`started server on port ${port}`);
});
