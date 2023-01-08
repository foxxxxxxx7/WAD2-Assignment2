import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";


const AddToFavoritesIcon = ({ movie }) => {
    const contextAuth = useContext(AuthContext);
    const context = useContext(MoviesContext);
    const navigate = useNavigate();

    const handleAddToFavorites = (e) => {
        //if (loading) return;
        if (!contextAuth.isAuthenticated) {
          return navigate("/")
        }
        e.preventDefault();
        //context.addToFavorites(movie);
        context.addToFavorites(contextAuth.userEmail, movie.id);
      };

    return (
        <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
            <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToFavoritesIcon;