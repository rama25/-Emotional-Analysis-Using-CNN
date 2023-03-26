
import React from 'react';
import Container from 'react-bootstrap/Container';
import cnnPic from '../Figures/cnn_3.png';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


function ImplementationScreen() {

    return (
        <Container className='myContainer' id='ImplementationContainer'>
            <h1 className='purple'>Implementation</h1>
            <p>Our implementation was great because...</p>
            <h3>CNN Architecture</h3>
			<div className="largeImageSection">
				<Zoom>
					<img src={cnnPic} alt="CNN Architecture" width={800}></img>
				</Zoom>
				<p className="imageCaption">
					 This is a diagram that illustrated the architecture of our cnn model. Click to Zoom.
				</p>
			</div>




        </Container>

    );
}

export default ImplementationScreen;