
import React from 'react';
import Container from 'react-bootstrap/Container';
import silasPic from '../Figures/silas.jpg';

function WelcomeScreen() {

    return (

    <Container className='myContainer' id='WelcomeContainer'>
		<h1>Welcome to our website</h1>
		<h2>Meet the team:</h2>
		<div>
			<h3>Maria Elisa Montes Gonzalez</h3>
			<div className="welcomeSection">
				<p>
				 We can may be add our pictures and small intro :)
				</p>
			</div>
		</div>
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
		</div>
    </Container>

    );
}

export default WelcomeScreen;