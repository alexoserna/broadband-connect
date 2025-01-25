import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_COURSE_BY_SLUG } from "../utils/queries.js";
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
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CertificationPage = () => {

  console.log('in the course post');
  const { slug: slug } = useParams();
  const { loading, error, data } = useQuery(QUERY_COURSE_BY_SLUG, { variables: { slug }, fetchPolicy: "network-only" });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} <br />
    Data: {JSON.stringify(data, null, 2)} <br />
    In course post {slug}</p>;

  const certification = data.getCourseBySlug;

    const {
        title,
        description,
        category,
        cost,
        duration,
        qualificationDescription,
        careerOutcomes,
        structure,
        learningOutcomes,
        deliveryMode,
        assessmentMethods,
        skillTree,
    } = certification;



    return (
        <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #0d47a1, #42a5f5)',
          color: '#fff',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="h5" sx={{ my: 2 }}>
          {description}
        </Typography>
        <Button variant="contained" size="large" color="secondary" sx={{ mt: 4 }}>
          Enroll Now
        </Button>
      </Box>

      {/* Overview Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          Overview
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Category
                </Typography>
                <Typography>{category}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Cost
                </Typography>
                <Typography>Total: ${cost.total}</Typography>
                <Typography>Per Module: ${cost.perModule}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Duration
                </Typography>
                <Typography>{duration.months} months</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Qualification Description Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          Qualification Description
        </Typography>
        <Typography>{qualificationDescription}</Typography>
      </Container>

      {/* Career Outcomes Section */}
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

      {/* Structure Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          Course Structure
        </Typography>
        <Typography>Total Units: {structure.totalUnits}</Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" fontWeight="bold">
            Core Units
          </Typography>
          <List>
            {structure.coreUnits.map((unit, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${unit.code} - ${unit.title}`} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" fontWeight="bold">
            Elective Units
          </Typography>
          <List>
            {structure.electiveUnits.map((unit, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${unit.code} - ${unit.title}`}
                  secondary={unit.group}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>

      {/* Learning Outcomes Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          Learning Outcomes
        </Typography>
        <List>
          {learningOutcomes.map((outcome, index) => (
            <ListItem key={index}>
              <ListItemText primary={outcome} />
            </ListItem>
          ))}
        </List>
      </Container>

      {/* Delivery and Assessment Section */}
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

      {/* Skill Tree Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          Skill Tree
        </Typography>
        {skillTree.map((skill, index) => (
          <Card key={index} sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                {skill.skillName}
              </Typography>
              <Typography sx={{ mt: 1 }}>Price: ${skill.price}</Typography>
              <Typography sx={{ mt: 2 }}>{skill.description}</Typography>
              <List sx={{ mt: 2 }}>
                {skill.outcomes.map((outcome, idx) => (
                  <ListItem key={idx}>
                    <ListItemText
                      primary={`${outcome.code} - ${outcome.title}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
    );
}

export default CertificationPage;