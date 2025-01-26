import React from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // Ensures it overlays other content
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
