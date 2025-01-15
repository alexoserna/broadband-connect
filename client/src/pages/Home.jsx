import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import heroImage from '../assets/images/ricardo-gomez-angel-MagdWoazARo-unsplash.png';

const Home = () => {
  return <>
    <Box component="section" sx={{
      display: 'flex',
      py: '112px',
      px: '64px',
      alignItems: 'center',
      gap: '80px',
    }}>
      <Container>
        <Typography variant="h1">Connecting you to the future of networking</Typography>
        <Typography variant="h5">Hands on, accredited trianing, giving you the experience and skills you need to succeed in telecommunications!</Typography>
        <Button variant='contained'>Apply Now</Button>
        <Button variant='contained'>Learn More</Button>
      </Container>
      <Container sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 640,
        maxWidth: 616
      }}>
      </Container>
    </Box>
  </>;
};

export default Home;
