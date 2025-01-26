
import { gql, useQuery } from '@apollo/client';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from '@mui/material/Grid2';
import { QUERY_COURSES, QUERY_CERTIFICATIONS } from '../utils/queries.js';
import { Link } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import SearchBar from '../components/SearchBar.jsx';
import SkillTree from '../components/SkillTree.jsx';
import CourseDisplay from '../components/CourseDisplay.jsx';
import ComingSoonSection from '../components/ComingSoon.jsx';

import HeroBackground from '../assets/images/grayscale-circuit.png'

const Courses = () => {

  const theme = useTheme();
  // Fetch courses and certifications
  const { loading: loadingCourses, error: errorCourses, data: dataCourses } = useQuery(QUERY_COURSES);
  const { loading: loadingCertifications, error: errorCertifications, data: dataCertifications } = useQuery(QUERY_CERTIFICATIONS);

  // Handle loading and error states
  if (loadingCourses || loadingCertifications) return <p>Loading...</p>;
  if (errorCourses || errorCertifications)
    return <p>Error: {errorCourses?.message || errorCertifications?.message}</p>;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state
    visible: {
      opacity: 1,
      y: 0, // Final state
      transition: { duration: 0.8, staggerChildren: 0.2 }, // Stagger child animations
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <ParallaxProvider>
      <Grid container spacing={0}>
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
              background: 'linear-gradient(to bottom , #c26a15 56%, #f5eee5)',
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
                backgroundBlendMode: 'screen',
                opacity: '0.13',
                backgroundSize: 'cover',
                filter: 'blur(3px)',
                backgroundPosition: 'center',
                // Gradient Mask to Fade Out Bottom
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
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
                  fontSize: { xs: '2rem', md: '3.5rem' },
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
                  mx: { xs: '20px', md: '0' },
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
              style={{ zIndex: 4, width: '100%', maxWidth: '600px' }}
            >

              <SearchBar courses={data.getCourses} />

            </motion.div>

          </Box>

        </Grid>

        {/* Skill tree */}
        <Grid size={12}>
          <motion.div
            initial="hidden" // Start with hidden state
            whileInView="visible" // Animate when in view
            viewport={{ once: true }} // Trigger animation only once
            variants={containerVariants} // Use container animation variants
          >
            <Container
              sx={{
                position: 'relative',
                marginTop: { xs: '0', md: '0' },// md to -140px if you want it to stick out
                zIndex: 5,
                backgroundColor: 'backgroundCream.main',
                display: 'flex',
              }}>
              <Grid container spacing={2} sx={{ textAlign: 'left', padding: { xs: '0', md: '40px' } }}>
                {/* Get started */}
                <Grid size={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      height: { xs: '110px', md: '140px' },
                    }}
                  >
                    <Typography
                      variant='h4'
                      align="center"
                      sx={{
                        color: 'accent.main',
                        my: 'auto',
                        fontSize: { xs: '1.4rem', md: '2.5rem' }
                      }}
                    >
                      Discover the path to becoming an FTTC Technician!
                    </Typography>
                  </Box>
                </Grid>
                {/*Skill tree Component*/}
                <SkillTree />

              </Grid>
            </Container>
          </motion.div>
        </Grid>

        {/* Certification  */}
        <Grid size={12}>
          <Container
            sx={{
              py: { xs: '64px', md: '128px' },
              px: '16px',
            }}>
            <motion.div
              initial="hidden" // Start with hidden state
              whileInView="visible" // Animate when in view
              viewport={{ once: true }} // Trigger animation only once
              variants={containerVariants} // Use container animation variants
            >
              <Grid container spacing={4}>
                {/* Certificate 3 */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{
                        p: 6,
                        m: 3,
                        textAlign: "center",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backgroundColor: theme.palette.backgroundCream.card,
                        borderRadius: "16px",
                      }}
                    >
                      <SchoolIcon sx={{ fontSize: 80, color: "#FF7043", mb: 2 }} />
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ mb: 2, color: "#333" }}
                      >
                        Certificate III in Telecommunications
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
                        Stand out with essential skills and credentials for the
                        telecommunications industry.
                      </Typography>
                      <Button
                        component={Link}
                        to='/courses/certifcation-iii-in-telecommunications-technology'
                        variant="contained"
                        color="primary"
                        sx={{
                          backgroundColor: "#FF7043",
                          borderRadius: "16px", // Match button corners
                          "&:hover": { backgroundColor: "#FF5722", color: '#FFF' },
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </motion.div>
                </Grid>

                {/* RPL Column */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{
                        p: 6,
                        m: 3,
                        textAlign: "center",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backgroundColor: theme.palette.backgroundCream.card,
                        borderRadius: "16px",
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 80, color: "#66BB6A", mb: 2 }} />
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ mb: 2, color: "#333" }}
                      >
                        Renew Your Certification with Ease!
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
                        Assess your skills to renew your certification—no retraining
                        needed.
                      </Typography>
                      <Button
                        component={Link}
                        to="/courses/recognized-prior-learning"
                        variant="contained"
                        color="primary"
                        sx={{
                          backgroundColor: "#66BB6A",
                          borderRadius: "16px", // Match button corners
                          "&:hover": { backgroundColor: "#43A047", color: "#FFF" },
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </motion.div>
                </Grid>

              </Grid>
            </motion.div>
          </Container>
        </Grid>

        {/* View All Grid */}
        <Grid size={12}
          sx={{
            backgroundColor: alpha(theme.palette.primary.main, 0.06),
            borderBottom: '1px solid #dcd6ce',
          }}>
          <Container
            sx={{
              my: 8,
            }}
          >
            <Grid container spacing={4}>

              {/* The banner/header */}
              <Grid
                size={12}
                sx={{
                  height: '80px',
                  borderRadius: '16px',
                  padding: 2,
                  borderBottom: '1px solid #dcd6ce',
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Available Courses
                </Typography>
              </Grid>

              {/* Grid */}
              {data.getCourses.map((course, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                  <motion.div
                    initial="hidden" // Start with hidden state
                    whileInView="visible" // Animate when in view
                    viewport={{ once: true }} // Trigger animation only once
                    variants={containerVariants} // Use container animation variants
                  >
                    <Container sx={{ maxWidth: '382px', p: '0px' }}>
                      <CourseDisplay
                        slug={course.slug}
                        title={course.title}
                        description={course.description}
                      />
                    </Container>
                  </motion.div>
                </Grid>
              ))}

            </Grid>
          </Container>
        </Grid>

        {/* Coming Soon */}
        <Grid size={12}
          sx={{
            backgroundColor: '#f5e7e3',
            borderBottom: '1px solid #dcd6ce',
          }}>
          <motion.div
            initial="hidden" // Start with hidden state
            whileInView="visible" // Animate when in view
            viewport={{ once: true }} // Trigger animation only once
            variants={containerVariants} // Use container animation variants
          >

            <motion.div variants={itemVariants}>
              <ComingSoonSection />
            </motion.div>

          </motion.div>
        </Grid>

      </Grid>
    </ParallaxProvider>
  )
};

export default Courses;
