import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowDimensions from '../../components/WindowSize'

export default function DefaultHeader() {
    const { width } = useWindowDimensions();
    const[isShow, setShow] = useState(false)

    const cssClasses = [
        "nav-menu",
        isShow? "nav-hide" : ""
      ];

    const onClick = () => {
      setShow(!isShow)
    }

    const mobileNavClick = () =>{
        console.log(width)
        if(width <= 460){
            return setShow(!isShow)
        }
        return true
    }

    return (
        <header className="header">
            <nav>
                <h1 id="title">Bar.e</h1>
                <ul className={cssClasses.join(" ")}>
                    <li><NavLink onClick={mobileNavClick} to="/dashboard" activeClassName="active">Home</NavLink></li>
                    <li><NavLink onClick={mobileNavClick} to="/works" activeClassName="active">My Works</NavLink></li>
                    {/* <li><NavLink to="/contact" className="btn-contact" activeClassName="btn-active">Contact</NavLink></li> */}
                </ul>
                <button onClick={onClick}><FontAwesomeIcon icon={["fas", "bars"]} /></button>
            </nav>
        </header>

    )
}