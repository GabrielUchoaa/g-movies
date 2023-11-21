import React from "react"
const API_KEY = '62289db5e694f4a5c9a3617062741344'
import apiConfig from "../api/apiConfig.js"
import { Link } from "react-router-dom"

export default function Series(){

    const [SeriesArray, setSeriesArray] = React.useState()
    const [search, setSearch] = React.useState()
    const [seriesData, setSeriesData] = React.useState()
    const [seriesDataFiltered, setSeriesDataFiltered] = React.useState()

    
    
    React.useEffect(() => {
            fetch(`https://api.themoviedb.org/3/search/tv?query=${search}&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setSeriesData(data.results))
            

    setSeriesDataFiltered(seriesData && seriesData.filter(i => i.backdrop_path !== null && i.poster_path !== null))        
    console.log(seriesData, SeriesArray, seriesDataFiltered)
    console.log(search)
    
    
    }, [search])
    
    React.useEffect(() => {
    const load = async () => {
        const seriesArray = await apiConfig.getHomeList()
         setSeriesArray(seriesArray.slice(0, 2))
         
    }
    load();
    }, [])





    return (
        <>
        <div className="movies-opacity">
        <span>Series</span>
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
        placeholder="search series"
        onChange={(event) =>
            setSearch(event.target.value)
            }
        />
      </form>
      </div>
      <div className="movies-area">
         {seriesDataFiltered && seriesDataFiltered.length > 2 ?  seriesDataFiltered.map(item => (
                <div className="movies_img">                
                <Link to={`/details/${item.id}/tv`} >
                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} className="movies_posterPath"/>
                </Link>
                   <span style={{display: "block", margin: "auto", marginTop: "13px",
                 textAlign: "center", fontSize: "0.9rem", width: "90%", 
                 }}>{item.name || item.title}</span>
                 </div>
) 
 ) : 
 SeriesArray && SeriesArray.map(i => (
    i.items.results.map(item => (
        <div className="movies_img">                
        <Link to={`/details/${item.id}/tv`} >
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