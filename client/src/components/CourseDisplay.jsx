import { Box, Typography, Container, Card, CardContent, CardActions, Chip, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material";
import { motion } from "framer-motion";

const CourseDisplay = ({ slug, title, description }) => {

    const theme = useTheme();

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div variants={itemVariants}>
            <Box
                sx={{
                    backgroundColor: alpha("#FFFFFF", 0.5),
                    borderRadius: "16px",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: 1,
                    padding: 3,
                    my: {xs: 1, md: 3},
                    minHeight: '330px',
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 4,
                    },
                }}
            >
                <Box
                    sx={{
                        height: "95px",
                    }}>
                    <Typography variant="h5" gutterBottom>
                        {title}
                    </Typography>
                </Box>

                <Typography variant="body2">
                    {description}
                </Typography>


                <Button
                    color="primary"
                    component={Link}
                    to={slug}
                    sx={{
                        marginTop: 'auto',
                        borderRadius: '16px',
                        backgroundColor: theme.palette.primary.main,
                        color: "#FFF",
                        "&:hover": {
                            backgroundColor: "#A1402B",
                            color: '#FFF', 
                        },
                    }}>
                    Learn More
                </Button>

            </Box>
        </motion.div>
    )

};

export default CourseDisplay;