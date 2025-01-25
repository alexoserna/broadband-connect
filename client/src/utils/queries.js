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
    courseDescription
    courseInformation
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
            slug
            assessmentMethods
            careerOutcomes
            category
            cost {
            perModule
            total
            }
            deliveryMode
            description
            duration {
            hours
            months
            }
            learningOutcomes
            qualificationDescription
            skillTree {
            description
            outcomes {
                code
                group
                title
            }
            price
            skillName
            }
            structure {
            totalUnits
            electiveUnits {
                code
                group
                title
            }
            coreUnits {
                code
                group
                title
            }
            }
            title
        }
    }
`;

export const QUERY_COURSE_BY_SLUG = gql`
    query GetCourseBySlug($slug: String!) {
  getCourseBySlug(slug: $slug) {
    _id
    title
    slug
    courseDescription
    courseInformation
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
    learningOutcomes
    nbnSkills
    images
    cost
  }
}

`;

export const QUERY_CERTIFICAITON_BY_SLUG =gql`
query GetCertificationBySlug($slug: String!) {
  getCertificationBySlug(slug: $slug) {
    _id
    title
    slug
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
      title
      slug
      courseDescription
    }
    searchCertifications(searchTerm: $searchTerm) {
      _id
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
    QUERY_CERTIFICAITON_BY_SLUG,
};