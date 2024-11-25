import Suite from "@/libs/database/Suites";

const SuiteService = {
  getSuites: async (page = 1, limit = 10) => {
    const offset = (page -1) * limit;
    const orderBy = {publishedAt: "desc"};
    const data = await Suite.get({ orderBy, limit, offset });
    const total = await Suite.count({});

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
      },
    };
    // Suite.get({})

  },
};

export default SuiteService;