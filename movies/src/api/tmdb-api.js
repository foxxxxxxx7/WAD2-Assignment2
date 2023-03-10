export const getMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};
//test

export const getMovie = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getGenres = async () => {
    return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();

    })
        .catch((error) => {
            throw error
        });
};

export const getMovieReviews = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then((json) => {
            // console.log(json.results);
            return json.results;
        });
};

export const getUpcoming = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getTopMovies = (page) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};


export const getTVs = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getTV = (args) => {
    console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getTVGenres = async () => {
    return fetch(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getTVImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();

    })
        .catch((error) => {
            throw error
        });
};

export const getTVReviews = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then((json) => {
            // console.log(json.results);
            return json.results;
        });
};

export const getUpcomingTV = () => {
    return fetch(
        `https://api.themoviedb.org/3/tv/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getTopTV = (page) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getAuthFavouriteMovies = (user) => {
    return fetch(
        `/api/users/${user}/favourites/movies`, {
           headers: {
               'Authorization': window.localStorage.getItem('token')
           }
       }
   ).then(res => {
       return res.json();
   }).catch((error) => {
       console.log(error);
   });
  };

  export const deleteAuthFavouriteMovies = (user, movie) => {
    return fetch(
        `/api/users/${user}/favourites/movies/delete`, {
           headers: {
               'Authorization': window.localStorage.getItem('token')
           },
           method: 'post',
           body: JSON.stringify({"id": movie.id})
       }
   ).then(res => {
       return res.json();
   }).catch((error) => {
       console.log(error);
   });
  };

  export const addAuthFavouriteMovie = ( user, movId ) => {
    return fetch(
      `/api/users/${user}/favourites/movies`, {
           headers: {
               'Authorization': window.localStorage.getItem('token'),
               'Content-Type': 'application/json'
           },
           method: 'post',
           body: JSON.stringify({ id: movId })
       }
   ).then(res => {
       return res.json();
   }).catch((error) => {
       console.log(error);
   });
  };

  export const getAuthFavouriteTV = (user) => {
    return fetch(
        `/api/users/${user}/favourites/tv`, {
           headers: {
               'Authorization': window.localStorage.getItem('token')
           }
       }
   ).then(res => {
       return res.json();
   }).catch((error) => {
       console.log(error);
   });
  };

  export const deleteAuthFavouriteTV = (user, tv) => {
    return fetch(
        `/api/users/${user}/favourites/tv/delete`, {
           headers: {
               'Authorization': window.localStorage.getItem('token')
           },
           method: 'post',
           body: JSON.stringify({"id": tv.id})
       }
   ).then(res => {
       return res.json();
   }).catch((error) => {
       console.log(error);
   });
  };

  export const addAuthFavouriteTV = ( user, TVId ) => {
    return fetch(
      `/api/users/${user}/favourites/tv`, {
           headers: {
               'Authorization': window.localStorage.getItem('token'),
               'Content-Type': 'application/json'
           },
           method: 'post',
           body: JSON.stringify({ id: TVId })
       }
   ).then(res => {
       return res.json();
   }).catch((error) => {
       console.log(error);
   });
  };