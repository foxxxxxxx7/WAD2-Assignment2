import React, { useContext } from "react";
import TVListPageTemplate from "../components/templateTVListPage";
import { TVContext } from "../contexts/TVContext";
import { useQueries } from "react-query";
import { getTV } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromTVFavorites from "../components/cardIcons/removeFromTVFavorites";
import WriteTVReview from "../components/cardIcons/writeTVReview";
import { AuthContext } from "../contexts/authContext";

const FavoriteTVPage = () => {
    // const { tvfavorites: TVIds } = useContext(TVContext);
    const userContext = useContext(AuthContext)
    const user = userContext.userEmail
    const {favourites} = useContext(TVContext)

    // Create an array of queries and run in parallel.
    const favoriteTVQueries = useQueries(
        favourites.map((TVId) => {
            console.log(TVId)
            return {
                queryKey: ["favorites", { id: TVId }],
                queryFn: getTV,
            };
        })
    );
    
    // Check if any of the parallel queries is still loading.
    const isLoading = favoriteTVQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }

    const tv = favoriteTVQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
    });

    const toDo = () => true;

    return (
        <TVListPageTemplate
            title="Favorite TV Shows"
            tv={tv}
            action={(tv) => {
                return (
                    <>
                        <RemoveFromTVFavorites tv={tv} />
                        <WriteTVReview tv={tv} />
                    </>
                );
            }}
        />
    );
};

export default FavoriteTVPage;