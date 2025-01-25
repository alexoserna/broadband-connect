const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type Unit {
    _id: ID!
    code: String!
    title: String!
    group: String
  }

  type Course {
    _id: ID!
    title: String!
    slug: String!
    tagline: String!
    courseIcon: String
    courseDescription: String!
    courseInformation: String!
    coreUnits: [Unit]
    learningOutcomes: [String]
    nbnSkills: [String]
    images: [String]
    cost: Float
  }

  type Certification {
    _id: ID!
    title: String!
    slug: String!
    tagline: String!
    courseIcon: String
    description: String!
    category: String!
    cost: Float
    duration: Duration
    deliveryMode: [String]
    careerOutcomes: [String]
    learningOutcomes: [String]
    structure: Structure
    skillTree: [Course]
  }

  type Duration {
    months: Int
    hours: Int
  }

  type Structure {
    totalUnits: Int
    coreUnits: [Unit]
    electiveUnits: [Unit]
  }

  type Query {
    getAllUnits: [Unit]
    getUnitsByGroup(group: String!): [Unit]
    getAllCourses: [Course]
    getAllCertifications: [Certification]
    getCourseBySlug(slug: String!): Course
    getCertificationBySlug(slug: String!): Certification
    searchCertifications(searchTerm: String!): [Certification]
    searchUnits(searchTerm: String!): [Unit]
    searchCourses(searchTerm: String!): [Course]
    siteWideSearch(searchTerm: String!): SiteWideSearchResult
  }

  type SiteWideSearchResult {
    courses: [Course]
    certifications: [Certification]
    units: [Unit]
  }

  type Mutation {
    createUnit(code: String!, title: String!, group: String): Unit
    updateUnit(id: ID!, code: String, title: String, group: String): Unit
    deleteUnit(id: ID!): Unit

    createCourse(
      title: String!
      slug: String!
      tagline: String!
      courseIcon: String
      courseDescription: String!
      courseInformation: String!
      cost: Float
      learningOutcomes: [String]
      nbnSkills: [String]
      images: [String]
    ): Course
    updateCourse(id: ID!, title: String, cost: Float): Course
    deleteCourse(id: ID!): Course

    createCertification(
      title: String!
      slug: String!
      tagline: String!
      courseIcon: String
      description: String!
      category: String!
      cost: Float
      duration: DurationInput
      deliveryMode: [String]
      careerOutcomes: [String]
      learningOutcomes: [String]
      structure: StructureInput
      skillTree: [ID]
    ): Certification
    updateCertification(id: ID!, title: String, cost: Float): Certification
    deleteCertification(id: ID!): Certification
  }

  input DurationInput {
    months: Int
    hours: Int
  }

  input StructureInput {
    totalUnits: Int
    coreUnits: [ID]
    electiveUnits: [ID]
  }
`;

module.exports = typeDefs;
