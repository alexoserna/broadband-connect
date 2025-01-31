import { Box, Card, Typography, CardContent, CardActions, Button, Container, alpha } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useTheme } from "@mui/material/styles";

const comingSoonCourses = [
    {
        title: "CPCCDE3014",
        description: "Remove non-friable asbestos",
        availableDate: "Coming Soon",
    },
    {
        title: "RIIWHS205E",
        description: "Control traffic with stop - slow bat",
        availableDate: "Coming Soon",
    },
    {
        title: "RIIWHS202E",
        description: "Enter and work in confined spaces",
        availableDate: "Coming Soon",
    },
    {
        title: "RIIWHS204E",
        description: "Work safely at heights",
        availableDate: "Coming Soon",
    },
    {
        title: "MSMWHS217",
        description: "Gas test atmospheres",
        availableDate: "Coming Soon",
    },

];


const ComingSoonSection = () => {

    const theme = useTheme();
    
    return (
        <Container sx={{ py: 2 , color: theme.palette.text.muted}}>
            <Typography variant="h4" gutterBottom>
                Coming Soon
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: theme.palette.text.muted, // Muted brown
                    marginTop: "0.5rem",
                    marginBottom: '1rem',
                }}
            >
                These courses are under development and will be available soon. Stay tuned!
            </Typography>
            <Grid container spacing={0}>
                {comingSoonCourses.map((course, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Card
                            sx={{
                                boxShadow: 'none',
                                color: theme.palette.text.muted,
                                padding: '1rem',
                                borderRadius: '8px',
                                backgroundColor: '#f6f0eb',
                                border: '1px solid #d8cfc4',
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom color="#4A3224">
                                    {course.icon} {course.title}
                                </Typography>
                                <Typography variant="body2">
                                    {course.description}
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ComingSoonSection;