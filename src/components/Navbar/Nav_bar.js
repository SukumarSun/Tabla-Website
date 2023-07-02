import React,{useState} from "react";
import { Menulist } from "./MenuList";
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar=()=>{
    const [clicked,setClicked]=useState(false)
    const handleClick=()=>{
        setClicked(!clicked)
    }
  

    const menulist=Menulist.map(({url,title},index)=>{
        return (
            <li key={index}>
                <NavLink exact to={url}  activeClassName="active">{title}</NavLink>
            </li>
        )
    })
    return(
        <nav>
            <div className="logo">
          
            TABLA<font>Radiations</font>
           
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked?"fas fa-times":"fas fa-bars"}></i>
            </div>
            <ul className={clicked?"menu-list":"menu-list close"}>
                {menulist}
            </ul>
        </nav>
    )
    
}
export default Navbar