import { Button, Container, Typography, Paper, grid2Classes } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import heroImage from '../assets/images/ricardo-gomez-angel-MagdWoazARo-unsplash.png';

const Home = () => {
  return <>
    <Box component="section" sx={{
      display: 'flex',
      py: '112px',
      px: '64px',
      flexGrow: '1',
    }}>
      {/* Main Grid */}
      <Grid container spacing={8}>

        {/* Header Section - Hero */}
        <Grid size={12}>
          <Box
            sx={{
              minHeight: '85vh',
              py: '112px',
              px: '64px',
              alignItems: 'center',
              gap: '80px',
            }}
          >
            {/* Grid Container for Hero contents */}
            <Grid container spacing={8}>

              {/* Item 1 in Hero */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h1">Connecting you to the future of networking</Typography>
                <Typography variant="h4">Hands on, accredited trianing, giving you the experience and skills you need to succeed in telecommunications!</Typography>
                <Button variant='contained'>Apply Now</Button>
                <Button variant='contained'>Learn More</Button>
              </Grid>

              {/* Item 2 in Hero */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Container
                  sx={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',          // Ensure the image covers the container
                    backgroundPosition: 'center',     // Center the image
                    height: '100%',                    // Make the container take the full height of its parent
                    width: '100%',                     // Ensure the container spans full width
                    maxWidth: '100%',
                    minHeight: '348px'                   // Prevent any width constraints
                  }}
                />
              </Grid>

            </Grid>
          </Box>
        </Grid>

        {/* Key Points Section */}
        <Grid xs={12}>

          <Typography variant="h4" gutterBottom>
            Key Points
          </Typography>

          {/* Container for Key Points Section */}
          <Grid container spacing={2}>
            {/* Key Point 1 */}
            <Grid xs={12} md={4}>

              <Typography variant="h6">Key Point 1</Typography>
              <Typography variant="body1">Description of the key point.</Typography>

            </Grid>
            {/* Key Point 2 */}
            <Grid xs={12} md={4}>

              <Typography variant="h6">Key Point 2</Typography>
              <Typography variant="body1">Description of the key point.</Typography>

            </Grid>
            {/* Key Point 3 */}
            <Grid xs={12} md={4}>

              <Typography variant="h6">Key Point 3</Typography>
              <Typography variant="body1">Description of the key point.</Typography>

            </Grid>
          </Grid>

        </Grid>

        {/* Testimonials Section */}
        <Grid xs={12}>

          <Typography variant="h4" gutterBottom>
            Testimonials
          </Typography>
          <Grid container spacing={2}>
            {/* Testimonial 1 */}
            <Grid xs={12} md={6}>

              <Typography variant="h6">Testimonial 1</Typography>
              <Typography variant="body1">This is a testimonial text.</Typography>

            </Grid>
            {/* Testimonial 2 */}
            <Grid xs={12} md={6}>

              <Typography variant="h6">Testimonial 2</Typography>
              <Typography variant="body1">This is another testimonial text.</Typography>

            </Grid>
          </Grid>

        </Grid>

        {/* CTA Section */}
        <Grid xs={12}>

          <Typography variant="h4" gutterBottom>
            Start Today
          </Typography>
          <Button variant="contained" color="primary">Sign Up</Button>

        </Grid>

      </Grid>
    </Box>
  </>;
};

export default Home;
