
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
import { motion } from 'framer-motion';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import HeroBackground from '../assets/images/grayscale-circuit.png'

const Courses = () => {

  const theme = useTheme();
  const { loading, error, data } = useQuery(QUERY_COURSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} <br /> Data: {data}</p>;
  console.log(HeroBackground);

  return (
    <ParallaxProvider>
      <Grid container spacing={4}>
        {/* Overall Grid container ^^ */}
        {/* Hero Item */}
        <Grid size={12}>
          <Box
            sx={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              background: 'linear-gradient(to bottom right, #c26a15, #f5d1b0)',
              color: '#fff',
              padding: '0',
              overflow: 'hidden',
              position: 'relative',
            }}>
            <Box
              sx={{
                position: 'absolute', // Positioned relative to the parent Box
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                zIndex: 1, // Keeps the background behind the content
                backgroundImage: `url('${HeroBackground}')`,
                backgroundColor: 'rgba(194, 106, 21, 0.2)',
                backgroundBlendMode: 'screen',
                opacity: '0.13',
                backgroundSize: 'cover',
                filter: 'blur(3px)',
                backgroundPosition: 'center',
              }}
            ></Box>


            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              style={{ zIndex: 2 }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Your Future in Telecommunications Starts Here
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: '300',
                  marginBottom: '2rem',
                  fontSize: { xs: '1rem', md: '1.5rem' },
                }}
              >
                Explore industry-leading courses designed to elevate your skills, fast-track your career, and connect you with opportunities.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              style={{ zIndex: 2, width: '100%', maxWidth: '600px' }}
            >

              <SearchBar courses={data.getCourses} />

            </motion.div>

          </Box>
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
                  backgroundColor: alpha(theme.palette.text.primary, 0.8),
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
    </ParallaxProvider>
  )
};

export default Courses;
