import { gql } from "@apollo/client";

export const QUERY_COURSES = gql`
    query GetCourses {
        getCourses{
            id
            title
            description
            category
            slug
            cost {
                total
                perModule
            }
            structure {
                totalUnits
                coreUnits {
                    code
                    title
                }
                electiveUnits {
                    code
                    title
                    group
                }
            }
            skillTree {
                skillName
                price
                description
                outcomes {
                    code
                    title
                }
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
    query getCourseBySlug($slug: String!) {
        getCourseBySlug(slug: $slug) {
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
