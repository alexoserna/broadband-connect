import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default SearchBar;
