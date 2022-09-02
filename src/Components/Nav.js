import React from 'react';
import { Link } from "react-scroll";
import './Nav.css'

export default function Nav() {
    return (
        <nav>

            <ul>

                <li><Link to='Home' smooth={true} duration={600}>Home</Link></li>
                <li><Link to='About' smooth={true} duration={600}>About</Link></li>
                <li><Link to='Projects' smooth={true} duration={600}>Projects</Link></li>
                {/* <li>Resume</li> */}
                <li><Link to='Contact' smooth={true} duration={600}>Contact</Link></li>
            </ul>
        </nav >
    )
}

