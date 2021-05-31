import React from 'react'
import {Element,Link} from 'react-scroll'

export const Banner = () => {
    return (
        <Element name="about" className="top-container">
            <div class="top-content">
                <h1>Hi, I,am venky</h1>
                <p>Frontend developer</p>
                <div>high level expricence in web design and development knowledge, producting quality work.</div>
                <Link to="project" smooth="true" duration={500}>
                    <button className="fill">My Work</button>
                </Link>
                <Link to="contact" smooth="true" duration={500}>
                    <button className="line">Contact</button>
                </Link>
            </div>
        </Element>
    )
}
