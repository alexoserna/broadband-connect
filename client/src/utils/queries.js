import { gql } from "@apollo/client";

// Queries

export const QUERY_UNITS = gql`
query GetAllUnits {
  getAllUnits {
    _id
    code
    title
    group
  }
}
`;

export const QUERY_COURSES = gql`
    query GetAllCourses {
  getAllCourses {
    _id
    title
    slug
    courseIcon
    tagline
    description
    courseInformation
    cost
    coreUnits {
      _id
      code
      title
    }
    learningOutcomes
    nbnSkills
    images
    cost
  }
}
`;

export const QUERY_CERTIFICATIONS = gql`
query GetAllCertifications {
  getAllCertifications {
    _id
    title
    slug
    images
    tagline
    courseIcon
    description
    category
    cost
    duration {
      months
    }
    deliveryMode
    assessmentMethods
    learningOutcomes
    careerOutcomes
    structure {
      totalUnits
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
    skillTree {
      _id
      title
      slug
    }
  }
}
`;

export const QUERY_COURSE = gql`
    query getOneCourse($id: ID!) {
        getCourseById(id: $id) {
            _id
          title
          slug
          tagline
          description
          courseIcon
          courseInformation
          cost
          coreUnits {
            _id
            code
            title
          }
          learningOutcomes
          nbnSkills
          images
          cost
        }
    }
`;

export const QUERY_COURSE_BY_SLUG = gql`
    query GetCourseBySlug($slug: String!) {
  getCourseBySlug(slug: $slug) {
    _id
    title
    slug
    tagline
    description
    courseIcon
    courseInformation
    cost
    coreUnits {
      _id
      code
      title
    }
    learningOutcomes
    nbnSkills
    images
    cost
  }
}

`;

export const QUERY_CERTIFICATION_BY_SLUG = gql`
query GetCertificationBySlug($slug: String!) {
  getCertificationBySlug(slug: $slug) {
    _id
    title
    slug
    images
    tagline
    courseIcon
    description
    category
    cost
    duration {
      months
      hours
    }
    deliveryMode
    careerOutcomes
    learningOutcomes
    assessmentMethods
    structure {
      totalUnits
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
    skillTree {
      _id
      title
      slug
    }
  }
}
`;

export const QUERY_SITE_WIDE_SEARCH = gql`
  query SiteWideSearch($searchTerm: String!) {
    searchCourses(searchTerm: $searchTerm) {
      _id
      images
      courseIcon
      title
      slug
      description
    }
    searchCertifications(searchTerm: $searchTerm) {
      _id
      images
      courseIcon
      title
      slug
      tagline
      description
    }
    searchUnits(searchTerm: $searchTerm) {
      _id
      code
      title
      group
    }
  }
`;

export default {
  QUERY_UNITS,
  QUERY_COURSES,
  QUERY_CERTIFICATIONS,
  QUERY_COURSE,
  QUERY_COURSE_BY_SLUG,
  QUERY_CERTIFICATION_BY_SLUG,
};