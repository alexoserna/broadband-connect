import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    TextField,
    Menu,
    MenuItem,
    Typography,
    Box,
    SvgIcon,
    Container,
    Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const NavWithSearch = () => {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");

    const pages = ["Courses", "Careers", "Contact", "About"];

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleToggleSearch = () => setSearchOpen((prev) => !prev);


    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: theme.palette.backgroundCream.main,
                color: theme.palette.primary.main,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    {/* Left Section */}
                    <Box sx={{ display: "flex", alignItems: "center", position: 'relative' }}>
                        {/* Mobile Menu Icon */}
                        <IconButton
                            sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography
                                        component={Link}
                                        to={`/${page.toLowerCase()}`}
                                        sx={{ textAlign: "center" }}
                                    >
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                        {/* Centered SVG logo for mobile view */}
                        <Box
                            sx={{
                                mr: { xs: 0, md: 4 },
                                flexGrow: { xs: 1, md: 0 },
                                position: {xs: "absolute", md: 'static'},
                                left: 'calc(50vw - 50%)',
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                alignItems: 'center'
                            }}
                            component={Link}
                            to="/">
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
                        </ Box>

                        {/* Logo */}
                        <Box
                            component={Link}
                            to="/"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                textDecoration: "none",
                                color: theme.palette.primary.main,
                            }}
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    display: { xs: "none", md: "block" },
                                    color: "inherit",
                                    "&:hover": { color: theme.palette.accent.main },
                                }}
                            >
                                Broadband Connect
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Section */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            flexGrow: { xs: 1, md: 0 },
                            justifyContent: "flex-end",
                        }}
                    >
                        {/* Search Bar */}
                        <Box
                            sx={{
                                display: { xs: "flex" },
                                alignItems: "center",
                                position: "relative",
                            }}
                        >

                            {/* Desktop Navigation */}
                            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        component={Link}
                                        to={`/${page.toLowerCase()}`}
                                        sx={{
                                            textDecoration: "none",
                                            color: theme.palette.primary.main,
                                            "&:hover": { color: theme.palette.accent.main },
                                            top: searchOpen ? "-50px" : "0", // Moves up when search is active
                                            opacity: searchOpen ? 0 : 1, // Fade out when inactive
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            {/* Search Icon */}
                            <IconButton color="inherit" onClick={handleToggleSearch}
                                sx={{
                                    ml: 3,
                                    top: searchOpen ? "-50px" : "0", // Moves up when search is active
                                    right: "16px",
                                    opacity: searchOpen ? 0 : 1, // Fade out when inactive
                                    transition: "all 0.3s ease",
                                }}>
                                <SearchIcon />
                            </IconButton>

                            {/* Search Input */}
                            <TextField
                                autoFocus={searchOpen}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search..."
                                variant="standard"
                                sx={{
                                    position: 'absolute',
                                    right: '56px',
                                    width: { xs: searchOpen ? "60vw" : "0px", md: searchOpen ? "350px" : "0px" },
                                    transition: "width 0.3s ease",
                                    bgcolor: theme.palette.backgroundCream.card,
                                    input: {
                                        textIndent: '8px',
                                    },
                                }}
                            />

                            {/* Close Icon */}

                            <IconButton onClick={handleToggleSearch} color="inherit"
                                sx={{
                                    position: 'absolute',
                                    top: searchOpen ? "0" : "50px",
                                    right: '16px',
                                    opacity: searchOpen ? 1 : 0,
                                    pointerEvents: searchOpen ? "auto" : "none",
                                    transition: "all 0.3s ease",
                                }}>
                                <CloseIcon />
                            </IconButton>

                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavWithSearch;
