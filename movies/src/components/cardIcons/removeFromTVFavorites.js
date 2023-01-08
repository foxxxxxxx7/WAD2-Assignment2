import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {TVContext } from "../../contexts/TVContext";
import { AuthContext } from "../../contexts/authContext";

const RemoveFromTVFavoritesIcon = ({ tv }) => {
    const contextAuth = useContext(AuthContext);
    const context = useContext(TVContext);
    const user = contextAuth.userEmail


    const handleRemoveFromTVFavorites = (e) => {
        e.preventDefault();
        context.removeFromTVFavorites(user, tv);
    };
    return (
        <IconButton
            aria-label="remove from favorites"
            onClick={handleRemoveFromTVFavorites}
        >
            <DeleteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default RemoveFromTVFavoritesIcon;