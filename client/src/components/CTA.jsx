import { Container, Typography, Button, collapseClasses } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { alpha, Box } from '@mui/system';

const CTA = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: alpha(theme.palette.primary.main, 0.2),
                mx: 'auto',
                maxWidth: '668px',
                display: 'flex',
                padding: '24px',
                my: '112px',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
                borderRadius: '18px',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Start Your Career Today
            </Typography>
            <Typography variant='body1'>
                Enroll now and take the first step towards a rewarding career in telecommunications.
            </Typography>
            <Button variant="contained" color="primary"
                sx={{
                    display: 'flex',
                    width: '196px',
                    padding: '12px 24px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >Sign Up
            </Button>
        </Box >
    )

}

export default CTA;