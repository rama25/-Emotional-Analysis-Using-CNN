
import React from 'react';
import Container from 'react-bootstrap/Container';
import silasPic from '../Figures/silas.jpg';
import ramaPic from '../Figures/rama.jpg';

function WelcomeScreen() {

    return (

    <Container className='myContainer' id='WelcomeContainer'>
		<h1 className='green'>Welcome to our website</h1>
		<h2>Meet the team:</h2>
		<div>
			<h3>Ramapriya Ranganath</h3>
			<div className="welcomeSection">
				<img src={ramaPic} alt="Picture of Rama" className="welcomeImage"></img>
				<p>
				I am Ramapriya master's student from UW Madison CS Department.
				Before joining here, I was working in Microsoft Research India.
				My areas of interest are ML, systems and HCI.
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
		</div>
    </Container>

    );
}

export default WelcomeScreen;