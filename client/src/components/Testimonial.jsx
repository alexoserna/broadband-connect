import { Box, Container, Typography, Avatar } from "@mui/material";
import Ratings from './Ratings';
import { useTheme } from "@mui/material/styles";

const Testimonial = () => {

    const theme = useTheme();

    return (
        <Container sx={{
            backgroundColor: theme.palette.backgroundCream.card,
            py: '64px',
            px: '24px',
            display: 'flex',
            flexDirection: "column",
            gap: '32px',
            borderRadius: '18px',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

        }}>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Ratings num={4.5} sx={{ width: '100%' }} />
            </Container>
            <Box sx={{ width: '60%', mx: 'auto'}}>
                <Typography variant="h5" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."</Typography>
            </Box>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >

                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <Box sx={{ ml: 2, textAlign:"left"}}>
                    <Typography variant='h6'>Name Surname</Typography>
                    <Typography variant='body2'>Position, Company Name</Typography>
                </Box>
            </Container>

        </Container >
    );
}

export default Testimonial;