import React from "react"
import apiConfig from "../api/apiConfig.js"
import { Link } from "react-router-dom"
const API_KEY = '62289db5e694f4a5c9a3617062741344'


export default function Movies(){
const [MoviesArray, setMoviesArray] = React.useState()
const [search, setSearch] = React.useState()
const [moviesData, setMoviesData] = React.useState()
const [moviesDataFiltered, setMoviesDataFiltered] = React.useState()



React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setMoviesData(data.results))
        

  setMoviesDataFiltered(moviesData && moviesData.filter(i => i.backdrop_path !== null && i.poster_path !== null))
console.log(moviesData, MoviesArray, moviesDataFiltered)
console.log(search)


}, [search])

React.useEffect(() => {
const load = async () => {
    const moviesArray = await apiConfig.getHomeList()
     setMoviesArray(moviesArray.slice(2,9))
     
}
load();
}, [])





    return (
        <>
        <div className="movies-opacity">
        <span>Movies</span>
        </div>
        <div className="movies-header" >
        </div>
        <div className="search-movie" >
        <form>
      <input
        type="text"
        id="search"
        name="search"
        value={search || ""}
        placeholder="search movie"
        onChange={(event) =>
            setSearch(event.target.value)
            
          }
        
      />
     
      </form>
      </div>
        
      <div className="movies-area">
         {moviesDataFiltered && moviesDataFiltered.length > 2 ?  moviesDataFiltered.map(item => (
                <div className="movies_img">                
                <Link to={`/details/${item.id}/movie`} >
                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} className="movies_posterPath"/>
                </Link>
                   <span style={{display: "block", margin: "auto", marginTop: "13px",
                 textAlign: "center", fontSize: "0.9rem", width: "90%", 
                 }}>{item.name || item.title}</span>
                 </div>
) 
 ) : 
 MoviesArray && MoviesArray.map(i => (
    i.items.results.map(item => (
        <div className="movies_img">                
        <Link to={`/details/${item.id}/${i.type}`} >
        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} className="movies_posterPath"/>
        </Link>
           <span style={{display: "block", margin: "auto", marginTop: "13px",
         textAlign: "center", fontSize: "0.9rem", width: "90%", 
         }}>{item.name || item.title}</span>
         </div>
 )) ))
 
 }
        </div> 
        </>
    )
}