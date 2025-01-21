import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_COURSE_BY_SLUG } from "../utils/queries.js";

const CoursePost = () => {

  console.log('in the course post');
  const { slug: slug } = useParams();
  const { loading, error, data } = useQuery(QUERY_COURSE_BY_SLUG, { variables: { slug }, fetchPolicy: "network-only" });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} <br />
    Data: {JSON.stringify(data, null, 2)} <br />
    In course post{slug}</p>;

  const course = data.getCourseBySlug;

  return <h1>The course is {course.title}</h1>;
};

export default CoursePost;
