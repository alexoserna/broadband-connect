const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type Course {
    id: ID!
    title: String!
    description: String!
    category: String
    cost: Cost
    duration: Duration
    qualificationDescription: String!
    careerOutcomes: [String]
    structure: Structure
    learningOutcomes: [String]
    deliveryMode: String
    assessmentMethods: [String]
    skillTree: [Skill]
  }

  type Cost {
    total: Float!
    perModule: Float
  }

  type Duration {
    months: Int!
    hours: Int
  }

  type Structure {
    totalUnits: Int!
    coreUnits: [Unit]
    electiveUnits: [Unit]
  }

  type Unit {
    code: String!
    title: String!
    group: String
  }

  type Skill {
    skillName: String
    price: Float
    description: String
    outcomes: [Unit]
  }

  type Query {
    getCourses: [Course]!
    getCourseById(id: ID!): Course
  }

  type Mutation {
    createCourse(
      title: String!
      description: String!
      category: String
      cost: CostInput
      duration: DurationInput
      qualificationDescription: String!
      careerOutcomes: [String]
      structure: StructureInput
      learningOutcomes: [String]
      deliveryMode: String
      assessmentMethods: [String]
      skillTree: [SkillInput]
    ): Course
  }

  input CostInput {
    total: Float!
    perModule: Float
  }

  input DurationInput {
    months: Int!
    hours: Int
  }

  input StructureInput {
    totalUnits: Int!
    coreUnits: [UnitInput]
    electiveUnits: [UnitInput]
  }

  input UnitInput {
    code: String!
    title: String!
    group: String
  }

  input SkillInput {
    skillName: String
    price: Float
    description: String
    outcomes: [UnitInput]
  }
`;

module.exports = typeDefs;
