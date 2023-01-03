# WAD2-Assignment1
Web App Development Assignment 1 November 2022

# Assignment 1 - ReactJS app.

Name: Robert Fox

## Overview.

This repository contains information about movies and TV shows hosted by the movie data base.

### Features.

+ Feature 1 - TV - I have added a list of the latest TV shows
+ Feature 2 - Top TV - This displays a page of the 20 highest rated TV shows from the movie database.
+ Feature 3 - TV Favorites - I have allowed the user to favorite TV shows and then view them on an independant page.
+ Feature 4 - Top Movies - This displays a page of the 20 highest rated movies from the movie database.
+ Feature 5 - Firebase Authentication - I have allowed a user to create an account which is hosted on my firebase console.
+ Feature 6 - Add to TV watchlist - I have allowed a user to add a TV show to their own watchlist.
+ Feature 7 - Add a review for a tv show - this allows a user to write their own review for a particular tv show


## Setup requirements.

firebase must be installed with "npm install firebase" to include it amongst the node_modules

## API endpoints.

+ List of top rated movies - movie/topMovies
+ List of top rated tv shows - tv/topTV
+ Favoirted tv shows - tv/favorites
+ Discover list of tv shows - discover/tv
+ See details for a particular tv show - /tv
+ Find all tv show genres to allow filtering - genre/tv
+ Find all images for a particular tv show - tv/${id}/images
+ Display a list of reviews for a particular tv show - tv/${id}/reviews
+ Get a list of the latest tv shows - tv/latest

## Routing.

+ /tv - displays TV homepage
+ /tv/:id - displays a particular tv show
+ /TVreviews/:id - displays a list of reviews for a particular tv show
+ /TVreviews/form - Allows a user to write a review for a tv show
+ /tv/favorites - displays a list of the users favorited tv shows
+ /tv/topTV - displays a list of the top rated tv shows
+ /" element - root page, allows a user to sign in or create a new account, also to logout
+ /movie/topMovies - displays a list of top rated movies

## Independent learning (If relevant).

I followed a tutorial on youtube to implement firebase authentication, I set up a new project on my firebase console and linked it to my project.
