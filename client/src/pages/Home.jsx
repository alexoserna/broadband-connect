import { Button, Container, Typography, Paper, grid2Classes, Tooltip, IconButton, Avatar, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

import heroImage from '../assets/images/ricardo-gomez-angel-MagdWoazARo-unsplash.png';
import ImgCard from '../components/ImgCard';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

const Home = () => {
  return <>

    {/* Main Grid */}
    <Grid container spacing={0} sx={{ width: '100vw' }}>

      {/* Header Section - Hero */}
      <Grid size={12}>
        <Box
          sx={{
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            padding: {xs: '72px 10px', md: '64px 112px'},
            gap: '80px',
          }}
        >
          {/* Grid Container for Hero contents */}
          <Grid container spacing={8}>

            {/* Item 1 in Hero */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center', textAlign: { xs: 'center', md: 'left' }}}>
              <Box>
                <Typography variant="h1" sx={{ typography: { xs: 'h3', md: 'h1' } }}>Connecting you to the future of networking</Typography>
                <Typography variant="h4" sx={{ py: '32px', typography: { xs: 'h6', md: 'h4' } }}>Hands on, accredited trianing, giving you the experience and skills you need to succeed in telecommunications!</Typography>
                <Container>
                  <Button variant='contained' sx={{ marginRight: '20px', padding: '12px 36px'}}>Apply Now</Button>
                  <Button variant='contained' sx={{ padding: '12px 36px' }} >Learn More</Button>
                </Container>
              </Box>

            </Grid>

            {/* Item 2 in Hero */}
            <Grid size={{ xs: 12, md: 6 }}  >
              <Container
                sx={{
                  backgroundImage: `url(${heroImage})`,
                  backgroundSize: 'cover',          // Ensure the image covers the container
                  backgroundPosition: 'center',     // Center the image 
                  width: {xs: '364px', md: '100%'},                     // Ensure the container spans full width
                  minHeight: '247px',                // Prevent any width constraints
                  aspectRatio: '1/1',
                }}
              />
            </Grid>

          </Grid>
        </Box>
      </Grid>

      {/* Key Points Section */}
      <Grid size={12}>

        <Container sx={{ padding: { xs: '15px', md: '64px 112px' } }}>
          <Box sx={{ maxWidth: '768px', mx: 'auto' }}>
            <Typography variant='p'>Excellence</Typography>
            <Typography variant="h2" sx={{ typography: { xs: 'h4', md: 'h2' } }} gutterBottom>
              Why choose Broadband Connect for Training?
            </Typography>
            <Typography variant='p' gutterBottom>
              Our training programs are designed to empower you with practical skills and knowledge.
              We focus on hands-on experiences that prepare you for real-world challenges.
            </Typography>
          </Box>

          {/* Container for Key Points Section */}
          <Grid container spacing={4} sx={{ py: '80px' }}>
            {/* Key Point 1 */}
            <Grid size={{ xs: 12, md: 4 }}>

              <ImgCard
                image="https://aimmontessoriteachertraining.org/images/img_QuFAxvBbyrgVLYuNMJcJbi/hands.jpg"
                title="Hands-On Training for Real-World Skills"
                description="Experience learning that translates directly to the workplace."
              />

            </Grid>
            {/* Key Point 2 */}
            <Grid size={{ xs: 12, md: 4 }}>

              <ImgCard
                image="https://aimmontessoriteachertraining.org/images/img_QuFAxvBbyrgVLYuNMJcJbi/hands.jpg"
                title="Certified Instructors with Industry Experience"
                description="Learn from experts who bring real-world insights."
              />
            </Grid>

            {/* Key Point 3 */}
            <Grid size={{ xs: 12, md: 4 }}>

              <ImgCard
                image="https://aimmontessoriteachertraining.org/images/img_QuFAxvBbyrgVLYuNMJcJbi/hands.jpg"
                title="Flexible Learning Options to Fit Your Schedule"
                description="Choose from various formats to suit your needs."
              />
            </Grid>
          </Grid>

          <Box>
            <Button variant='contained' sx={{ marginRight: '20px', padding: '12px 36px' }}>Apply Now</Button>
            <Button variant='contained' sx={{ padding: '12px 36px' }} >Learn More</Button>
          </Box>

        </Container>

      </Grid>

      {/* Testimonials Section */}
      <Grid size={12} sx={{ py: '112px' }}>
        <Testimonial />
      </Grid>

      {/* CTA Section */}
      <Grid size={12}>
        <CTA />
      </Grid>

    </Grid>

  </>;
};

export default Home;
