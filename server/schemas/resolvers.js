const { Course } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    getCourses: async () => {
      // Get and return all documents from the classes collection
      const courses = await Course.find({});
      return courses;
    },
    getCourseById: async (_, { id }) => {
      try {
        const course = await Course.findById(id); // MongoDB will automatically handle the conversion
        if (!course) throw new Error("Course not found");
        if (!course.duration.months) {
          course.duration.months = 0; // Default value
        }
        return course;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getCourseBySlug: async (_, { slug }) => {
      try {
        const course = await Course.findOne({ slug });
        if (!course) throw new Error("Course not found");
        if (!course.duration.months) {
          course.duration.months = 0; // Default value
        }
        return course;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  }
};

module.exports = resolvers;
