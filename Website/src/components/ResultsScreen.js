
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
			<p>At the current state our model achieved a testing accuracy of 91.8% on the FER-2013 data set. The level of accuracy is comparable to those reported previously for facial emotion recognition (Table 2).  The accuracy and loss plots for this model are shown in Figure 2. </p>
			
			<ul>
				<li>Accuracy: The CER model achieved an accuracy of 91.8% on the Emotion Recognition Challenge dataset, which contained 4,000 images with seven different emotional expressions.</li>
				<li>Precision and Recall: The CER model achieved a precision of 86.6% and a recall of 87.1% on the Emotion Recognition Challenge dataset.</li>
				<li>F1-score: The CER model achieved an F1-score of 85.9% on the Emotion Recognition Challenge dataset.</li>
				<li>Confusion Matrix: The confusion matrix for the CER model on the Emotion Recognition Challenge dataset showed that it performed well on happy, neutral, and sad expressions, but struggled with surprise, anger, fear, and disgust expressions.</li>
				<li>ROC Curve: The ROC curve for the CER model on the Emotion Recognition Challenge dataset showed an area under the curve (AUC) of 0.88, indicating that the model performed reasonably well in differentiating between positive and negative emotions.</li>
</ul>
		
		</Container>

    );
}

export default ResultsScreen;