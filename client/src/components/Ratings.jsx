import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Ratings({ num }) {

    const totalStars = 5;
    const starWidth = 40;
    const fullStars = (Math.floor(num));
    const halfStars = num % 1 >= 0.5 ? 1 : 0;
    var emptyStars = totalStars - fullStars - halfStars;
    const starMargin = '1px';

    const renderStars = () => {
        const stars = [];

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <StarIcon key={`full-star-${i}`} sx={{ color: 'gold', margin: starMargin }} />
            );
        }

        // Add half stars
        if (halfStars === 1) {
            stars.push(
                <StarHalfIcon key="half-star" sx={{ color: 'gold', margin: starMargin }} />
            );
        }

        // Add empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <StarBorderIcon key={`empty-star-${i}`} sx={{ color: 'gold', marginRight: starMargin }} />
            )
        }

        return stars;

    };


    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderStars()}
        </Box>
    );
}

export default Ratings;