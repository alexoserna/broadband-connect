import { Link } from "react-router-dom";
import { SvgIcon, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const Footer = () => {

    const theme = useTheme();

    return (
        <Box sx={{
            padding: '20px 40px', // Padding for the footer
            marginTop: 'auto', // Pushes the footer to the bottom
            width: '90vw',
        }}>
            {/* Main content inside the footer */}
            <Grid container alignItems="center" spacing={2}>
                {/* Left section - Logo and navigation links */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <SvgIcon sx={{ color: theme.palette.primary.main }}>
                        {/* credit: cog icon from https://heroicons.com */}
                        <svg
                            id="Layer_2"
                            data-name="Layer 2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 925.51 864.13"
                        >
                            <path fill="currentColor" className="cls-1" d="M36.71,849.21c21.5,14.84,48.94,16.6,79.37,5.11,20.35-17.93,282.13-134.28,293.31-139.24,45.64-20.8,53.64-50.79,52.94-102.35V224.75c-.81-27.37-13.7-51.07-35.35-64.96-23.48-15.07-54.03-16.48-83.81-3.89l-185.87,87.47.57-218.21C107.69-8.4,54.59-8.39,0,25.2v750.52c-.02,29.24,14.39,58.08,36.71,73.49ZM157.31,424.16l144.88-67.49v226.46l-144.88,66.91v-225.88Z" />
                            <path fill="currentColor" className="cls-2" d="M869.61,286.66l-222.09-93.15c-52.57-18.48-110.19,9.09-110.19,93.15v389.65c-.6,41.14,16.56,69.59,51.69,85.2l238.94,99.78c80.78,22.45,117.1-123.83,50.74-160.56l-182.33-77.25v-225.5l117.31,48.11c122.89,30.02,147.8-122.84,55.93-159.44Z" />
                        </svg>
                    </SvgIcon>
                </Grid>

                {/* Center section - Navigation Links */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3, color: theme.palette.text.primary}}>
                        <Typography component={Link} to={`/contact`} sx={{ textAlign: 'center' }}>
                            Contact Us
                        </Typography>
                        <Typography component={Link} to={`/about`} sx={{ textAlign: 'center' }}>
                            About Us
                        </Typography>
                        <Typography component={Link} to={`/courses`} sx={{ textAlign: 'center' }}>
                            Our Courses
                        </Typography>
                        <Typography component={Link} to={`/#`} sx={{ textAlign: 'center' }}>
                            Get Started
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Bottom section - Copyright and policy links */}
            <Box sx={{
                borderTop: '1px solid #ccc', // Border on top
                marginTop: 2,
                paddingTop: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: '36px'
            }}>
                <Typography variant="body2" color="textSecondary" sx={{ fontSize: 12 }}>
                    © 2025 Broadband Connect. All rights reserved.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Link href="#" sx={{ color: '#5a5a5a', fontSize: 12, textDecoration: 'none' }}>
                        Privacy Policy
                    </Link>
                    <Link href="#" sx={{ color: '#5a5a5a', fontSize: 12, textDecoration: 'none' }}>
                        Terms of Use
                    </Link>
                    <Link href="#" sx={{ color: '#5a5a5a', fontSize: 12, textDecoration: 'none' }}>
                        Cookie Policy
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;