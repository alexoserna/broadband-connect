import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material";

const CourseDisplay = ({ slug, title, description }) => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.backgroundCream.card,
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '320px'
            }}>
            <Container
                sx={{
                    backgroundColor: alpha(theme.palette.text.primary, 0.8),
                    padding: 1,
                    borderRadius: '18px 18px 0 0',
                    height: '80px',
                }}>
                <Typography color="textSecondary" variant='h6'>{title}</Typography>
            </Container>
            <Container
                sx={{
                    margin:1,
                    minHeight: '180px',
                }}>
                <Typography variant='body1' sx={{ py: 3 }}>{description.substring(0, 150) + "..."}</Typography>
            </Container>
            
            <Typography variant="body2" component={Link} to={`/courses/${slug}`} sx={{my: 2}}>Learn More </Typography>
        </Box>
    )

};

export default CourseDisplay;