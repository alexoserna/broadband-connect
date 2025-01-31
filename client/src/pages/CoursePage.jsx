import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_COURSE_BY_SLUG } from "../utils/queries.js";
import { React, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
  SvgIcon,
  Divider
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { AccessTime, AttachMoney, Tag, CheckCircle, Book, AssignmentOutlined, Work, School, Circle } from '@mui/icons-material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from '@mui/material/Grid2';
import CourseAccordion from "../components/CourseAccordion.jsx";
import { styled } from "@mui/material/styles";
import AssetRenderer from "../components/assetRenderer.jsx";
import CTA from "../components/CTA.jsx";

import { motion } from 'framer-motion';

const CoursePage = () => {

  const hexToRgba = (hex, alpha) => {
    // Remove the '#' if present
    const cleanHex = hex.replace("#", "");
    const bigint = parseInt(cleanHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const theme = useTheme();

  const [tabValue, setTabValue] = useState(0);
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (panel) => setExpanded(expanded === panel ? null : panel);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // getting to the page and querying information
  const { slug: slug } = useParams();
  const { loading, error, data } = useQuery(QUERY_COURSE_BY_SLUG, { variables: { slug }, fetchPolicy: "network-only" });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} <br />
    Data: {JSON.stringify(data, null, 2)} <br />
    In certification page {slug}</p>;

  const course = data.getCourseBySlug;

  const {
    title,
    description,
    tagline,
    cost,
    coreUnits,
    learningOutcomes,
    images,
    nbnSkills
    // deliveryMode,
    // assessmentMethods,
    // skillTree,
  } = course;

  console.log(coreUnits);



  return (
    <Grid container spacing={2}>

      {/* Hero Section */}
      <Box
        sx={{
          paddingTop: '65px',
          background: 'linear-gradient(135deg, #C0392B, #D4A017)',
          paddingBlock: '5rem',
          overflow: 'hidden',
          width: '100%',
          display: 'flex',
          flexDirection: { xs: "column", md: "row" },
          alignItems: 'center',
          color: '#fff',
          position: 'relative',
        }}>

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
        {/* text section */}
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              padding: "2rem",
              height: { xs: '82vh', md: '40vh' },
              zIndex: 1,
            }}
          >
            <Typography variant="h2" fontWeight="bold" sx={{ letterSpacing: "2px" }} gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" sx={{ my: 3 }}>
              {tagline}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                px: 4,
                py: 2,
                backgroundColor: "#D4A017",
                ":hover": { backgroundColor: "#B68C0B" },
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Enroll Now
            </Button>
          </Box>
        </Container>

      </Box>

      {/* Overview Section */}
      <Grid size={12}>
        <Container
          sx={{
            position: 'relative',
            top: { xs: '0px', md: '-60%' },
            zIndex: 5,
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '16px',
              boxShadow: 'none',
              transition: 'all 0.3s ease-in-out',
              padding: { xs: '16px', md: '25px' },
              height: 'auto',
              mx: 'auto',
              width: 'fit-content',
              backgroundColor: theme.palette.secondary.light,
            }}>
            <Grid container spacing={{ xs: 0, md: 3 }}>

              {/* Structure */}
              <Grid size={{ xs: 6, md: 6 }}
                sx={{
                  display: 'flex'
                }}>

                <AssignmentOutlined sx={{ fontSize: { xs: '30px', md: '48px' }, color: "accent.main" }} />

                <Box
                  sx={{
                    marginLeft: { xs: '4px', md: '16px' },
                  }}>

                  <Typography variant="h5" fontWeight="bold" align="left">
                    Modules
                  </Typography>
                  <Typography align="left">Total: {coreUnits.length}</Typography>

                </Box>
              </Grid>

              {/* Cost */}
              <Grid size={{ xs: 6, md: 6 }}
                sx={{
                  display: 'flex'
                }}>

                <AttachMoney sx={{ fontSize: { xs: '30px', md: '48px' }, color: "accent.main" }} />

                <Box
                  sx={{
                    marginLeft: { xs: '4px', md: '16px' },
                  }}>

                  <Typography variant="h5" fontWeight="bold" align="left">
                    Cost
                  </Typography>
                  <Typography align="left">Total: ${cost}</Typography>

                </Box>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Grid>

      {/* Qualification Description */}
      <Container sx={{ my: { xs: 3, md: 3 } }}>
        <Grid container spacing={4} >

          <Grid size={{ xs: 12, md: 6 }} sx={{ padding: '16px', display: 'flex' }}>
            <Box sx={{ maxWidth: "800px", margin: "auto", alignItems: 'center' }}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
                Course Overview
              </Typography>
              <Typography variant="body1">{description}</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ padding: '16px' }}>
            <Box sx={{ height: "300px", backgroundColor: "#ddd", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '16px', overflow: 'hidden' }} >
              <AssetRenderer type={'image'} assetName={'hero'} style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
            </Box>

          </Grid>

          <Divider sx={{ marginY: 4, width: '100%' }} />

          {/* Learning Outcomes Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ maxWidth: "900px", margin: "auto" }}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, textAlign: "center" }}>
                Skills You Will Gain
              </Typography>
              <Grid container spacing={2} sx={{ padding: '16px' }}>
                {learningOutcomes.map((outcome, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Box sx={{ display: "flex", alignItems: "center", textAlign: 'left', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: "accent.main", fontSize: 30 }} />
                      <Typography variant="body1">{outcome}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Course Structure Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Container sx={{ my: { xs: 3, md: 0 } }}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, textAlign: "center" }}>
                Course Modules
              </Typography>

              {/* Conditional Rendering Based on Tab Selection */}
              <List sx={{ mt: 1 }}>
                {coreUnits.map((unit) => (
                  <CourseAccordion key={unit.code} unit={unit} />
                ))}
              </List>
            </Container>
          </Grid>

          <Divider sx={{ marginY: 4, width: '100%' }} />

          {/* Delivery Mode & Assessment Section */}
          <Grid size={{ xs: 12, md: 6 }}>

            <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
              Delivery Mode
            </Typography>
            <List>

              <ListItem>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Circle sx={{ color: "accent.main", fontSize: 30 }} />
                  <Typography variant="body1">Training is conducted at the student’s workplace or at Broadband Connect’s training facility.</Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Circle sx={{ color: "accent.main", fontSize: 30 }} />
                  <Typography variant="body1">Provides hands-on, real-world experience with industry-relevant tasks.</Typography>
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
              Assessment Methods
            </Typography>

            <List>
              <ListItem>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Circle sx={{ color: "accent.main", fontSize: 30 }} />
                  <Typography variant="body1">Competency-based assessment ensures job readiness.</Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Circle sx={{ color: "accent.main", fontSize: 30 }} />
                  <Typography variant="body1">Includes practical tasks, projects, and hands-on exercises.</Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Circle sx={{ color: "accent.main", fontSize: 30 }} />
                  <Typography variant="body1">Assessments align with real-world telecommunications challenges.</Typography>
                </Box>
              </ListItem>
            </List>
          </Grid>

          {/* Add CTA Section */}
          <CTA />

        </Grid>
      </Container>
    </Grid >
  );
}

export default CoursePage;