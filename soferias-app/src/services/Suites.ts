import Suite from "@/libs/database/Suites";

const SuiteService = {
  getSuites: async (page = 1, limit = 15) => {
    const offset = (page -1) * limit;
    const orderBy = {publishedAt: "desc"};
    const data = await Suite.get({ orderBy, limit, offset });
    const total = await Suite.count({});
    const totalPages = Math.ceil(total / limit);

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
        totalPages
      },
    };
    // Suite.get({})

  },
};

export default SuiteService;