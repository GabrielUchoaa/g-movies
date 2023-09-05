import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from "react-router-dom"

export default function MovieRow(props){

    return (
        <div className="swiper" style={{ marginTop: "5em"}}>
        {props.list && props.list.map(i => 
        (  
            
            <div className='slider-container'>
            <div className="top-slider"><span>{i.title}</span><a href="#">View All</a></div> 
            <Swiper
            spaceBetween={25}
            breakpoints={{
                1100:{
                slidesPerView:6,
                spaceBetween: 30
              },
              500:{
                slidesPerView:4,
              },
              0:{
                slidesPerView: 2,
                spaceBetween: 10,
              }}}
            className='Swiper' >
            
            {i.items.results.map(item => (
                 
                 <SwiperSlide className="swiperslide" key={item.id}>
                    <Link to={`/details/${item.id}/${i.type}`} >
                 <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} className="slide-img" />
                    </Link>
                    <span style={{display: "block", margin: "auto", marginTop: "13px",
                  textAlign: "center", fontSize: "0.9rem", width: "inherit", 
                  }}>{item.name || item.title}</span>
                 </SwiperSlide>
                 
                 
            ))}
            </Swiper>
            </div>
        ))}
        </div>
       
    )
}