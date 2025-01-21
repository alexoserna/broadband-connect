import { Box, Container, Typography } from "@mui/material";
import { alpha, useTheme } from '@mui/material/styles';
import { QUERY_COURSE_BY_SLUG } from "../utils/queries";
import Grid from '@mui/material/Grid2';
import { useState } from "react";

const SkillTree = () => {

    const courses = [
        {
            title: 'Open Cabler',
            description: 'Learn the basics of open cabling and installations.',
            slug: 'open-cabler-registration',
        },
        {
            title: 'Optical Fiber Endorsement',
            description: 'Gain expertise in handling and installing optical fibers.',
            slug: 'optical-fibre-cabling',
        },
        {
            title: 'Pit and Pipe',
            description: 'Understand pit and pipe installation for NBN networks.',
            slug: 'pit-and-pipe',
        },
        {
            title: 'FTTC Technician',
            description: 'Master fiber-to-the-curb (FTTC) technology.',
            slug: 'fttc-technician'
        },
    ];

    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{width : '100%'}}>
            {courses.map((course, index) => (
                <Grid
                    size={{sx:12, md: 3}}
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)} // Change active course on hover
                >
                    <Box
                        sx={{
                            padding: 1,
                            height: '92px',
                            maxWidth: '300px',
                            display: 'flex',
                            flexDirection:'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                            cursor: 'pointer',
                            borderRadius: '18px',
                            transition: 'transform 0.3s, background 0.3s, box-shadow 0.3s',
                            transform: activeIndex === index ? 'scale(1.09)' : 'scale(1)',
                            background:`linear-gradient(135deg,${theme.palette.primary.main},${theme.palette.primary.secondary})`,
                            filter: activeIndex === index ? 'none' : `grayscale(${(index+1)*25}%)`,
                            boxShadow:
                                activeIndex === index
                                    ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                                    : '0 2px 10px rgba(0, 0, 0, 0.1)',
                            color: activeIndex === index ? `${theme.palette.backgroundCream.card}` : '#CACACB',
                        }}
                    >
                        <Typography variant="h6">{course.title}</Typography>
                        {activeIndex === index && (
                            <Typography variant="body2">{course.description}</Typography>
                        )}
                    </Box>
                </Grid>
            ))}
        </Grid>
    )

}

export default SkillTree;