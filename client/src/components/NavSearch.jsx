import React, { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    TextField,
    InputAdornment,
    Button,
    Typography,
    Menu,
    MenuItem,
    SvgIcon,
    Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const NavWithSearch = () => {
    const theme = useTheme();

    // State for the search bar and navigation
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");

    const pages = ["Courses", "Careers", "Contact", "About"];

    // Handlers for navigation
    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    // Toggle search bar
    const handleToggleSearch = () => setSearchOpen((prev) => !prev);

    return (
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.backgroundCream.main, color: theme.palette.primary.main }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Mobile menu icon */}
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            keepMounted
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography component={Link} to={`/${page.toLowerCase()}`} sx={{ textAlign: "center" }}>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Centered SVG logo */}
                    <Box
                        sx={{
                            mr: { xs: 0, md: 4 },
                            flexGrow: { xs: 1, md: 0 },
                            justifyContent: { xs: "center", md: "flex-start" },
                            alignItems: "center",
                        }}
                        component={Link} to="/"
                    >
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
                    </Box>

                    {/* Desktop logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            "&:hover": { color: theme.palette.accent.main },
                            textDecoration: "none",
                            flexGrow: 1,
                        }}
                    >
                        Broadband Connect
                    </Typography>

                    {/* Desktop navigation links */}
                    {!searchOpen && (
                        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    component={Link}
                                    to={`/${page.toLowerCase()}`}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: theme.palette.text.primary,
                                        "&:hover": { color: theme.palette.accent.main },
                                        display: "block",
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    )}

                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            alignContent: 'flex-end',
                            alignItems: "center",
                        }}
                    >

                        {/* Search icon */}
                        <IconButton color="inherit" onClick={handleToggleSearch}
                            sx={{
                                ml: 3,
                                top: searchOpen ? "-50px" : "0", // Moves up when search is active
                                right: "0",
                                opacity: searchOpen ? 0 : 1, // Fade out when inactive
                                transition: "all 0.3s ease",
                            }}>
                            <SearchIcon />
                        </IconButton>

                        {/* Close Icon */}
                        <IconButton
                            onClick={handleToggleSearch}
                            sx={{
                                position: "absolute",
                                top: searchOpen ? "0" : "50px", // Moves down into view when search is active
                                right: "0",
                                opacity: searchOpen ? 1 : 0, // Fade in when active
                                transition: "all 0.3s ease",
                                zIndex: 1300,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        {/* Text Field */}
                        <TextField
                            autoFocus={searchOpen}
                            variant="standard"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            sx={{
                                width: searchOpen ? "400px" : "0px", // Expand width when active
                                overflow: "hidden", // Prevent text from overflowing
                                transition: "width 0.3s ease", // Smooth grow animation
                                opacity: searchOpen ? 1 : 0, // Fade in when active
                            }}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavWithSearch;
