
import React from 'react';
import Container from 'react-bootstrap/Container';
import cnnPic from '../Figures/cnn_3.png';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function ImplementationScreen() {

    return (
        <Container className='myContainer' id='ImplementationContainer'>
            <h1 className='purple'>Implementation</h1>
			<p>Our current version of the model was trained with the images from the open dataset <a href = "https://www.kaggle.com/datasets/msambare/fer2013">FER-2013</a> available from Kaggle. This dataset consists of 35,874 48x48 grayscale images. The images in dataset vary in age, pose and occlusion (<a className = 'cite' href = "#Goodfellow_2015">Goodfellow et al., 2015</a>). The dataset was split into training and testing as indicated in Table 1.</p>

			<table className='center_table'>
				<tbody>
					<tr>
						<th>Emotion</th>
						<th className="rightAlign">Training</th>
						<th className="rightAlign">Testing</th>
					</tr>
					<tr>
						<td>Anger</td>
						<td className="rightAlign">3,980</td>
						<td className="rightAlign">960</td>
					</tr>
					<tr>
						<td>Disgust</td>
						<td className="rightAlign">436</td>
						<td className="rightAlign">111</td>
					</tr>
					<tr>
						<td>Fear</td>
						<td className="rightAlign">4,103</td>
						<td className="rightAlign">1,018</td>
					</tr>
					<tr>
						<td>Happy</td>
						<td className="rightAlign">7,164</td>
						<td className="rightAlign">1,825</td>
					</tr>
					<tr>
						<td>Neutral</td>
						<td className="rightAlign">4,982</td>
						<td className="rightAlign">1,216</td>
					</tr>
					<tr>
						<td>Sad</td>
						<td className="rightAlign">4,938</td>
						<td className="rightAlign">1,139</td>
					</tr>
					<tr>
						<td>Surprise</td>
						<td className="rightAlign">3,205</td>
						<td className="rightAlign">797</td>
					</tr>				
				</tbody>
			</table>
			<p className="imageCaption">Table 1: Facial emotion recognition training and testing datasets</p>
			
            <p>To perform emotional analysis using OpenCV, you can follow these steps:</p>
			<ul>
				<li>Detect faces in the image or video using the OpenCV face detection algorithm. This will identify the location of the face(s) in the image or video.</li>
				<li>Once you have detected the face(s), you can use OpenCV's facial landmark detection to identify the key points on the face, such as the corners of the eyes and the mouth.</li>
				<li>With the location of these facial landmarks, you can compute various features of the face, such as the distance between the eyebrows, the curvature of the lips, and the angle of the jaw.</li>
				<li>These features can then be used to classify the emotions of the person, such as happiness, sadness, or anger, using a machine learning model.</li>
			</ul>
			<p>There are various machine learning models available that can be used for emotional analysis, such as Support Vector Machines (SVM), Convolutional Neural Networks (CNN), and Recurrent Neural Networks (RNN). These models can be trained on labeled datasets of facial expressions to learn to recognize the different emotions.</p>

			<p>
			Data collection: The first step in implementing facial emotional analysis using MobileNetV2 is to collect a dataset of facial images labeled with emotional states. This dataset can be collected through a variety of means, such as asking patients to self-report their emotional states during therapy sessions or using cameras to capture facial expressions in real-time.
			Data pre-processing: Once the dataset is collected, it must be pre-processed to ensure that the images are properly formatted for input into MobileNetV2. This may involve resizing images, converting them to grayscale, or applying other image processing techniques.
			MobileNetV2 architecture: The MobileNetV2 architecture can be used for facial emotional analysis by retraining the final layer of the network to classify facial expressions into different emotional states. This involves replacing the last fully connected layer with a new layer that has seven output nodes, each representing one of the seven basic emotions.
			Model training: The MobileNetV2 model can be trained on the labeled dataset of facial images and emotional states using techniques such as backpropagation and gradient descent. The goal is to minimize the difference between the predicted emotional states and the actual emotional labels in the dataset.
			Real-time emotion detection: Once the MobileNetV2 model is trained, it can be used for real-time emotion detection in clinical settings. This may involve using cameras to capture facial expressions in real-time and using the MobileNetV2 model to classify the emotional state of the individual.
			</p>
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