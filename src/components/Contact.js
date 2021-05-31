import {IconButton}                    from '@material-ui/core';
import React                           from 'react';
import {Element}                       from 'react-scroll';
import {Facebook, Instagram, LinkedIn} from '@material-ui/icons';

export const Contact = () => {
	return (
		<Element name="contact">
			<div className="container">
				<div className="contact">
					<h1>Contact</h1>
					<div className="contact-continer">
						<p> Email: <span>ven2310@gmail.com</span></p>
						<p>Github Username:<span>https://github.com/happyvenky</span></p>
						<div className="contact-icon">
							<a href="#">
								<IconButton>
									<LinkedIn/>
								</IconButton>
							</a>
							<a href="#">
								<IconButton>
									<Instagram/>
								</IconButton>
							</a>

							<a href="#">
								<IconButton>
									<Facebook/>
								</IconButton>
							</a>

						</div>
					</div>
				</div>
			</div>
		</Element>
	);
};
