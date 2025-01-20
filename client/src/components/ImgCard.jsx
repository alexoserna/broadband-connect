import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/system';  // Import alpha utility

const ImgCard = ({ image, title, description }) => {

    const theme = useTheme();

    return (
        <Card sx={{
            maxWidth: 345,
            mx: 'auto',
            boxShadow: 3,
            backgroundColor: alpha(theme.palette.secondary.main, 0.2),
            borderRadius: '18px'
        }}>
            {/* Card Image */}
            <CardMedia
                component="img"
                height="240"
                image={image}  // Dynamic image source
                alt={title}    // Alt text for accessibility
            />
            {/* Card Content */}
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {title}  {/* Title passed via props */}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {description}  {/* Description passed via props */}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ImgCard;