import React from 'react';
import { NavLink } from 'react-router-dom'
export default function defaultHeader() {
    return (
        <header className="header">
            <nav>
                <h1 id="title">Bar.e</h1>
                <ul>
                    <li><NavLink to="/dashboard" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/works" activeClassName="active">My Works</NavLink></li>
                    {/* <li><NavLink to="/contact" className="btn-contact" activeClassName="btn-active">Contact</NavLink></li> */}
                </ul>
            </nav>
        </header>

    )
}