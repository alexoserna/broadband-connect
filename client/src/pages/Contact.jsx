import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Typography,
  CircularProgress,
  Container,
  SvgIcon
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import ContactForm from "../components/ContactForm.jsx";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { alpha, useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';

export default function ContactPage() {

  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '80vh', marginBottom: 3 }}>

      <Box
        sx={{
          paddingTop: '65px',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
          paddingBlock: '5rem',
          overflow: 'hidden',
          mx: '0px',
          display: 'flex',
          flexDirection: { xs: "column", md: "row" },
          alignItems: 'center',
          color: '#fff',
          position: 'relative',
        }}>
        {/* text section */}
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: '50px',
              justifyContent: "center",
              alignItems: '{ xs: "center", md: "flex-start" }',
              textAlign: 'center',
              padding: "2rem",
              height: { xs: '82vh', md: '100px' },
              zIndex: 1,
            }}
          >
            <Box>
              <Typography variant="h2" fontWeight="bold" sx={{ letterSpacing: "2px" }} gutterBottom>
                Get in Touch with Us
              </Typography>
              <Typography variant="h5" sx={{ my: 3 }}>
                Have questions or need assistance? We're here to help. Reach out to us for more information about our services and courses.
              </Typography>
            </Box>
          </Box>
        </Container>

        {/* Background Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: 'absolute',
            top: { xs: '18%', md: '20%' },
            right: { xs: '-30%', md: '-20px' },
            height: { xs: '60vh', md: '38vh' },
          }}
        >

          <SvgIcon
            sx={{
              color: (theme.palette.backgroundCream.main),
              width: 'auto', height: { xs: '120%', md: '150%' },
              filter: `drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))`,
              opacity: 0.5, rotate: '25deg',
            }}>

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

        </Box>

      </Box>

      <Container>
        <Grid container spacing={3}
          sx={{
            width: '100%',
          }}>
          <Grid size={12}>

          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                padding: { xs: 2, md: 4 },
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: theme.palette.backgroundCream.card,
                marginBottom: 4,
                height: '638px',
                mx: 'auto',
                overflow: 'hidden',
                gap: 1.3,
                color: theme.palette.text.main,
              }}>
              <Typography variant="h5" sx={{ marginBottom: 4 }}>
                Contact Information
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <LocationOnIcon color="accent" sx={{ fontSize: "1.8rem" }} />
                <Typography>
                  <Link
                    to="https://www.google.com/maps/dir/?api=1&destination=2+Jacaranda+Rd,+Capalaba+QLD+4157,+Australia"
                    rel="noopener noreferrer"
                    underline="hover"
                    color="inherit"
                  >
                    2 Jacaranda Rd, Capalaba QLD 4157, Australia
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PhoneIcon color="accent" sx={{ fontSize: "1.8rem" }} />
                <Link to="tel:+61418730002" color="textPrimary">
                  <Typography>+61 418 730 002</Typography>
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <EmailIcon color="accent" sx={{ fontSize: "1.8rem" }} />
                <Link to="mailto:support@broadbandconnect.edu.au" underline="hover" color="inherit">
                  support@broadbandconnect.edu.au
                </Link>
              </Box>
              {/* Business Hours */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <WatchLaterIcon color="accent" sx={{ fontSize: "1.8rem" }} />
                <Typography>Business Hours: Monday - Friday, 7:30 AM - 5 PM</Typography>
              </Box>

              {/* Google Map Embed */}
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.5634880292!2d153.19140591163438!3d-27.545017376177093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9143972b958207%3A0x6596838ae179907!2sBroadband%20Connect!5e0!3m2!1sen!2sus!4v1737911577386!5m2!1sen!2sus"
                width="100%"
                height="300px"
                allowFullScreen=""
                loading="lazy"
                sx={{
                  border: 0,
                  marginTop: 'auto',
                }}
              ></Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}