import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
} from "@mui/material";

import { useQuery } from "@apollo/client";
import { QUERY_COURSES, QUERY_CERTIFICATIONS } from "../utils/queries.js";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    inquiryType: "General Inquiry",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    selectedItems: [],
  });
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const { loading: loadingCourses, error: errorCourses, data: dataCourses } = useQuery(QUERY_COURSES);
  const { loading: loadingCertifications, error: errorCertifications, data: dataCertifications } = useQuery(QUERY_CERTIFICATIONS);

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
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const toggleItem = (item) => {
    setFormData((prev) => ({
      ...prev,
      selectedItems: prev.selectedItems.includes(item)
        ? prev.selectedItems.filter((i) => i !== item)
        : [...prev.selectedItems, item],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputErrors = validateInputs();

    if (Object.keys(inputErrors).length > 0) {
      setErrors(inputErrors);
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      console.log("Form submission:", formData);
      setStatus("success");
      setFormData({
        inquiryType: "General Inquiry",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        selectedItems: [],
      });
    }, 1000);
  };

  const validateInputs = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-()]{6,15}$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    return newErrors;
  };

  return (
    <Container
      sx={{
        // Explicitly set the max width
        backgroundColor: "white",
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
      }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Inquiry Type */}
        <Box sx={{ marginBottom: 2 }}>
          <FormControl component="fieldset">
            <RadioGroup name="inquiryType" value={formData.inquiryType} onChange={handleChange} row>
              <FormControlLabel value="General Inquiry" control={<Radio />} label="General Inquiry" />
              <FormControlLabel value="Course Selection" control={<Radio />} label="Course Selection" />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* First Name */}
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

        {/* Last Name */}
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

        {/* Email */}
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

        {/* Phone */}
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

        {/* Course/Certification Selection */}
        {formData.inquiryType === "Course Selection" && (
          <Box sx={{ marginBottom: 2 }}>
            <Button variant="outlined" fullWidth onClick={() => setDialogOpen(true)}>
              Select Courses/Certifications
            </Button>
            <Box sx={{ marginTop: 1, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {formData.selectedItems.map((item, index) => (
                <Chip key={index} label={item} onDelete={() => toggleItem(item)} />
              ))}
            </Box>
          </Box>
        )}

        <Dialog
          open={isDialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description">
          <DialogTitle>Select Courses/Certifications</DialogTitle>
          <DialogContent>
            <List>
              {combinedData.map((item, index) => (
                <ListItem key={index} onClick={() => toggleItem(item.title)}>
                  <ListItemIcon>
                    <Checkbox checked={formData.selectedItems.includes(item.title)} />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>

        {/* Message */}
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

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={status === "loading"}>
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
    </Container>
  );
}
