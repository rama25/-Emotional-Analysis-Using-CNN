
import React from 'react';
import Container from 'react-bootstrap/Container';
import silasPic from '../Figures/silas.jpg';
import mariaPic from '../Figures/maria.png';

function WelcomeScreen() {

    return (

    <Container className='myContainer' id='WelcomeContainer'>
		<h1 className='green'>Welcome to our website</h1>
		<h2>Meet the team:</h2>
		<div>
			<h3>Ramapriya Ranganath</h3>
			<div className="welcomeSection">
				<p>
				 We can may be add our pictures and small intro :)
				</p>
			</div>
		</div>
		<div>
			<h3>Silas Morris</h3>
			<div className="welcomeSection">
				<img src={silasPic} alt="Picture of Silas" className="welcomeImage"></img>
				<p>
				 I'm a second year CS Masters student at UW and I'm hoping to graduate in May 2023. I moved to Madison in the summer of 2016 from Conroe, Texas and I'm currently working as a software developer at Epic.
				</p>
			</div>
			<h3>Maria Elisa Montes</h3>
			<div className="welcomeSection">
			<img src={mariaPic} alt="Picture of Maria" className="welcomeImage"></img>
				<p>
				 Hi my name is Maria. I grew up in Guanajuato, Mexico where I got my bachelors in Agronomy Engineering. Last January I came to Madison to start a PhD. in Animal Sciences focusing on precision livestock farming, specifically with dairy cows. In my free time I dance ballet and train gymnastics.
				</p>
			</div>
		</div>
    </Container>

    );
}

export default WelcomeScreen;