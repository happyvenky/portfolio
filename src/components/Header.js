import React from 'react'
import {Link} from "react-scroll"

export const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <h1>
                    Develop<span>er</span>
                </h1>
            </div>
            <div className="header-right">
                <Link to="about" smooth="true" duration={500}>
                    <h4>About</h4>
                </Link>
                <Link to="skills" smooth="true" duration={500}>
                    <h4>Skills</h4>
                </Link>
                <Link to="projects" smooth="true" duration={500}>
                    <h4>Projects</h4>
                </Link>
                <Link to="exp" smooth="true" duration={500}>
                    <h4>Exprience</h4>
                </Link>
                <Link to="contact" smooth="true" duration={500}>
                    <h4>Contact</h4>
                </Link>
                <h4>icons</h4>
            </div>
        </div>
    )
}
