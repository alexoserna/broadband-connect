import { Box, Container, Typography, Card, CardContent, Tooltip } from "@mui/material";
import { alpha, useTheme } from '@mui/material/styles';
import { QUERY_COURSE_BY_SLUG } from "../utils/queries";
import Grid from '@mui/material/Grid2';
import { useState, React, Fragment } from "react";
import { Link, Links } from "react-router-dom";
import { height, styled } from '@mui/system';
import { motion } from "framer-motion";

import InstallationImg from '../assets/images/installation.png';
import AssetRenderer from "./assetRenderer";

// Styled components for the Course Card
const CourseCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '16px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    padding: '25px',
    marginBottom: 5,
    backgroundColor: alpha(theme.palette.secondary.main, 0.25),
    color: "textPrimary",
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    },
}));

// Connector component
const Arrow = styled('div')(({ theme }) => ({
    width: '2px',
    height: '30px',
    backgroundColor: theme.palette.accent.main,
    margin: '0 auto',
}));

const SkillTree = () => {

    const containerVariants = {
        hidden: {}, // No specific animation for the container itself
        visible: {
            transition: { staggerChildren: 0.3 }, // Stagger child animations
        },
    };

    // Variants for individual items (slide in from the right)
    const itemVariants = {
        hidden: { opacity: 0, x: 50 }, // Start off-screen (to the right)
        visible: {
            opacity: 1,
            x: 0, // Slide into position
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const courses = [
        {
            title: 'Open Cabler',
            description: 'Learn the basics of open cabling and installations.',
            courseIcon: "openCabler",
            slug: 'open-cabler-registration',
        },
        {
            title: 'Optical Fibre Cabling',
            description: 'Gain expertise in handling and installing optical fibers.',
            courseIcon: "opticalFibre",
            slug: 'optical-fibre-cabling',
        },
        {
            title: 'Pit and Pipe',
            description: 'Understand pit and pipe installation for NBN networks.',
            courseIcon: "underground",
            slug: 'pit-and-pipe',
        },
        {
            title: 'FTTC Technician',
            description: 'Master fiber-to-the-curb (FTTC) technology.',
            courseIcon: "fttc",
            slug: 'fttc-technician'
        },
    ];

    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <motion.div
            initial="hidden" // Start with hidden state
            whileInView="visible" // Animate when in view
            viewport={{ once: true }} // Trigger animation only once
            variants={containerVariants} // Use container animation variants
        >
            <Grid container spacing={3} alignItems="center">
                {courses.map((course, index) => (
                    <Fragment key={index}>
                        <Grid
                            size={8}
                            order={index % 2 === 0 ? (1 + (index / 2) * 6) : (5 + ((index - 1) / 2) * 6)}
                            onMouseEnter={() => setActiveIndex(index)} // Change active course on hover
                        >
                            <motion.div variants={itemVariants}>

                                <CourseCard
                                    component={Link}
                                    to={course.slug}
                                    sx={{
                                        color: 'text.primary',
                                        "&:hover": {
                                            color: 'text.primary',
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h3" // h1 or h2 for large numbers
                                        sx={{
                                            fontSize: { xs: '40px', md: '48px' }, // Adjust size for the effect
                                            fontWeight: '800',
                                            color: theme.palette.accent.main, // Theme primary color
                                            zIndex: 1, // Layering control
                                        }}
                                    >
                                        {index + 1}
                                    </Typography>

                                    <Box
                                        sx={{
                                            minWidth: '50%',
                                            marginLeft: { xs: '4px', md: '16px' },
                                        }}>
                                        <CardContent>
                                            <Typography variant="h5" align="left" gutterBottom>
                                                {course.title}
                                            </Typography>
                                            <Typography variant="body1" align="left" gutterBottom>
                                                {course.description}
                                            </Typography>
                                            <Typography variant="body2" align="left"
                                                sx={{
                                                    color: 'accent.main',
                                                }}
                                            >
                                                Learn more
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </CourseCard>
                            </motion.div>
                        </Grid>

                        <Grid size={4} justifyContent={'center'} order={index % 2 === 0 ? (2 + (index / 2) * 6) : (4 + ((index - 1) / 2) * 6)}>
                            <motion.div variants={itemVariants}>
                                <Box
                                    sx={{
                                        width: '80px',
                                        mx: 'auto',
                                    }}>
                                        <AssetRenderer iconName={course.courseIcon} style={{ height: "80px", AspectRatio: '1/1', mx: 'auto' }}/>
                                </Box>
                            </motion.div>
                        </Grid>
                        
                        {index < courses.length - 1 && (
                            <Grid
                                order={(3 * (index + 1))}
                                size={12} >
                                <Arrow />
                            </Grid>
                        )}

                    </Fragment>
                ))}
            </Grid>
        </motion.div>
    )

}

export default SkillTree;