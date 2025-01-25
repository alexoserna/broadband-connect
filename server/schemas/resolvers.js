const { Course, Certification, Unit } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    siteWideSearch: async (_, { searchTerm }, context, info) => {
      // Reuse existing individual search functions
      const [courses, certifications, units] = await Promise.all([
        resolvers.Query.searchCourses(_, { searchTerm }, context, info),
        resolvers.Query.searchCertifications(_, { searchTerm }, context, info),
        resolvers.Query.searchUnits(_, { searchTerm }, context, info),
      ]);

      return {
        courses,
        certifications,
        units,
      };
    },
    //Search Items
    searchCourses: async (_, { searchTerm }) => {
      return await Course.find({
        $or: [
          { title: { $regex: searchTerm, $options: "i" } },
          { courseDescription: { $regex: searchTerm, $options: "i" } }
        ]
      });
    },
    searchCertifications: async (_, { searchTerm }) => {
      return await Certification.find({
        $or: [
          { title: { $regex: searchTerm, $options: "i" } },
          { tagline: { $regex: searchTerm, $options: "i" } },
          { description: { $regex: searchTerm, $options: "i" } }
        ]
      });
    },
    searchUnits: async (_, { searchTerm }) => {
      return await Unit.find({
        $or: [
          { code: { $regex: searchTerm, $options: "i" } },
          { title: { $regex: searchTerm, $options: "i" } }
        ]
      });
    },

    // Units
    getAllUnits: async () => {
      return await Unit.find();
    },
    getUnitsByGroup: async (_, { group }) => {
      return await Unit.find({ group });
    },

    // Courses
    getAllCourses: async () => {
      return await Course.find().populate("coreUnits").populate("electiveUnits");
    },
    getCourseBySlug: async (_, { slug }) => {
      return await Course.findOne({ slug }).populate("coreUnits").populate("electiveUnits");
    },

    // Certifications
    getAllCertifications: async () => {
      return await Certification.find()
        .populate({
          path: "structure.coreUnits structure.electiveUnits",
          model: "Unit",
        })
        .populate({
          path: "skillTree",
          model: "Course",
        });
    },
    getCertificationBySlug: async (_, { slug }) => {
      return await Certification.findOne({ slug })
        .populate({
          path: "structure.coreUnits structure.electiveUnits",
          model: "Unit",
        })
        .populate({
          path: "skillTree",
          model: "Course",
        });
    },
  },

  Mutation: {
    // Units
    createUnit: async (_, { code, title, group }) => {
      return await Unit.create({ code, title, group });
    },
    updateUnit: async (_, { id, code, title, group }) => {
      return await Unit.findByIdAndUpdate(
        id,
        { code, title, group },
        { new: true } // Return updated document
      );
    },
    deleteUnit: async (_, { id }) => {
      return await Unit.findByIdAndDelete(id);
    },

    // Courses
    createCourse: async (_, args) => {
      return await Course.create(args);
    },
    updateCourse: async (_, { id, ...updates }) => {
      return await Course.findByIdAndUpdate(id, updates, { new: true });
    },
    deleteCourse: async (_, { id }) => {
      return await Course.findByIdAndDelete(id);
    },

    // Certifications
    createCertification: async (_, args) => {
      return await Certification.create(args);
    },
    updateCertification: async (_, { id, ...updates }) => {
      return await Certification.findByIdAndUpdate(id, updates, { new: true });
    },
    deleteCertification: async (_, { id }) => {
      return await Certification.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
