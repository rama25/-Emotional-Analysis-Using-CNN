
import React from 'react';
import Container from 'react-bootstrap/Container';
import cnnPic from '../Figures/cnn_3.png';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import happyPic from '../Figures/Emotions/happy.png';
import surprisePic from '../Figures/Emotions/surprise.png';
import sadPic from '../Figures/Emotions/sad.png';
import angryPic from '../Figures/Emotions/angry.png';
import fearPic from '../Figures/Emotions/fear.png';
import neutralPic from '../Figures/Emotions/neutral.png';

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
			<h3>Emotions</h3>
			<table>
				<tbody>
					<tr>
						<th>Image</th>
						<th className='cellFullWidth'>Emotion</th>
					</tr>
					<tr>
						<td><img src={happyPic} alt="Happiness" className="emotionImage"></img></td>
						<td>Happy</td>
					</tr>
					<tr>
						<td><img src={surprisePic} alt="Surprise" className="emotionImage"></img></td>
						<td>Surprise</td>
					</tr>
					<tr>
						<td><img src={angryPic} alt="Angry" className="emotionImage"></img></td>
						<td>Anger</td>
					</tr>
					<tr>
						<td><img src={sadPic} alt="Sadness" className="emotionImage"></img></td>
						<td>Sad</td>
					</tr>
					<tr>
						<td><img src={fearPic} alt="Fear" className="emotionImage"></img></td>
						<td>Fear</td>
					</tr>
					<tr>
						<td></td>
						<td>Disgust</td>
					</tr>
					<tr>
						<td><img src={neutralPic} alt="Neutral" className="emotionImage"></img></td>
						<td>Neutral</td>
					</tr>
				</tbody>
			</table>




        </Container>

    );
}

export default ImplementationScreen;