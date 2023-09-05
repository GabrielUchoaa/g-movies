import logo from "../img/tmovie.png"
import footer_poster from "../img/3988284.jpg"
import { Link } from "react-router-dom"


export default function Footer(){
    return (
        <>
    <div className="Footer">
    <Link to="/" style={{textDecoration: "none"}}>
        <div style={{
         width: "100%", display: "flex", justifyContent: "center", alignItems: "center",
         fontSize: "1.2rem", fontWeight: "500", marginTop: "1em", cursor: "pointer",
         backgroundImage: ``
         }}>
        <img src={logo} alt=""  style={{height:"2.3em"}}/>
        <span style={{color: "white", marginLeft: "1rem"}}>gMovies</span>
        </div>
    </Link> 

    
    <div className="footer-content">
      <div><span>Home</span><span>Contact us</span><span>Terms Of Services</span><span>About Us</span></div>
      <div><span>Live</span><span>FAQ</span><span>Premium</span><span>Private Policy</span></div>
      <div><span>You Must Watch</span><span>Recent Release</span><span>Top IMDB</span></div>
    </div>
    </div>
      <div className="footer" style={{backgroundImage: `url("${footer_poster}")`}}>
      </div>
    </>
    )
}