import React, { useState, useContext } from "react";
import { AuthContext } from "./authContext";
import { getAuthFavouriteTV, addAuthFavouriteTV, deleteAuthFavouriteTV } from "../api/tmdb-api";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
    const [tvfavorites, setTVFavorites] = useState([])
    const [myTVReviews, setMyTVReviews] = useState({})
    const [TVwatchlist, setTVWatchlist] = useState([])
    const userContext = useContext(AuthContext)
    const user = userContext.userEmail

    if(userContext.isAuthenticated){
        getAuthFavouriteTV(user).then((favorites) => {
        setTVFavorites(favorites);
      });
    }


    const addToTVFavorites = (tv, username) => {
        let newTVFavorites = [];
        addAuthFavouriteTV(username, tv);
        if (!tvfavorites.includes(tv.id)) {
            newTVFavorites = [...tvfavorites, tv.id];
        }
        else {
            newTVFavorites = [...tvfavorites];
        }
        setTVFavorites(newTVFavorites)
    };

    const addTVReview = (tv, review) => {
        setMyTVReviews({ ...myTVReviews, [tv.id]: review })
    };
    //console.log(myReviews);

    // We will use this function in a later section
    const removeFromTVFavorites = (tv, username) => {
        deleteAuthFavouriteTV(username, tv);
        setTVFavorites(tvfavorites.filter(
            (mId) => mId !== tv.id
        ))
    };

    const addToTVWatchlist = (tv) => {
        let newEntry = [];
        if (!TVwatchlist.includes(tv.id)) {
            newEntry = [...TVwatchlist, tv.id];
        }
        else {
            newEntry = [...TVwatchlist];
        }
        setTVWatchlist(newEntry)
        console.log(newEntry)
    };

    return (
        <TVContext.Provider
            value={{
                tvfavorites,
                TVwatchlist,
                addToTVFavorites,
                removeFromTVFavorites,
                addTVReview,
                addToTVWatchlist
            }}
        >
            {props.children}
        </TVContext.Provider>
    );
};

export default TVContextProvider;