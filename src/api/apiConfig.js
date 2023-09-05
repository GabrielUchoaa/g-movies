import React from "react"
const API_KEY = '62289db5e694f4a5c9a3617062741344'
const API_BASE = 'https://api.themoviedb.org/3'



const basicFetch = async (endpoint) => {
     const req = await fetch(`${API_BASE}${endpoint}`);
     const json = await req.json();
     return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'trending tv shows',
                title: 'Trending Tv Shows',
                items: await basicFetch(`/tv/top_rated?with_network=213&language=pt-BR&api_key=${API_KEY}`),
                type: "tv"
            },
            {
                slug: 'tv shows',
                title: 'Tv Shows',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
                type: "tv"
            },
            {
                slug: 'trending',
                title: 'Trending Movies',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
                type: "movie"
            },
            {
                slug: 'toprated',
                title: 'Top rated movies',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
                type: "movie"
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
                type: "movie"
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
                type: "movie"
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
                type: "movie"
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
                type: "movie"
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
                type: "movie"
            }          
        ]
},



getMovieInfo: async (movieId, type) => {
   let info = {};

  if(movieId){
   

      switch(type){
       case "tv":
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)   
       break;
       case "movie":
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)   
       break;
       case "all":
          info = await basicFetch(`/all/${movieId}?language=pt-BR&api_key=${API_KEY}`)   
        break;
       default: 
          info = null;
       break;
      }
    return info;

  }
    
       
},



}








   







    
    

    


    