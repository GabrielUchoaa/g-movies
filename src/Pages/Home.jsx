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


 
try{ 
React.useEffect(  () => {
const loadall = async () => {  

let random = Math.floor(Math.random() * 8);
let Random = Math.floor(Math.random() * 20);
  

let tipo = null;
switch(random) {
  case  0:
 tipo = 'tv'
 break; 
 default:
 tipo = 'movie'
 break;

}



let list = await apiConfig.getHomeList(); 
let List = list.map(i => i.items.results.filter(i => 
  i.backdrop_path !== null && i.poster_path != null && i.overview.length > 50))
let originals = List[random][Random];  // filme ou série aleatório {}
let movieInfo = await apiConfig.getMovieInfo(originals.id, tipo)


console.log(list, List)



setChosenMovie(movieInfo);
setList(List);



}
loadall()
}, [])}
catch(error){
  console.log('eror' + error)
}


  return (
    <>
    
    {chosenMovie && chosenMovie.backdrop_path ? <Header/>  : ""} 
    {chosenMovie && chosenMovie.backdrop_path ? <FeaturedMovie chosenMovie={chosenMovie}  />  : ""} 
    {chosenMovie && chosenMovie.backdrop_path ? <MovieRow list={List}  />  : <div className='loadingIcon'><div className="dots-bars-4"></div></div>} 
    {chosenMovie && chosenMovie.backdrop_path ? <Footer/>  : ""} 
    
    </>
  )


}

export default Home
