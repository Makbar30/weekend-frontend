import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/fontawesome-svg-core'

export default function DefaultFooter(){
    return(
       
            <footer className="footer">
                <ul>
                    <li><a href="https://linkedin.com/in/mhmmdakbr" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","linkedin"]}/></a></li>
                    <li><a href="https://github.com/makbar30" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","github"]}/></a></li>
                </ul>
            </footer>
    )
}


