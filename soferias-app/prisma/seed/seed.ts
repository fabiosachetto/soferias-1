import { PrismaClient } from "@prisma/client";

import suites from "../../src/data/suites.json";
import { slugify } from "../../src/helpers/slugify";

const prisma = new PrismaClient();

const isDev = process.env.NODE_ENV === "development";

async function main(){
  console.log("DB seed OK.");
  await seedSuites();
}

async function seedSuites() {

  if (!isDev) {
    throw new Error("NODE_ENV não é do ambiente de desenvolvimento");
  };

  //truncate
  // deleta todos os registros
  await prisma.suite.deleteMany();
  // limpa a sequencia 
  await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Suite");

  for (const suite of suites) {
    const record = await prisma.suite.create({
      data: {
        title: suite.title,
        slug: slugify(suite.title),
        suite_description: suite.suite_description,
        content: suite.content,
        image: suite.image,
        publishedAt: new Date(suite.publish_date),
      }
    });

    console.log("Criando Suites", record.id, record.title);
  }
}

main().then(async()=>{
  await prisma.$disconnect();
}).catch(async(e)=>{
  console.log(e);
  await prisma.$disconnect();
  process.exit(1);
});