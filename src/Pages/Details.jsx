import { useParams } from "react-router-dom"
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from "react-router-dom"



export default function Details(){
let movieId = useParams();
let tipo = useParams();
const [info, setInfo] = React.useState() 
const [videos, setVideos] = React.useState() 
const [credits, setCredits] = React.useState()
const [similar, setSimilar] = React.useState() 
const [similarFiltered, setSimilarFiltered] = React.useState() 




React.useEffect(()=> {

    
    
    fetch(`https://api.themoviedb.org/3/${tipo.tipo === "tv" ? "tv" : "movie"}/${movieId.id}?language=pt-BR&api_key=62289db5e694f4a5c9a3617062741344`)
    .then(res => res.json())
    .then(data => setInfo(data))

    fetch(`https://api.themoviedb.org/3/${tipo.tipo === "tv" ? "tv" : "movie"}/${movieId.id}/credits?language=pt-BR&api_key=62289db5e694f4a5c9a3617062741344`)
    .then(res => res.json())
    .then(data => setCredits(data))

    fetch(`https://api.themoviedb.org/3/${tipo.tipo === "tv" ? "tv" : "movie"}/${movieId.id}/videos?language=pt-BR&api_key=62289db5e694f4a5c9a3617062741344`)
    .then(res => res.json())
    .then(data => setVideos(data))

    fetch(`https://api.themoviedb.org/3/${tipo.tipo === "tv" ? "tv" : "movie"}/${movieId.id}/similar?language=pt-BR&api_key=62289db5e694f4a5c9a3617062741344`)
    .then(res => res.json())
    .then(data => setSimilar(data))
    
    
}, [])

React.useEffect(() => {
    setSimilarFiltered(similar && similar.results.filter(i => i.backdrop_path !== null && i.poster_path !== null ))

}, [similar])

console.log(similarFiltered)


     return (
        <>
    <div className="opacity">
        <div className="details">
            <div className="details-posterPath" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${info && info.poster_path})`,
                backgroundSize: "cover"}}></div>
                <div className="details-info">
                <span className="details-name">{info ? info.name || info.title : ""}</span>
                <div className="details-genre">
                {info && info.genres.map(i => (
                        <span>{i.name}</span>
                ))}
                </div>
                <span className="detailsOverview">
                {info && info.overview}</span>
                <div className="details-topCasts">
                    <span>Top Casts</span>
                    <div className="cast-area">
                    {credits && credits.cast.length > 0 ?
                        <>
                        <div className="topcasts">
                        <img src={`https://image.tmdb.org/t/p/original${credits.cast[0] &&  credits.cast[0].profile_path }`} alt="" />
                        <div style={{textAlign: "center"}}>{credits.cast[0] && credits.cast[0].name}</div>
                        </div>
                        <div className="topcasts">
                        <img src={`https://image.tmdb.org/t/p/original${credits.cast[1] && credits.cast[1].profile_path}`} alt="" />
                        <div style={{textAlign: "center"}}>{credits.cast[1] && credits.cast[1].name}</div>
                        </div>
                        <div className="topcasts">
                        <img src={`https://image.tmdb.org/t/p/original${credits.cast[2] && credits.cast[2].profile_path}`} alt="" />
                        <div style={{textAlign: "center"}}>{credits.cast[2] && credits.cast[2].name}</div>
                        </div>
                        </>
                        : ""}
                    </div>
                </div>   
                </div> 
        </div>
    </div>
    <div className="FeturedMovie" style={{
backgroundImage: `url(https://image.tmdb.org/t/p/original${info && info.backdrop_path})`,
        backgroundSize: "cover"}} >
    </div>
    <div className="header-info">
    <div style={{width: "80%", display: "flex"}}></div>
    </div>
    <div className="videos-area">
        {videos && videos.results.length > 0 ? videos.results.map(i => (
        
        <div className="videos">
         <span>{i.name}</span>
         <iframe controls 
         src={`https://www.youtube.com/embed/${videos && i.key}`}>
         </iframe>
         </div>
        )) : 
        <span>Trailers não disponíveis</span>}
     </div>
     <div className="similar">
     <div className="similar-span"><span>Similar</span></div>
     <div className="swiper" style={{ marginTop: "em"}}>  
            <div className='slider-container'>
            <Swiper
            spaceBetween={25}
            slidesPerView={5}
            breakpoints={{
                1100:{
                slidesPerView:6.5,
                spaceBetween: 40
              },
              500:{
                slidesPerView:4.5,
              },
              0:{
                slidesPerView: 1.5,
                spaceBetween: 10,
              }}}
            className='Swiper' >
            
            {similarFiltered && similarFiltered.map(item => (
                 
                 <SwiperSlide className="swiperslide" key={item.id}>
                    
                    <Link to={`/details/${item.id}/${item.type}`} reloadDocument>
                 <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} className="slide-img" />
                    </Link>
                    
                    <span style={{display: "block", margin: "auto", marginTop: "13px",
                  textAlign: "center", fontSize: "0.9rem", width: "inherit", 
                  }}>{item.name || item.title}</span>
                 </SwiperSlide>
                 
                 
            ))}
            </Swiper>
            </div>
        
        </div>


     </div>
        </>
     )
}

export let movieId;