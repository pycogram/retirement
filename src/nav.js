import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar( props ){

    const justImg = props.logo1;

    let [ isMenuActive, setMenuActive ] = useState(false);
    const [menuButton, setMenuButton] = useState("menuBtn");
    const [menuOption, setMenuOption] = useState("menuOptionInactive");

    const MenuActive = () => {
        if(!isMenuActive){
            setMenuButton("menuBtn menuBtnActive");
            setMenuOption("nav menuOptionActive")
        } else {
            setMenuButton("menuBtn");
            setMenuOption("menuOptionInactive")
        }
        setMenuActive(!isMenuActive);
    }
    const closeOption = () => {
        if(!isMenuActive){
            setMenuButton("menuBtn menuBtnActive");
            setMenuOption("nav menuOptionActive")
        } else {
            setMenuButton("menuBtn");
            setMenuOption("menuOptionInactive")
        }
        setMenuActive(!isMenuActive);
    }
    return(
        <nav className="navBar">
            <span>
               <img src={justImg} alt="Logo"></img> 
            </span>
            <ul className={menuOption}>
                <Link to={"/home"} onClick={() => closeOption()} ><li><h3>Home</h3></li></Link>
                <Link to={"/retire"} onClick={() => closeOption()}><li><h3>Retirement</h3></li></Link> 
            </ul>
            <button><a href="https://raydium.io/swap/?inputMint=sol&outputMint=Be78Ld3SpYMif5YgxM4ipJx2eGSDcAaaCkHUzcV5pump" target="_blank">Buy</a></button>
            <span className={menuButton}  onClick={() => MenuActive()}></span>
        </nav>
    )
}           