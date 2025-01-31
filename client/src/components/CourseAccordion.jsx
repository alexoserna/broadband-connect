import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

const CourseAccordion = ({ unit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme(); // Get the theme directly inside the component

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Accordion
      key={unit.code}
      expanded={isExpanded}
      onChange={handleExpand}
      elevation={0}
      square={true}
      sx={{
        borderRadius: "16px",
        backgroundColor: theme.palette.secondary.light,
        border: "none",
        mb: 2,
        "&:before": { display: "none" }, // Removes default MUI divider line
      }}
    >
      <AccordionSummary
        expandIcon={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              transition: "transform 0.4s ease-in-out",
              transform: isExpanded ? "rotate(-45deg)" : "rotate(0deg)",
            }}
          >
            <AddIcon
              color="accent"
              sx={{
                fontSize: "2rem", // Adjust size
                stroke: theme.palette.accent.main, // Outline color
                strokeWidth: 2,
              }}
            />
          </Box>
        }
        sx={{
          display: "flex",
          alignItems: "left",
          px: 2,
          outline: "none",
          "&:focus": {
            outline: "none",
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
          {unit.code}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" sx={{ color: "text.primary", textAlign: "left" }}>
          {unit.title}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseAccordion;
