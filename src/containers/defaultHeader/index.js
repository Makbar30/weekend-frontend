import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DefaultHeader() {

    const[isShow, setShow] = useState(false)

    const cssClasses = [
        "nav-menu",
        isShow? "nav-hide" : ""
      ];

    const onClick = () => {
      setShow(!isShow)
    }

    return (
        <header className="header">
            <nav>
                <h1 id="title">Bar.e</h1>
                <ul className={cssClasses.join(" ")}>
                    <li><NavLink to="/dashboard" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/works" activeClassName="active">My Works</NavLink></li>
                    {/* <li><NavLink to="/contact" className="btn-contact" activeClassName="btn-active">Contact</NavLink></li> */}
                </ul>
                <button onClick={onClick}><FontAwesomeIcon icon={["fas", "bars"]} /></button>
            </nav>
        </header>

    )
}