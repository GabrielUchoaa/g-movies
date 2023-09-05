import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../img/tmovie.png"


export default function Header() {
const [Window, setWindow] = React.useState(false)
const [OpenMenu, setOpenMenu] = React.useState(false)


    React.useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 10){
                setWindow(true);
             }else{ setWindow(false)}
            })
    }, [window.scrollY])

let headerColorChanger =  Window ? "rgba(254, 254, 254, 1)" : "transparent";
let header_LettersColorChanger = Window ? "grey" : "white";
let header_MenuColorChanger = Window ? {backgroundColor: "grey", padding: "0.2em"} : {backgroundColor: "white", padding: "0.1em"} 




let menu_style = {
     
    display: OpenMenu && "block",
    marginLeft: OpenMenu && "0px",
    right: OpenMenu && "0px",
      
} 

let menuopacity_style = { 
    display: OpenMenu && "block"
}


    return (
        <>
         <div className="header"  style={{backgroundColor: headerColorChanger}}>
            <div className="menu-opacity" style={menuopacity_style}></div>
         <div className="menu" style={menu_style}>
            <div className="menu-logo">
            <Link to="/" style={{textDecoration: "none"}}>
            <div className="header-logo" >
            <img src={logo} alt="" />
            <span style={{color: "black"}}>gMovies</span>
            </div>
            </Link>
           </div>
           <div className="Menu">
              <span className="menu-title">Menu</span>
              <div className="menu-icons">
              <Link to="/" style={{textDecoration: "none", color: "green"}}>
              <span>Home</span>
              </Link>
              <Link to="/movies" style={{textDecoration: "none", color: "green"}}>
              <span>Movies</span>
              </Link>
              <Link to="/series" style={{textDecoration: "none", color: "green"}}>
              <span>Tv Series</span>
              </Link>
              </div>
           </div>
           <div className="close" onClick={() => setOpenMenu(prev => !prev)}>Fechar</div>
         </div>
         <div className="Header" >
            <Link to="/" style={{textDecoration: "none"}}>
            <div className="header-logo" >
            
            <img src={logo} alt="" />
            
            <span style={{color: header_LettersColorChanger}}>gMovies</span>
            </div>
            </Link>
            <nav >
                <NavLink to="/" className={({isActive}) => isActive ? "nav-links activated" : "nav-links" }  style={{color: header_LettersColorChanger}} >Home</NavLink>
                <NavLink to="/movies" className={({isActive}) => isActive ? "nav-links activated" : "nav-links" } style={{color: header_LettersColorChanger}} 
                 >Movies</NavLink>
                <NavLink to="/series" className={({isActive}) => isActive ? "nav-links activated" : "nav-links" } style={{color: header_LettersColorChanger}}>Tv Series</NavLink>

            </nav>
            <div className="hamburger-menu" onClick={() => setOpenMenu(prev => !prev)} style={Window ? {height:"1.9em"} : {height: "1.6"}}>
                <div style={header_MenuColorChanger}></div>
                <div style={header_MenuColorChanger}></div>
                <div style={header_MenuColorChanger}></div>
                </div>
            </div>
        </div>
        
        </>
    )

  
}