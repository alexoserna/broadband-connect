
import { gql, useQuery } from '@apollo/client';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { QUERY_COURSES } from '../utils/queries.js';
import { Link, Links } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import SearchBar from '../components/SearchBar.jsx';
import SkillTree from '../components/SkillTree.jsx';
import CourseDisplay from '../components/CourseDisplay.jsx';
import { useState } from 'react';

const Courses = () => {

  const theme = useTheme();
  const { loading, error, data } = useQuery(QUERY_COURSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} <br /> Data: {data}</p>;

  return (

    <Grid container spacing={4} sx={{ width: '100vw' }}>
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
        <Container sx={{ display: 'flex', width: { xs: '100%', md: '50%' } }}>

          <SearchBar courses={data.getCourses} />

        </Container>
      </Grid>

      {/* Course Group/Categorization */}
      <Grid size={12}>
        <Container>
          <Grid container spacing={2} sx={{ textAlign: 'left', mt: 3 }}>
            {/* Get started */}
            <Grid size={12}>
              <Typography variant='h5'>Get started with Open Cabler and work your way to FTTC Technician!</Typography>
            </Grid>
            {/*Skill tree Component*/}
            <SkillTree />

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  padding: 5,
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.text.secondary,
                  borderRadius: '18px',
                }}
              >
                <Typography variant='h2' gutterBottom >Certificate III</Typography>
                <Typography variant='body1'>
                  Looking to start fresh or advance in Telecommunications? Our Certificate III course gives you the skills and credentials to stand out from the crowd.
                </Typography>
                <Typography component={Link} to={`cert-iii`} sx={{ mt: "10px" }}>Learn More</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  padding: 5,
                  height: '100%',
                  borderRadius: '18px',
                  backgroundColor: theme.palette.accent.main
                }}
              >
                <Typography variant='h4' gutterBottom>Renew Your Certification with Ease!</Typography>
                <Typography variant='body1'>
                  RPL assesses your skills to renew your certification—no retraining needed!
                </Typography>
                <Typography color="" component={Link} to={`recognized-prior-learning`} sx={{ mt: "10px" }}>Learn More</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {/* View All Grid */}
      <Grid size={12}>
        <Container
          sx={{
            my: 8,
          }}
        >
          <Grid container spacing={4}>

            <Grid
              size={12}
              sx={{
                backgroundColor:  alpha(theme.palette.text.primary, 0.8),
                height: '80px',
                borderRadius: '18px',
                padding: 2,
              }}
            >
              <Typography variant='h5' color='textSecondary' > Course Overview </Typography>
            </Grid>

            {data.getCourses.map((course, index) => (
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <Container sx={{ maxWidth: '300px' }}>
                  <CourseDisplay
                    slug={course.slug}
                    title={course.title}
                    description={course.description}
                  />
                </Container>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>

    </Grid>
  )
};

export default Courses;
