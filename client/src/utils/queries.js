import { gql } from "@apollo/client";

export const QUERY_COURSES = gql`
    query GetCourses {
        getCourses{
            id
            title
            description
            category
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