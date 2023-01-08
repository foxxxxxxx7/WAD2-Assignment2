import React, { useContext } from "react";
import { TVContext } from "../../contexts/TVContext";
import IconButton from "@mui/material/IconButton";
import FavoriteTVIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";


const AddToTVFavoritesIcon = ({ tv }) => {
    const contextAuth = useContext(AuthContext);
    const context = useContext(TVContext);
    const navigate = useNavigate();

    const handleAddToTVFavorites = (e) => {
        //if (loading) return;
        if (!contextAuth.isAuthenticated) {
          return navigate("/")
        }
        e.preventDefault();
        //context.addToFavorites(movie);
        context.addToTVFavorites(contextAuth.userEmail, tv.id);
      };


    return (
        <IconButton aria-label="add to favorites" onClick={handleAddToTVFavorites}>
            <FavoriteTVIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToTVFavoritesIcon;