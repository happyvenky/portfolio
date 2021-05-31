import React from 'react'
import {Element} from 'react-scroll'
import LinearProgress from '@material-ui/core/LinearProgress'

export const Skills = () => {
    return (
        <Element id="skills">
            <div className="container skill-container">
                <div className="skill-warpper">
                    <div className="skill-img">
                        <img src="https://mocah.org/uploads/posts/551269-apple-computer.jpg" alt="" />
                    </div>
                    <div className="skill-content">
                        <div>
                        <h2>Skill Set</h2>
                        <div className="skill-sets">
                            <h5>React</h5>
                            <div className="skill-slider skill-slider1">
                                <LinearProgress variant="determinate" value={60}></LinearProgress>
                            </div>
                        </div>
                        <div className="skill-sets">
                            <h5>HTML</h5>
                            <div className="skill-slider skill-slider2">
                                <LinearProgress variant="determinate" value={90}></LinearProgress>
                            </div>
                        </div>
                        <div className="skill-sets">
                            <h5>CSS & ScSS</h5>
                            <div className="skill-slider skill-slider3">
                                <LinearProgress variant="determinate" value={80}></LinearProgress>
                            </div>
                        </div>
                        <div className="skill-sets">
                            <h5>JS</h5>
                            <div className="skill-slider skill-slider4">
                                <LinearProgress variant="determinate" value={70}></LinearProgress>
                            </div>
                        </div>
                        <div className="skill-sets">
                            <h5>Angular</h5>
                            <div className="skill-slider skill-slider5">
                                <LinearProgress variant="determinate" value={50}></LinearProgress>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
