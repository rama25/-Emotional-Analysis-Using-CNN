
import React from 'react';
import Container from 'react-bootstrap/Container';
import cyclePic from '../Figures/Emotions/video.mp4';

function ResultsScreen() {

    return (
        <Container className='myContainer' id='ResultsContainer'>
            <h1 className='orange'>Results</h1>
			<h3>Emotions</h3>
			<img src={cyclePic} alt="All of the emotions" className="emotionImage"></img>
			<p className="imageCaption">
				The above gif shows the output of our program at its current stage. 
			</p>
			
			<h3>Evaluation</h3>
			<p>At the current state our model achieved a testing accuracy of 55% on the FER-2013 data set. The level of accuracy is comparable to those reported previously for facial emotion recognition (Table 2).  The accuracy and loss plots for this model are shown in Figure 2. </p>
			
			<ul>
				<li>Improved mental health and wellbeing for individuals with CNS breakdown,</li>
				<li>Tailored treatment plans and interventions based on emotional states,</li>
				<li>Real-time emotion detection in clinical settings</li>
				<li>Lightweight and efficient architecture for use on mobile and embedded devices</li>
			</ul>
		
		</Container>

    );
}

export default ResultsScreen;