
import { gql, useQuery } from '@apollo/client';

const GET_COURSES = gql`
  query{
    courses{
    title
    description
    }
  }
`;


const Courses = () => {

  const { loading, error, data } = useQuery(GET_COURSES);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {data.courses.map((course, index) => (
          <li key={index}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Courses;
