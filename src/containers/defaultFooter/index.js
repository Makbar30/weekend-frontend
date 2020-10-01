import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/fontawesome-svg-core'

export default function DefaultFooter(){
    return(
        <footer className="footer">
            <div className="container">
                <ul>
                    <li><FontAwesomeIcon icon={["fab","linkedin"]}/></li>
                    <li><FontAwesomeIcon icon={["fab","github"]}/></li>
                </ul>
            </div>
        </footer>
    )
}


