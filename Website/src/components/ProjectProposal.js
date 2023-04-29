import React from 'react';
import Container from 'react-bootstrap/Container';


function ProjectProposal() {

    return (

    <Container className='myContainer pinkContainer' id='PPContainer'>
		<h1 className='pink'>Project proposal</h1>
		<h2>Problem and Relevance</h2>
		<p>
			Emotional Analysis is an important cross platform field which is useful in various domains such as:
		</p>
		<ul>
			<li>Understanding human behavior: Emotions play a significant role in human behavior and decision making. 
				Understanding how people react to different situations and stimuli, can be useful in fields such as psychology, sociology etc.</li>
			<li>Mental health diagnosis: Emotional analysis using OpenCV can also be useful in diagnosing mental health disorders such as depression and anxiety. 
				Changes in facial expressions can be a sign of mental health problems, and detecting these changes early can lead to earlier diagnosis and better treatment outcomes.</li>
			<li>Human-computer interaction: Emotional analysis using OpenCV can also be useful in human-computer interaction. 
				By detecting the emotions of the user, the computer can adjust its behavior and responses to better suit the user's needs and emotions. 
				This can lead to more personalized and effective interactions with technology.</li>
			<li>Security and surveillance: Emotional analysis using OpenCV can also be useful in security and surveillance applications. 
				By detecting suspicious behavior and emotions, security personnel can take appropriate action to prevent potential threats.</li>
		</ul>
		<p>In our project we have selected Security and Surveillance field</p>
		<p>
			Emotion recognition systems identify features in verbal and non-verbal communication to identify and quantify the emotions expressed (<a className = 'cite' href = "#fragopanagos_2005">Fragopanagos & Taylor, 2005</a>; <a className = 'cite' href = "#zhao_2020">Zhao et al., 2020</a>). 
			Data on users' emotional reactions when interacting with online applications is valuable for a wide range of fields education, healthcare, customer service, 
			entertainment (<a className = 'cite' href = "#fragopanagos_2005">Fragopanagos & Taylor, 2005</a>), and criminology (<a className = 'cite' href = "#podoletz_2022">Podoletz, 2022</a>). 
			The main signals in emotion analysis are facial expressions, speech, arm gestures, language, and physiological patterns (<a className = 'cite' href = "#zhao_2020">Zhao et al., 2020</a>). 
			Emotion recognition from facial expressions involves computer vision, machine learning, and deep learning algorithms. </p>
			<p>Automated customer service (<a className = 'cite' href = "#zendesk_2022">Zendesk, 2022</a>), hybrid work (<a className = 'cite' href = "#accenture_2021">Accenture, 2021</a>), 
			and distance learning (<a className = 'cite' href = "#venable_2022">Venable, 2022</a>) are becoming more common, raising the need for natural and personalized interactions with computers. 
		</p>

		<h2>State of the Art</h2>
		<p>
		In the context of online applications, the output must be accurate, real-time, and computationally efficient (<a className = 'cite' href = "#hossain_2017">Hossain & Muhammad, 2017</a>). 
		Models that analyze images or complete video sequences do not provide an immediate output, therefore, are not suitable for online applications (<a className = 'cite' href = "#hossain_2017">Hossain & Muhammad, 2017</a>). 
		Although different frameworks have been proposed, identifying emotions from facial expressions commonly involves face detection, feature extraction, and facial expression classification. 
		In the case of video, dynamic features are extracted using temporal segmentation (<a className = 'cite' href = "#suk_0214">Suk & Prabhakaran, 2014</a>). 
		</p>
		<p>
		Deep learning methods, such as CNNs, can learn directly from the image, outperforming methods that rely on handcrafted feature extraction (<a className = 'cite' href = "#Kahou_2015">Kahou et al., 2015</a>). 
		Because emotions are dynamic RNN (<a className = 'cite' href = "#Kahou_2015">Kahou et al., 2015</a>) and LSTM (<a className = 'cite' href = "#Hassouneh_2020">Hassouneh et al., 2020</a>) have been implemented do consider also spatiotemporal information captured in video. 
		However, deep-learning methods require more computational power and memory (<a className = 'cite' href = "#Ko_2018">Ko, 2018</a>). To be accurate deep-learning approaches require large amounts of learning data. 
		Open data sets for facial emotion recognition are available. Some examples are CK +, FER-2013, Affectnet, and DISFA. 
		These data sets differ in collection method, type of media, number of images or video clips, emotion categories, number of individuals, and diversity (<a className = 'cite' href = "#Ko_2018">Ko, 2018</a>). 
		Combined emotions and interclass variability (<a className = 'cite' href = "#Kahou_2015">Kahou et al., 2015</a>) are challenges when training models with these type of datasets).
		</p>
		
		<h2>Motivation and Approach</h2>
		<p>
			Emotional analysis involves detecting and analyzing human emotions from visual cues such as facial expressions, body language, and voice tone. 
			In the context of crime detection, it can be used to identify individuals who may be involved in a crime, either as perpetrators or witnesses. 
			Security cameras can be equipped with facial recognition and emotional analysis capabilities to detect and track individuals who exhibit suspicious emotions, 
			such as fear, anger, or anxiety. These emotions may be indicative of criminal or terrorist activity, and detecting them early can allow security personnel to 
			respond quickly and prevent potential threats.  Additionally, emotional analysis can also be used to detect and prevent insider threats, such as employees who 
			may be planning to steal or leak sensitive information. By monitoring the emotions of employees, such as stress or anxiety, security personnel can identify 
			individuals who may be experiencing personal or professional issues that could lead to security breaches. Emotional analysis using OpenCV in the security 
			and surveillance field can provide an additional layer of security and help prevent potential threats. However, it is important to note that emotional 
			analysis should not be the sole basis for making security decisions and should be used in conjunction with other security measures, such as physical 
			security and access control. We do have the support from Skokie Police Department who want this to be implemented on a large scale.
		</p>
		<p>
			Emotional analysis can help identify such individuals and provide valuable clues to law enforcement officials. 
			However, it is important to ensure that the emotional analysis system is accurate and reliable, and that it does not violate the privacy or rights of individuals who are being monitored. 
		</p>
		<p>
			Because this project is presented in a web format, we were motivated to focus on emotion analysis for online applications. 
			Our goal is that instructors and anyone that visits our website can interact with our project. Our objective is to develop a 
			program that identifies emotion in real-time video captured through a webcam. We are using an open-source data set to train a deep learning model.  
			The model uses a cascaded classifier to detect faces in the video frames. The grayscale face region is then passed through the trained model,
			which classifies facial expressions as anger, disgust, fear, happiness, sadness, surprise, or neutral. This is an already existing framework for 
			emotion recognition which allows us to compare the performance and accuracy of our implementation with previous work. We also consider the application 
			of real-time emotion recognition for crime prevention. Emotional analysis can be used as a part of crime detection to help identify potential suspects 
			or witnesses who may be experiencing a heightened emotional state. 
		</p>
		
		<h2>Milestones</h2>
		<ul>
			<li> <p><b>Data collection and data assessment.</b> Since this project will use an open-source data set, data preparation will not be needed. However, it is essential to assess the quality of the images in the data set. We are looking for a data set with about 3,000 images in each class that considers different ethnicities across emotion categories.</p> </li>
	
			<li><b>Program development.</b> For this project, we will develop a python code that uses OpenCV, Keras, and TensorFlow libraries to perform real-time facial emotion recognition. It uses a pre-trained deep learning model to predict a person's emotion based on their facial expression captured by a webcam.</li>
			
			<li><b>Website and model integration.</b> will create a website using React. This website will run an emotion recognition program. The site will request permission to open the webcam. Once the webcam is activated, the video will be displayed on the screen, and a frame indicating the user's emotion will be displayed around the face. Readme instructions on the web page will make it crystal clear to run the code.</li>

			<li><b>Beta testing</b> after completing the requirements for the course project. The team plans to test the program on a practical application and receive feedback from authorities in the field.</li>
		</ul>
	
		<h2>Timetable</h2>
		<table className='center_table'>
			<tbody>
				<tr>
					<th>Type</th>
					<th>Task</th>
					<th>Date</th>
				</tr>
				<tr>
					<td>Deliverables</td>
					<td>Project proposal</td>
					<td className="rightAlign">2/19/2023</td>
				</tr>
				<tr>
					<td></td>
					<td>Mid-term </td>
					<td className="rightAlign">3/02/2023</td>
				</tr>
				<tr>
					<td></td>
					<td>Final</td>
					<td className="rightAlign">4/30/2023</td>
				</tr>
				<tr>
					<td>Model</td>
					<td>Data collection</td>
					<td className="rightAlign">2/05/2023 </td>
				</tr>
				<tr>
					<td></td>
					<td>Data assessment</td>
					<td className="rightAlign">2/05/2023</td>
				</tr>
				<tr>
					<td></td>
					<td>Preliminary model</td>
					<td className="rightAlign">2/19/2023</td>
				</tr>
				<tr>
					<td></td>
					<td>Training</td>
					<td className="rightAlign">3/02/2023 </td>
				</tr>
				<tr>
					<td></td>
					<td>Evaluation</td>
					<td className="rightAlign">3/02/2023</td>
				</tr>
				<tr>
					<td></td>
					<td>Implementation</td>
					<td className="rightAlign">3/02/2023</td>
				</tr>
				<tr>
					<td>Website</td>
					<td>Site creation</td>
					<td className="rightAlign">2/19/2023</td>
				</tr>
				
				<tr>
					<td></td>
					<td>Content creation</td>
					<td className="rightAlign">3/02/2023</td>
				</tr>
				<tr>
					<td></td>
					<td>Model integration</td>
					<td className="rightAlign">3/02/2023</td>
				</tr>
				<tr>
					<td></td>
					<td>Hosting</td>
					<td className="rightAlign">4/22/2023</td>
				</tr>
				<tr>
					<td></td>
					<td>Web cam function</td>
					<td className="rightAlign">4/22/2023</td>
				</tr>
				<tr>
					<td></td>
					<td>Complete functionality </td>
					<td className="rightAlign">4/24/2023</td>
				</tr>
			</tbody>
		</table>
		<h2>References</h2>
		<ul>
		<li id = "accenture_2021"> Accenture. (2021). The future of work: Productive anywhere. Retrieved in February 2023 from: <a href="https://www.accenture.com/_acnmedia/PDF-155/Accenture-Future-Of-Work-Global-Report.pdf#zoom=40">https://www.accenture.com/_acnmedia/PDF-155/Accenture-Future-Of-Work-Global-Report.pdf#zoom=40 </a></li> 
		
		<li id = "fragopanagos_2005">Fragopanagos, N., & Taylor, J. G. (2005). Emotion recognition in human–computer interaction. Neural Networks, 18(4), 389–405. <a href = "https://doi.org/10.1016/j.neunet.2005.03.006"> https://doi.org/10.1016/j.neunet.2005.03.006</a></li>
			
		<li id = "hossain_2017">Hossain, M. S., & Muhammad, G. (2017). An emotion recognition system for mobile applications. IEEE Access (5), 2281-2287. <a href="https://ieeexplore.ieee.org/document/7862118"> https://ieeexplore.ieee.org/document/7862118 </a></li>
		
		<li id = "podoletz_2022">Podoletz, L. (2022). We have to talk about emotional AI and crime. AI & Society. <a href='https://doi.org/10.1007/s00146-022-01435-w'>https://doi.org/10.1007/s00146-022-01435-w</a>  
		</li>
		<li id = "suk_0214"> Suk, M., & Prabhakaran, B. (2014). Real-Time Mobile Facial Expression Recognition System -- A Case Study. 2014 IEEE Conference on Computer Vision and Pattern Recognition Workshops. <a href = "https://doi:10.1109/cvprw.2014.25">https://doi:10.1109/cvprw.2014.25</a></li>
	
		<li id = "venable_2022"> Venable, M. A. (2022). 2022 Online Education Trends Report. BestColleges.com <a href='https://www.bestcolleges.com/research/annual-trends-in-online-education/'>https://www.bestcolleges.com/research/annual-trends-in-online-education/</a></li>
		
		<li id = "zhao_2020">Zhao, J., Zhang, A., Rau, P.-L. P., Dong, L., & Ge, L. (2020). Trends in human-computer interaction in the 5G era: Emerging life scenarios with 5G networks. Cross-Cultural Design. User Experience of Products, Services, and Intelligent Environments, 699–710. <a href="https://doi.org/10.1007/978-3-030-49788-0_53">https://doi.org/10.1007/978-3-030-49788-0_53</a></li>
		
		<li id = "zendesk_2022">Zendesk. (2022). CX Trends 2022. Retrieved in February 2023 from: <a href = "https://cdn2.assets-servd.host/paltry-coyote/production/exports/1e02568f10207f5f7052a41fa28de0a4/zendesk-cx-trends-2022-report.pdf "> https://cdn2.assets-servd.host/paltry-coyote/production/exports/1e02568f10207f5f7052a41fa28de0a4/zendesk-cx-trends-2022-report.pdf</a></li>
		
		<li id = "Kahou_2015">Kahou, E. S., Michalski, V., Konda, K., Memisevic, R., &amp; Pal, C. (2015). Recurrent neural networks for emotion recognition in video. Retrieved in March 2023 from: <a href = "https://doi.org/10.1145/2818346.2830596"> https://doi.org/10.1145/2818346.2830596</a></li>
		
		<li id = "Ko_2018">Ko, B. (2018). A Brief Review of Facial Emotion Recognition Based on Visual Information. Sensors, 18(2), 401. MDPI AG. Retrieved in March 2023 from: <a href = "http://dx.doi.org/10.3390/s18020401"> http://dx.doi.org/10.3390/s18020401</a></li>
		
		<li id = "Hassouneh_2020">Hassouneh, A., Mutawa, A. M., &amp; Murugappan, M. (2020). Development of a real-time emotion recognition system using facial expressions and EEG based on machine learning and deep neural network methods. Retrieved in March 2023 from: <a href = "https://doi.org/10.1016/j.imu.2020.100372"> https://doi.org/10.1016/j.imu.2020.100372</a></li>
		
		</ul>
	</Container>

    );
}

export default ProjectProposal;