import React, { useState } from "react";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Box,
  Paper
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { alpha, useTheme } from '@mui/material/styles';

const SearchBar = ({ courses }) => {

  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);


  const handleSearch = (query) => {
    setSearchTerm(query);

    if (query.trim() === "") {
      setFilteredCourses([]);
    } else {
      const lowerCaseQuery = query.toLowerCase();

      setFilteredCourses(
        courses.filter((course) => {
          const matchesTitle = course.title?.toLowerCase().includes(lowerCaseQuery);
          const matchesDescription = course.description
            ?.toLowerCase()
            .includes(lowerCaseQuery);
          const matchesQualification = course.qualificationDescription
            ?.toLowerCase()
            .includes(lowerCaseQuery);
          const matchesCareerOutcomes = course.careerOutcomes?.some((outcome) =>
            outcome?.toLowerCase().includes(lowerCaseQuery)
          );
          const matchesCoreUnits = course.structure?.coreUnits?.some(
            (unit) =>
              unit.code?.toLowerCase().includes(lowerCaseQuery) ||
              unit.title?.toLowerCase().includes(lowerCaseQuery)
          );
          const matchesElectiveUnits = course.structure?.electiveUnits?.some(
            (unit) =>
              unit.code?.toLowerCase().includes(lowerCaseQuery) ||
              unit.title?.toLowerCase().includes(lowerCaseQuery)
          );

          return (
            matchesTitle ||
            matchesDescription ||
            matchesQualification ||
            matchesCareerOutcomes ||
            matchesCoreUnits ||
            matchesElectiveUnits
          );
        })
      );
    }
  };

  return (
    <Box sx={{
      width: "100%",
      maxWidth: 800,
      margin: "0 auto",
      mt: 1,
      position: 'relative',
      borderRadius: '25px',
    }}>
      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search courses, modules, or outcomes..."
        color="accent"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <IconButton
              sx={{
                marginRight: '8px'
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }
        }}
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px',
            background: alpha(theme.palette.backgroundCream.card, 0.2),
            overflow: 'hidden',
            padding: '0px', 
            '& fieldset': {
              borderColor: '#ccc', // Default border color
            },
          },
        }}
      />

      {/* Results */}
      {searchTerm.trim() && (
        <Paper
          sx={{
            position: "absolute",
            top: "56px", // Adjust this to position it below the search bar
            left: 0,
            right: 0,
            maxWidth: 800,
            margin: "0 auto",
            backgroundColor: "white",
            boxShadow: 3,
            zIndex: 10, // Ensure it overlays the rest of the content
            maxHeight: "300px", // Limit height for scrollability
            overflowY: "auto",
          }}
        >
          {filteredCourses.length === 0 ? (
            <Typography variant="body1" sx={{ p: 2 }}>
              No courses found.
            </Typography>
          ) : (
            <List>
              {filteredCourses.map((course) => (
                <ListItem
                  key={course.id}
                  sx={{ color: theme.palette.text.primary }}
                  component={Link}
                  to={`/courses/${course.slug}`}
                  divider>
                  <ListItemText
                    primary={course.title}
                    secondary={<Typography color="textPrimary">{course.description.substring(0, 100) + "..."}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Paper>
      )}
    </Box>
  );
};

export default SearchBar;