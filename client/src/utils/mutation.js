import { gql } from "@apollo/client";

export const MUTATION_CREATE_COURSE = gql`
  mutation CreateCourse(
    $title: String!
    $slug: String!
    $courseDescription: String!
    $courseInformation: String!
    $cost: Float
    $learningOutcomes: [String]
    $nbnSkills: [String]
    $images: [String]
  ) {
    createCourse(
      title: $title
      slug: $slug
      courseDescription: $courseDescription
      courseInformation: $courseInformation
      cost: $cost
      learningOutcomes: $learningOutcomes
      nbnSkills: $nbnSkills
      images: $images
    ) {
      _id
      title
    }
  }
`;

export const MUTATION_UPDATE_COURSE_UNITS = gql`
  mutation UpdateCourseUnits($id: ID!, $coreUnits: [ID], $electiveUnits: [ID]) {
    updateCourse(id: $id, coreUnits: $coreUnits, electiveUnits: $electiveUnits) {
      _id
      title
      coreUnits {
        _id
        code
        title
      }
      electiveUnits {
        _id
        code
        title
      }
    }
  }
`;

export const MUTATION_DELETE_COURSE = gql`
  mutation DeleteCourse($id: ID!) {
    deleteCourse(id: $id) {
      _id
      title
    }
  }
`;

export default {
  MUTATION_CREATE_COURSE,
  MUTATION_UPDATE_COURSE_UNITS,
  MUTATION_DELETE_COURSE
};
