import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../../contexts/authContext";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    //   };
    //   const handleClose = () => {
    //     setAnchorEl(null);
    //   };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const navigate = useNavigate();
    const context = useContext(AuthContext);


    const menuOptions = [
        { label: "Home", path: "/movies" },
        { label: "Favorites", path: "/movies/favorites" },
        { label: "Upcoming", path: "/movies/upcoming" },
        { label: "Top Movies", path: "/movies/topMovies" },
        { label: "TV", path: "/tv" },
        { label: "TV Favorites", path: "/tv/favorites" },
        { label: "Top TV", path: "/tv/topTV" },
        { label: "Logout", path: "/" },
        // { label: "Upcoming TV", path: "/tv/upcomingTV"},
    ];

    const handleMenuSelect = (pageURL) => {
        if (pageURL === "/") {
            context.signout()
            navigate("/", { replace: true });
        }
        navigate(pageURL, { replace: true });
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <AppBar position="fixed" color="secondary">
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        TMDB Client
                    </Typography>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        All you ever wanted to know about Movies and TV!
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuOptions.map((opt) => (
                                    <MenuItem
                                        key={opt.label}
                                        onClick={() => handleMenuSelect(opt.path)}
                                    >
                                        {opt.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        <>
                            {menuOptions.map((opt) => (
                                <Button
                                    key={opt.label}
                                    color="inherit"
                                    onClick={() => handleMenuSelect(opt.path)}
                                >
                                    {opt.label}
                                </Button>
                            ))}
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    );
};

export default SiteHeader;
