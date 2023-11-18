import '../App.css'
import MovieRow from "../components/MovieRow"
import apiConfig from "../api/apiConfig.js"
import FeaturedMovie from '../components/FeaturedMovie'
import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'

export function loader(){
  return apiConfig.getHomeList()
}

function Home() {
 const [chosenMovie, setChosenMovie] = React.useState([]);
 const [List, setList] = React.useState();
 const [listFiltered, setListFiltered] = React.useState();
 

React.useEffect(  () => {
const loadall = async () => {  

let random = Math.floor(Math.random() * 8);
let Random = Math.floor(Math.random() * 10);
  

let tipo = null;
switch(random) {
  case  0:
 tipo = 'tv'
 break; 
 default:
 tipo = 'movie'
 break;

}



let list = await apiConfig.getHomeList(); // [8 aquela lista ] 

let FeaturedList = [
  list[2].items.results[18], 
  list[3].items.results[0], 
  list[3].items.results[1],
  list[5].items.results[0],
  list[0].items.results[6],
  list[0].items.results[7],
  list[2].items.results[7],
  list[5].items.results[1],
  list[5].items.results[4],
  list[5].items.results[10]
  ]

let listFiltered = list[0].items.results
/*
list.map(i => i.items.results.filter(i => 
  i.backdrop_path !== null && i.poster_path != null && i.overview.length > 180))
*/

let originals = listFiltered[Random];  // filme ou série aleatório {}
let movieInfo = await apiConfig.getMovieInfo(originals.id, tipo)




setChosenMovie(originals);
setList(list);




  console.log(movieInfo, listFiltered, list[0].items.results[0], FeaturedList )







}
loadall()
}, [])





  return (
    <>
    
    {chosenMovie.backdrop_path ? <Header/>  : ""} 
    {chosenMovie.backdrop_path ? <FeaturedMovie chosenMovie={chosenMovie} list={listFiltered}/>  : ""} 
    {chosenMovie.backdrop_path ? <MovieRow list={List}  />  : <div className='loadingIcon'><div className="dots-bars-4"></div></div>} 
    {chosenMovie.backdrop_path ? <Footer/>  : ""} 
    
    </>
  )


}

export default Home
