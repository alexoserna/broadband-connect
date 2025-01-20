
import { gql, useQuery } from '@apollo/client';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { QUERY_COURSES } from '../utils/queries.js';
import { Link, Links } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import SearchBar from '../components/SearchBar.jsx';


const Courses = () => {

  const theme = useTheme();
  const { loading, error, data } = useQuery(QUERY_COURSES)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} <br /> Data: {data}</p>;

  return (

    <Grid container spacing={0} sx={{width: '100vw'}}>
      {/* Overall Grid container ^^ */}

      {/* Hero Item */}
      <Grid
        size={12}
        sx={{
          py: '80px',
          backgroundColor: theme.palette.primary.main,
        }}>
        <Typography variant='h1'>"Find Your Next Step in Telecommunications Training"</Typography>
        <Typography variant='h5'>"Explore a variety of courses tailored to your career goals. Filter by category, skill level, or cost to find the perfect match for your journey."</Typography>
      </Grid>

      {/* Middle Nav/ filtering */}
      <Grid size={12}>
        <Container sx={{ display: 'flex', width: '50%', my: 5 }}>

          <SearchBar />
          <p>Insert filter/search button here</p>

        </Container>
      </Grid>

      {/* Course Group/Categorization */}
      <Grid size={12}>
        <Container>
          <Grid container sx={{ textAlign: 'left' }}>
            <Grid size={12}>
              <Typography variant='h4'>Get started with ...</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant='h5'>Open cabling</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant='h5'>Optical fiber endorsement</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant='h5'>Underground Pit and Pipe</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant='h5'>FTTC</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant='h2'>Certificate III</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant='h3'>Got RPL?</Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {/* View All Grid */}
      <Grid size={12}>
        <Container>
          <Grid container spacing={2}>
            {data.getCourses.map((course, index) => (
              <Grid key={index} size={{ xs: 6, md: 4 }}>
                <Typography component={Link} to={`/courses/${course.id}`} variant='body1'>{course.title}</Typography>
                <p>{course.id}</p>
                <p>{course.description}</p>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>

    </Grid>
  )
};

export default Courses;
