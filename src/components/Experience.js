import React     from 'react';
import {Element} from 'react-scroll';

export const Experience = () => {
	return (
		<Element id="exp">
			<div className="container">
				<div className="experience">
					<h1>Experience</h1>
					<div className="experience-info">
						<div className="experience-box">
							<h5>10+</h5>
							<span>Client</span>
						</div>
						<div className="experience-box">
							<h5>20+</h5>
							<span>Projects</span>
						</div>
						<div className="experience-box active">
							<h5>5+</h5>
							<span>Years Working</span>
						</div>
						<div className="experience-box">
							<h5>10+</h5>
							<span>Client</span>
						</div>
					</div>
				</div>
			</div>

		</Element>
	);
};
