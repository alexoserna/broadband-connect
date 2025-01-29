import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";
import AssetRenderer from "./assetRenderer";

const CourseDisplay = ({ slug, title, courseIcon, description, type }) => {

    const theme = useTheme();

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div variants={itemVariants}>

            <Box
                component={Link}
                to={
                    type === 'certification'
                        ? `/courses/certification/${slug}` // Route for certifications
                        : `/courses/${slug}` // Route for courses
                }
                sx={{
                    transition: "all 0.3s ease-in-out",
                    display: "inline-block",
                    color: "black", // Default color
                    textDecoration: "none",
                    "&:hover": {
                        transform: 'scale(1.05)',
                        color: "accent.main", // Hover color
                    },
                }}>

                <AssetRenderer iconName={courseIcon} style={{ width: "70%", height: "auto", AspectRatio: '1/1' }} />

                <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
                    {title}
                </Typography>
            </Box>

        </motion.div>
    )

};

export default CourseDisplay;