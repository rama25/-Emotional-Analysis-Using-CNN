
import React from 'react';
import Container from 'react-bootstrap/Container';
import cnnPic from '../Figures/cnn_3.png';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function ImplementationScreen() {

    return (
        <Container className='myContainer' id='ImplementationContainer'>
            <h1 className='purple'>Implementation</h1>
			<p>Our current version of the model was trained with the images from the open dataset FER-2013 available from Kaggle. This dataset consists of 35,874 48x48 grayscale images. The images in dataset vary in age, pose and occlusion (Goodfellow et al., 2015). The dataset was split into training and testing as indicated in Table 1.</p>

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

			<p>Convolutional Neural Networks (CNN) are commonly used for image classification tasks, and they can be applied to emotional analysis by treating facial expressions as images. CNNs can learn to extract meaningful features from the raw pixels of an image, which can be useful for detecting complex emotional expressions.</p>
			<p>Support Vector Machines (SVM) are a popular algorithm for classification tasks and can also be used for emotional analysis. SVMs work by finding the hyperplane that maximally separates the different classes in the feature space, which can be useful for detecting more simple emotional expressions.</p>
			<p>The choice of the model depends on the complexity of the task and the available dataset. For example, if the dataset contains a large number of complex facial expressions, a CNN may be better suited for the task. If the dataset contains simple expressions, such as smiling or frowning, an SVM may be sufficient.</p>
			<p>Additionally, different models may require different preprocessing steps, such as data normalization or feature scaling. It's important to carefully evaluate the performance of different models and preprocessing steps to choose the best approach for the specific task at hand.</p>
			<h3>We have selected CNN for our project</h3>
			<p>Convolutional Neural Networks (CNNs) are a type of neural network that is particularly well-suited for image recognition and computer vision tasks. CNNs are inspired by the structure of the human visual cortex, which processes information in a hierarchical manner. CNNs use a series of convolutional layers to extract features from an input image, followed by one or more fully connected layers to perform the classification task. The convolutional layers use a set of filters, also known as kernels or weights, to scan the image and detect patterns such as edges, corners, and shapes. Pooling layers are often used to reduce the size of the feature maps and introduce some translation invariance to the network. CNNs have achieved state-of-the-art results in a variety of image recognition tasks, including object detection, face recognition, and image segmentation. They have also been successfully applied to other domains, such as natural language processing and speech recognition, by using different types of convolutions and pooling operations.</p>
            
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