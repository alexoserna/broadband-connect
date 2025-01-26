import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_CERTIFICATION_BY_SLUG } from "../utils/queries.js";
import { React, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tabs,
  Tab,
  SvgIcon,
  Divider,
} from '@mui/material';
import { padding, styled } from '@mui/system';
import { alpha, useTheme } from '@mui/material/styles';
import { AccessTime, AttachMoney, Tag, CheckCircle, Book, AssignmentOutlined } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

const CertificationPage = () => {

  console.log('in the certification page');

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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // getting to the page and querying information
  const { slug: slug } = useParams();
  const { loading, error, data } = useQuery(QUERY_CERTIFICATION_BY_SLUG, { variables: { slug }, fetchPolicy: "network-only" });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} <br />
    Data: {JSON.stringify(data, null, 2)} <br />
    In certification page {slug}</p>;

  const certification = data.getCertificationBySlug;

  const CourseCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '16px',
    boxShadow: 'none',
    transition: 'all 0.3s ease-in-out',
    padding: '25px',
    height: { xs: '150px', md: '170px' },
    backgroundColor: theme.palette.secondary.light,
  }));

  const {
    title,
    description,
    tagline,
    category,
    cost,
    duration,
    careerOutcomes,
    structure,
    learningOutcomes,
    deliveryMode,
    assessmentMethods,
    skillTree,
  } = certification;



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
        {/* text section */}
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

      {/* Overview Section */}
      <Grid size={12}>
        <Container
          sx={{
            position: 'relative',
            top: { xs: '-135px', md: '-50%' },
            zIndex: 5,
          }}>
          <CourseCard>
            <Grid container spacing={3}>

              {/* Category */}
              <Grid size={{ xs: 12, md: 3 }}
                sx={{
                  display: 'flex',
                }}>

                <Tag sx={{ fontSize: { xs: '40px', md: '48px' }, color: "accent.main" }} />

                <Box
                  sx={{
                    minWidth: '50%',
                    width: { xs: '152px', md: '160px' },
                    marginLeft: { xs: '4px', md: '16px' },
                  }}>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" align="left">
                      Category
                    </Typography>
                    <Typography>{category}</Typography>
                  </CardContent>
                </Box>
              </Grid>

              {/* Structure */}
              <Grid size={{ xs: 12, md: 3 }}
                sx={{
                  display: 'flex'
                }}>

                <AssignmentOutlined sx={{ fontSize: { xs: '40px', md: '48px' }, color: "accent.main" }} />

                <Box
                  sx={{
                    minWidth: '50%',
                    width: { xs: '152px', md: '160px' },
                    marginLeft: { xs: '4px', md: '16px' },
                  }}>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" align="left">
                      Structure
                    </Typography>
                    <Typography align="left">Total Units: {structure.totalUnits}</Typography>
                  </CardContent>
                </Box>
              </Grid>

              {/* Cost */}
              <Grid size={{ xs: 12, md: 3 }}
                sx={{
                  display: 'flex'
                }}>

                <AttachMoney sx={{ fontSize: { xs: '40px', md: '48px' }, color: "accent.main" }} />

                <Box
                  sx={{
                    minWidth: '50%',
                    width: { xs: '152px', md: '160px' },
                    marginLeft: { xs: '4px', md: '16px' },
                  }}>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" align="left">
                      Cost
                    </Typography>
                    <Typography align="left">Total: ${cost}</Typography>
                  </CardContent>
                </Box>
              </Grid>

              {/* Duration */}
              <Grid size={{ xs: 12, md: 3 }}
                sx={{
                  display: 'flex'
                }}>

                <AccessTime sx={{ fontSize: { xs: '40px', md: '48px' }, color: "accent.main" }} />

                <CardContent>
                  <Box
                    sx={{
                      minWidth: '50%',
                      width: { xs: '152px', md: '160px' },
                      marginLeft: { xs: '4px', md: '16px' },
                    }}>
                    <Typography variant="h6" fontWeight="bold" align="left">
                      Duration
                    </Typography>
                    <Typography align='left'>{duration.months} months</Typography>
                  </Box>
                </CardContent>
              </Grid>

            </Grid>
          </CourseCard>
        </Container>
      </Grid>

      {/* Qualification Description */}
      <Grid size={12}>
        <Container sx={{ my: 6 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
            Qualification Description
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Container>
      </Grid>

      {/* Career Outcomes */}
      <Grid size={12}>
        <Container sx={{ my: 6 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
            Career Outcomes
          </Typography>
          <List>
            {careerOutcomes.map((outcome, index) => (
              <ListItem key={index}>
                <ListItemText primary={outcome} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Grid>

      {/* Course Structure Section */}
      <Grid size={12}>
        <Container sx={{ my: 6 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, textAlign: "center" }}>
            Course Structure
          </Typography>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            centered
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
              },
            }}
          >
            <Tab label="Core Units" icon={<CheckCircle />} />
            <Tab label="Elective Units" icon={<Book />} />
          </Tabs>
          {tabValue === 0 && (
            <List sx={{ mt: 4 }}>
              {structure.coreUnits.map((unit) => (
                <ListItem key={unit.code} sx={{ py: 2 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ color: 'text.primary' }}>{unit.code}</Typography>
                    <Typography variant="body1" sx={{ color: alpha(theme.palette.text.primary, 0.8) }}>{unit.title}</Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}
          {tabValue === 1 && (
            <List sx={{ mt: 4 }}>
              {structure.electiveUnits.map((unit) => (
                <ListItem key={unit.code} sx={{ py: 2 }}>
                  <ListItemIcon>
                    <Book sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ color: 'text.primary' }}>{unit.code}</Typography>
                    <Typography variant="body1" sx={{ color: alpha(theme.palette.text.primary, 0.8) }}>{unit.title}</Typography>
                    <Typography variant="body2" sx={{ color: alpha(theme.palette.text.primary, 0.8) }}>
                      Group: {unit.group}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}
        </Container>
      </Grid>

      {/* Learning Outcomes Section */}
      <Grid size={12}>
        <Container sx={{ my: 6 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, textAlign: "center" }}>
            Learning Outcomes
          </Typography>
          <Grid container spacing={4}>
            {learningOutcomes.map((outcome, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <CheckCircle sx={{ color: "accent.main", fontSize: 30 }} />
                  <Typography variant="body1">{outcome}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>

      {/* Delivery Mode & Assessment Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          Delivery Mode & Assessment
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
          Delivery Mode
        </Typography>
        <Typography>{deliveryMode}</Typography>
        <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
          Assessment Methods
        </Typography>
        <List>
          {assessmentMethods.map((method, index) => (
            <ListItem key={index}>
              <ListItemText primary={method} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Grid >
  );
}

export default CertificationPage;