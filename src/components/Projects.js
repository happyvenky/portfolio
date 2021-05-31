import React         from 'react';
import {Element}     from 'react-scroll';
import {ProjectList} from './ProjectList';

export const Projects = () => {

	const projects = [
		{
			img  : 'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg',
			title: 'Men cyberpunk',
			desc : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
			link : 'www.google.com'
		},
		{
			img  : 'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg',
			title: 'Men cyberpunk',
			desc : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
			link : 'www.google.com'
		},
		{
			img  : 'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg',
			title: 'Men cyberpunk',
			desc : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
			link : 'www.google.com'
		},
		{
			img  : 'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg',
			title: 'Men cyberpunk',
			desc : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
			link : 'www.google.com'
		},
		{
			img  : 'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg',
			title: 'Men cyberpunk',
			desc : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
			link : 'www.google.com'
		}
	];

	return (
		<Element name="projects" id="projects">
			<div className="container">
				<div  className="project-container">
					<h1>Projects</h1>
					<span>Here are some projects which i done for making lives  of people easy.</span>
					<div className="project-container-project">
						{
							projects.map((project, index) => {
								return (
									<ProjectList
										key={index}
										img={project.img}
										title={project.title}
										desc={project.desc}
										link={project.link}/>
								);
							})
						}

					</div>
				</div>
			</div>
		</Element>
	);
};
