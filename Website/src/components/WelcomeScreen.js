
import React from 'react';
import Container from 'react-bootstrap/Container';


function WelcomeScreen() {

    return (

    <Container className='myContainer' id='WelcomeContainer'>
    <h1>Project proposal</h1>
    <p>
    <h2>Problem</h2>
    Emotion recognition systems identify features in verbal and non-verbal communication to identify and quantify the emotions expressed, enabling computers and product developers to adapt to the user's emotional state (<a className = 'cite' href="#fragopanagos_2005">Fragopanagos & Taylor, 2005</a>; <a className = 'cite'href="#zhao_2020">Zhao et al., 2020</a>). Data on users' emotional reactions when interacting with online applications is valuable for a wide range of fields education, healthcare, customer service, and entertainment (<a className = 'cite' href="#fragopanagos_2005">Fragopanagos & Taylor, 2005</a>). The main signals in emotion analysis are facial expressions, speech, arm gestures, language, and physiological patterns (<a className = 'cite' href="#zhao_2020">Zhao et al., 2020</a>). Emotion recognition from facial expressions involves computer vision, machine learning, and deep learning algorithms. In the context of online applications, the output must be accurate, real-time, and computationally efficient (<a className = 'cite' href="#hossain_2017">Hossain & Muhammad, 2017</a>). Models that analyze images or complete video sequences do not provide an immediate output, therefore, are not suitable for online applications (<a className = 'cite' href="#hossain_2017">Hossain & Muhammad, 2017</a>). Although different frameworks have been proposed, identifying emotions from facial expressions commonly involves face detection, feature extraction, and facial expression classification. In the case of video, dynamic features are extracted using temporal segmentation (<a className = 'cite' href="#suk_2014">Suk & Prabhakaran, 2014</a>).

    <h2>Motivation</h2>
    Automated customer service (<a className = 'cite' href = "#zendesk_2022">Zendesk, 2022</a>), hybrid work (<a className = 'cite' href = "#accenture_2021">Accenture, 2021</a>), and distance learning <a className = 'cite' href = "#venable_2022">(Venable, 2022)</a> are becoming more common, raising the need for natural and personalized interactions with computers. Data on emotional responses is essential to provide customized responses and improve online tools. Because this project will be presented in a web format, we were motivated to focus on emotion analysis for online applications. Our goal is that instructors and anyone that visits our website can interact with our project.
    
    <h2>Approach</h2>
    Our objective is to develop a program that identifies emotion in real-time video captured through a webcam. We will use an open-source data set to train a deep learning model.  The model uses a cascaded classifier to detect faces in the video frames. The grayscale face region is then passed through the trained model which classifies facial expressions as anger, disgust, fear, happiness, sadness, surprise, or neutral.  

    <h2>Milestones</h2>
    <ul>
        <li> <b>Data collection and data assessment.</b> Since this project will use an open-source data set, data preparation will not be needed. However, it is essential to assess the quality of the images in the data set. We are looking for a data set with about 3,000 images in each class that considers different ethnicities across emotion categories.</li>

        <li><b>Program development.</b> For this project, we will develop a python code that uses OpenCV, Keras, and TensorFlow libraries to perform real-time facial emotion recognition. It uses a pre-trained deep learning model to predict a person's emotion based on their facial expression captured by a webcam.</li>
        
        <li><b>Website and model integration.</b> will create a website using React. This website will run an emotion recognition program. The site will request permission to open the webcam. Once the webcam is activated, the video will be displayed on the screen, and a frame indicating the user's emotion will be displayed around the face. Readme instructions on the web page will make it crystal clear to run the code.</li>
    </ul>

    <h2>Timetable</h2>
    <table>
        <th>Type</th>
        <th>Task</th>
        <th>Date</th>
        <tr>
            <td>Deliverables</td>
            <td>Project proposal</td>
            <td>2/19/2023 </td>
        </tr>
        <tr>
            <td></td>
            <td>Mid-term </td>
            <td>3/2/2023</td>
        </tr>
        <tr>
            <td></td>
            <td>Final</td>
            <td>4/30/2023</td>
        </tr>
        <tr>
            <td>Model</td>
            <td>Data collection</td>
            <td>2/5/2023 </td>
        </tr>
        <tr>
            <td></td>
            <td>Data assessment</td>
            <td>2/5/2023</td>
        </tr>
        <tr>
            <td></td>
            <td>Preliminary model</td>
            <td>2/19/2023</td>
        </tr>
        <tr>
            <td></td>
            <td>Training</td>
            <td>3/2/2023 </td>
        </tr>
        <tr>
            <td></td>
            <td>Evaluation</td>
            <td>3/2/2023</td>
        </tr>
        <tr>
            <td></td>
            <td>Implementation</td>
            <td>3/2/2023</td>
        </tr>
        <tr>
            <td>Website</td>
            <td>Site creation</td>
            <td>2/19/2023</td>
        </tr>
        <tr>
            <td></td>
            <td>Hosting</td>
            <td>2/19/2023</td>
        </tr>
        <tr>
            <td></td>
            <td>Content creation</td>
            <td>3/2/2023</td>
        </tr>
        <tr>
            <td></td>
            <td>Model integration</td>
            <td>3/2/2023</td>
        </tr>
        <tr>
            <td></td>
            <td>Web cam function</td>
            <td>4/22/2023</td>
        </tr>
        <tr>
            <td></td>
            <td>Complete functionality </td>
            <td>4/24/2023</td>
        </tr>

    </table>
    <h2>References</h2>
    <ul>
    <li id = "accenture_2021"> Accenture. (2021). The future of work: Productive anywhere. Retrieved in February 2023 from: <a href="https://www.accenture.com/_acnmedia/PDF-155/Accenture-Future-Of-Work-Global-Report.pdf#zoom=40">https://www.accenture.com/_acnmedia/PDF-155/Accenture-Future-Of-Work-Global-Report.pdf#zoom=40 </a></li> 
    
    <li id = "fragopanagos_2005">Fragopanagos, N., & Taylor, J. G. (2005). Emotion recognition in human–computer interaction. Neural Networks, 18(4), 389–405. <a href = "https://doi.org/10.1016/j.neunet.2005.03.006"> https://doi.org/10.1016/j.neunet.2005.03.006</a></li>
        
    <li id = "hossain_2017">Hossain, M. S., & Muhammad, G. (2017). An emotion recognition system for mobile applications. IEEE Access (5), 2281-2287. <a href="https://ieeexplore.ieee.org/document/7862118"> https://ieeexplore.ieee.org/document/7862118 </a></li>
    
    <li id = "suk_0214"> Suk, M., & Prabhakaran, B. (2014). Real-Time Mobile Facial Expression Recognition System -- A Case Study. 2014 IEEE Conference on Computer Vision and Pattern Recognition Workshops. <a href = "https://doi:10.1109/cvprw.2014.25">https://doi:10.1109/cvprw.2014.25</a></li>

    <li id = "venable_2022"> Venable, M. A. (2022). 2022 Online Education Trends Report. BestColleges.com <a href='https://www.bestcolleges.com/research/annual-trends-in-online-education/'>https://www.bestcolleges.com/research/annual-trends-in-online-education/</a></li>
    
    <li id = "zhao_2020">Zhao, J., Zhang, A., Rau, P.-L. P., Dong, L., & Ge, L. (2020). Trends in human-computer interaction in the 5G era: Emerging life scenarios with 5G networks. Cross-Cultural Design. User Experience of Products, Services, and Intelligent Environments, 699–710. <a href="https://doi.org/10.1007/978-3-030-49788-0_53">https://doi.org/10.1007/978-3-030-49788-0_53</a></li>
    
    <li id = "zendesk_2022">Zendesk. (2022). CX Trends 2022. Retrieved in February 2023 from: <a href = "https://cdn2.assets-servd.host/paltry-coyote/production/exports/1e02568f10207f5f7052a41fa28de0a4/zendesk-cx-trends-2022-report.pdf "> https://cdn2.assets-servd.host/paltry-coyote/production/exports/1e02568f10207f5f7052a41fa28de0a4/zendesk-cx-trends-2022-report.pdf</a></li>
    
    </ul>
    </p>
</Container>

    );
}

export default WelcomeScreen;