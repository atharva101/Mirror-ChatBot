import React from "react";
import amber from '../../assets/amber.png'
import './header.styles.css'
export const Header = ({user})=>{

    return(
        <div className = "header-container">
           <div className="item" id="item-1">
               <img src={amber} alt="" style={{height:120}} />
           </div>
           <div className="item" id="item-2">
               <p> Hi! I'm Amber</p>
           </div>
        </div>
    )
}