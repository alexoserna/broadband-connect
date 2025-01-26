import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,
  OutlinedInput,
  CircularProgress,
} from "@mui/material";
import Grid from '@mui/material/Grid2';

import { useQuery } from '@apollo/client';
import { QUERY_COURSES, QUERY_CERTIFICATIONS } from '../utils/queries.js';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedItems: [],
  });
  const [errors, setErrors] = useState({}); // Correctly define the `errors` state
  const [status, setStatus] = useState("");

  const { loading: loadingCourses, error: errorCourses, data: dataCourses } = useQuery(QUERY_COURSES);
  const { loading: loadingCertifications, error: errorCertifications, data: dataCertifications } = useQuery(QUERY_CERTIFICATIONS);

  // Combine and map data
  const combinedData = React.useMemo(() => {
    const courses = dataCourses?.getAllCourses || [];
    const certifications = dataCertifications?.getAllCertifications || [];
    return [
      ...certifications.map((certification) => ({
        ...certification,
        type: "certification",
      })),
      ...courses.map((course) => ({
        ...course,
        type: "course",
      })),
    ];
  }, [dataCourses, dataCertifications]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors as the user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleMultiSelectChange = (e) => {
    const {
      target: { value },
    } = e;
    setFormData({
      ...formData,
      selectedItems: typeof value === "string" ? value.split(",") : value,
    });
  };

  const validateInputs = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-()]{6,15}$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (e.g., +61 123 456 789).";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputErrors = validateInputs();

    if (Object.keys(inputErrors).length > 0) {
      setErrors(inputErrors);
      return;
    }

    setStatus("loading");

    // Mocked backend response
    setTimeout(() => {
      console.log("Form submission:", formData);
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        selectedItems: [],
      });
    }, 1000);
  };

  // Handle loading and error states
  if (loadingCourses || loadingCertifications) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (errorCourses || errorCertifications) {
    console.error("Error:", errorCourses?.message || errorCertifications?.message);
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography color="error">Error: {errorCourses?.message || errorCertifications?.message}</Typography>
      </Box>
    );
  }

  return (
    <Grid container
      spacing={2}
      sx={{
        minHeight: '100vh'
      }}>
      <Grid size={12}>
        <Typography variant="h3" py={9}>Contact Broadband Connect</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
              width: "100%",
              backgroundColor: "white",
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Contact Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  required
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  required
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="select-items-label">Select Courses/Certifications</InputLabel>
                  <Select
                    labelId="select-items-label"
                    id="selectedItems"
                    name="selectedItems"
                    multiple
                    value={formData.selectedItems}
                    onChange={handleMultiSelectChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Select Courses/Certifications" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value, index) => (
                          <Chip key={index} label={value} />
                        ))}
                      </Box>
                    )}
                  >
                    {combinedData.map((item, index) => (
                      <MenuItem key={index} value={`${item.title}`}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </Button>
            </form>
            {status === "success" && (
              <Typography color="success.main" sx={{ marginTop: 2 }}>
                Your message has been sent successfully!
              </Typography>
            )}
            {status === "error" && (
              <Typography color="error.main" sx={{ marginTop: 2 }}>
                Something went wrong. Please try again.
              </Typography>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}