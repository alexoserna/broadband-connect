import React from "react";
import { Box, Typography, Button, Card, CardContent, Avatar, SvgIcon, Container } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Star, People, Lightbulb } from "@mui/icons-material";
import { alpha, useTheme } from '@mui/material/styles';
import CTA from "../components/CTA";


import { motion } from 'framer-motion';

const AboutPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ padding: 0 }}>

      {/* Hero Section */}
      <Box
        sx={{
          paddingTop: '65px',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
          paddingBlock: '5rem',
          overflow: 'hidden',
          mx: '0px',
          display: 'flex',
          flexDirection: { xs: "column", md: "row" },
          alignItems: 'center',
          color: '#fff',
          position: 'relative',
        }}>
        {/* text section */}
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: '50px',
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: 'left',
              padding: "2rem",
              height: { xs: '82vh', md: '200px' },
              zIndex: 1,
            }}
          >
            <Box>
              <Typography variant="h2" fontWeight="bold" sx={{ letterSpacing: "2px" }} gutterBottom>
                Empowering Australia's Workforce for a Connected Future
              </Typography>
              <Typography variant="h5" sx={{ my: 3 }}>
                Building confidence and skills through hands-on, industry-leading training.
              </Typography>
            </Box>
          </Box>
        </Container>

        {/* Background Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: 'absolute',
            top: { xs: '18%', md: '20%' },
            right: { xs: '-30%', md: '-20px' },
            height: { xs: '60vh', md: '38vh' },
          }}
        >

          <SvgIcon
            sx={{
              color: (theme.palette.backgroundCream.main),
              width: 'auto', height: { xs: '120%', md: '150%' },
              filter: `drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))`,
              opacity: 0.5, rotate: '25deg',
            }}>

            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 925.51 864.13"
            >
              <path fill="currentColor" className="cls-1" d="M36.71,849.21c21.5,14.84,48.94,16.6,79.37,5.11,20.35-17.93,282.13-134.28,293.31-139.24,45.64-20.8,53.64-50.79,52.94-102.35V224.75c-.81-27.37-13.7-51.07-35.35-64.96-23.48-15.07-54.03-16.48-83.81-3.89l-185.87,87.47.57-218.21C107.69-8.4,54.59-8.39,0,25.2v750.52c-.02,29.24,14.39,58.08,36.71,73.49ZM157.31,424.16l144.88-67.49v226.46l-144.88,66.91v-225.88Z" />
              <path fill="currentColor" className="cls-2" d="M869.61,286.66l-222.09-93.15c-52.57-18.48-110.19,9.09-110.19,93.15v389.65c-.6,41.14,16.56,69.59,51.69,85.2l238.94,99.78c80.78,22.45,117.1-123.83,50.74-160.56l-182.33-77.25v-225.5l117.31,48.11c122.89,30.02,147.8-122.84,55.93-159.44Z" />
            </svg>
          </SvgIcon>

        </Box>

      </Box>

      <Container>
      <Grid container spacing={4} sx={{ padding: 4 }}>
        <Grid size={{xs: 12, md: 6}} sx={{textAlign: 'left'}}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Who We Are
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Broadband Connect was founded with a vision: to transform training in the telecommunications
            industry by prioritizing practical, hands-on experience over theory.
          </Typography>
          <Typography>
            With over 30 years of industry expertise, our founder has risen through the ranks—from an
            electrician to a leader in the field—instilling a culture of excellence and commitment to
            quality learning.
          </Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <Box
            component="img"
            src="https://via.placeholder.com/600x400"
            alt="Training in action"
            sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
          />
        </Grid>
      </Grid>

      {/* What Makes Us Different */}
      <Box sx={{ padding: 4, backgroundColor: "#F5F5F5" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}>
          What Makes Us Different
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{xs: 12, md: 4}}>
            <Card sx={{ padding: 3, textAlign: "center", boxShadow: 3 }}>
              <Lightbulb sx={{ fontSize: 50, color: "#FFC107", marginBottom: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Hands-On Training
              </Typography>
              <Typography>
                Our trainees work with real tools, from fiber splicers to cable jointers, ensuring they gain
                practical, job-ready experience.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <Card sx={{ padding: 3, textAlign: "center", boxShadow: 3 }}>
              <People sx={{ fontSize: 50, color: "#4CAF50", marginBottom: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Small Class Sizes
              </Typography>
              <Typography>
                With no more than 8 trainees per class, we ensure personalized attention and thorough
                monitoring for each student.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <Card sx={{ padding: 3, textAlign: "center", boxShadow: 3 }}>
              <Star sx={{ fontSize: 50, color: "#FF5722", marginBottom: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Recognized Certifications
              </Typography>
              <Typography>
                Accredited by SkillsAssure, AQF, and NRT, we’re nationally recognized for vocational training
                excellence.
              </Typography>
            </Card>
          </Grid>
        </Grid>

      </Box>

      {/* Our Impact Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}>
          Our Impact
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{xs: 12, md: 6}}>
            <Typography sx={{ marginBottom: 2 }}>
              Our training doesn’t just create skilled workers—it builds careers and businesses. Many of our
              trainees return for advanced courses, confident in our ability to help them grow further.
            </Typography>
            <Typography>
              Some have even gone on to start their own companies, trusting us to train their workforce—a
              testament to the value we provide.
            </Typography>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <Box
              component="img"
              src="https://via.placeholder.com/600x400"
              alt="Our Impact"
              sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Certifications and Affiliations */}
      <Box sx={{ padding: 4, backgroundColor: "#F5F5F5", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
          Recognized and Accredited
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid size={{xs: 12, md: 4}}>
            <Box
              component="img"
              src="https://via.placeholder.com/100x100"
              alt="SkillsAssure"
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <Box
              component="img"
              src="https://via.placeholder.com/100x100"
              alt="AQF"
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <Box
              component="img"
              src="https://via.placeholder.com/100x100"
              alt="NRT"
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action */}
      <CTA />
      </Container>

    </Box>
  );
};

export default AboutPage;
