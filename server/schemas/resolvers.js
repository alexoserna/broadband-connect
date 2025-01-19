const { Course } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    courses: async () => {
      // Get and return all documents from the classes collection
      return await Course.find({});
    }
  }
};

module.exports = resolvers;
