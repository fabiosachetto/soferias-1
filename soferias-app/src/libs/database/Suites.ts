 import { PrismaClient } from "@prisma/client";

 const prisma = new PrismaClient();

 const MAX_RECORDS = 50;
 const MIN_OFFSET = 0;

 const Suite = {
  get: async ({ where = {}, orderBy = {}, limit = 10, offset = 0 }) => {

    const take = Math.min(limit, MAX_RECORDS);
    const skip = Math.max(offset, MIN_OFFSET);

    const records = await prisma.suite.findMany({
      where,
      orderBy,
      take,
      skip,
    });
    // console.log("*** - DB Suite records:", records);
    return records;
  },
  
  count: async ({ where = {} }) => {

    const count = await prisma.suite.count({
      where,
    });
    // console.log("*** - DB Suite records:", records);
    return count;
  }
 };

 export default Suite;