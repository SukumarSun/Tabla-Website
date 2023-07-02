import React  from "react";
import {Link} from 'react-router-dom'
import './Home.css';
// import '../App.css'

const Home=()=>{
  
    return(
        <div className="home-out">
      
                <div className="intro">
                    <div className="intro-inside">
                    <h1>Are you planning to start your Journey with Tabla?</h1>
                    <br/>
                   
                    <p>Well, you have arrived at the right place!!</p>
                    </div>
                   
                </div>               
            <div className="bottom">
            <div className="whats">
                <Link className="tabla-link" to="/what">
                     What is Tabla?                            
                </Link>
                       
             </div>
             <div className="whats">
                <Link className="tabla-link" to="/what">
                     How to Play Tabla?                            
                </Link>
                       
             </div>
            </div>
             
        </div>
   
    )
}
export default Home