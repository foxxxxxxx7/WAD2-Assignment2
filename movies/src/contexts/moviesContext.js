import React, { useState, useContext } from "react";
import { AuthContext } from "./authContext";
import { getAuthFavouriteMovies, addAuthFavouriteMovie, deleteAuthFavouriteMovies } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])
    const [myReviews, setMyReviews] = useState({})
    const [watchlist, setWatchlist] = useState([])
    const userContext = useContext(AuthContext)
    const user = userContext.userEmail

    if(userContext.isAuthenticated){
        getAuthFavouriteMovies(user).then((favorites) => {
        setFavorites(favorites);
      });
    }

    const addToFavorites = (movie, username) => {
        let newFavorites = [];
        addAuthFavouriteMovie(username, movie);
        if (!favorites.includes(movie.id)) {
            newFavorites = [...favorites, movie.id, username];
        }
        else {
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };

    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review })
    };
    //console.log(myReviews);

    // We will use this function in a later section
    const removeFromFavorites = (movie, username) => {
        deleteAuthFavouriteMovies(username, movie);
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id, username
        ))
    };

    const addToWatchlist = (movie) => {
        let newEntry = [];
        if (!watchlist.includes(movie.id)) {
            newEntry = [...watchlist, movie.id];
        }
        else {
            newEntry = [...watchlist];
        }
        setWatchlist(newEntry)
        console.log(newEntry)
    };

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                watchlist,
                addToFavorites,
                removeFromFavorites,
                addReview,
                addToWatchlist
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;