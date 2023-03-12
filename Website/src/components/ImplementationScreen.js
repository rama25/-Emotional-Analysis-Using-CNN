
import React from 'react';
import Container from 'react-bootstrap/Container';
import cnnPic from '../Figures/cnn_3.png';



function ImplementationScreen() {

    return (
        <Container className='myContainer' id='ImplementationContainer'>
            <h1 className='purple'>Implementation</h1>
            <p>Our implementation was great because...</p>
            <h3>CNN Architecture</h3>
			<div className="welcomeSection">
			<img src={cnnPic} alt="CNN Architecture" width={800}></img>
				<p>
				 This is a diagram that illustrated the architecture of our cnn model. 
				</p>
			</div>




        </Container>

    );
}

export default ImplementationScreen;