import { Link } from "react-router-dom"

export default function FeturedMovie(props){

    return (
     <>
                <div className="opacity">
    </div>
    <div className="FeturedMovie" style={{
backgroundImage: `url(https://image.tmdb.org/t/p/original${props.chosenMovie.backdrop_path})`,
        backgroundSize: "cover"}} >

    
    </div>
    <div className="header-info">
    <div className="header-info-container">
    <div className="movie-info">
        <div className="mobile_movieInfo" style={{width: "100%", backgroundColor: "", padding:"1em 0", marginTop:"-1em"}}>
     <span >{props.chosenMovie.title || props.chosenMovie.name}</span>
     <div className="featuredM-overview">
        {props.chosenMovie.overview}</div>
     <div className="button">
        
        
        <Link to={`/details/${props.chosenMovie.id}/${props.chosenMovie.type}`} className="buttn">
        Watch now
        </Link>
        
        
        <Link to={`/details/${props.chosenMovie.id}/${props.chosenMovie.type}`} className="buttn">
        Watch trailer
        </Link>
    </div>
     </div>
     </div>
     
     <div className="movieImg" style={{
backgroundImage: `url(https://image.tmdb.org/t/p/original${props.chosenMovie.poster_path})`,
backgroundSize: "cover"}}></div>
     </div>
     </div>

            </>
    )


} 