import React, { useRef, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as tf from "@tensorflow/tfjs";
import { useOpenCv } from 'opencv-react';

function StreamScreen() {
    const video = useRef(null);
    const canvas = useRef(null);
    const [stream, setStream] = useState(true);
    const [xmlLoaded, setXmlLoaded] = useState(false);
    const [disableStreamButton, setDisableStreamButton] = useState(true);
    const [buttonText, setButtonText] = useState("Enable Stream");
    const [statusText, setStatusText] = useState("Loading OpenCV");
    const [streamObject, setStreamObject] = useState([]);
    const { loaded, cv } = useOpenCv();
	
	const modelData = require("../model/model.json");
	const faceCascadeData = require("../model/haarcascade_frontalface_default.xml");
	
	useEffect(() => {
		if (loaded) {
            setStatusText("Ready to Start");
			setDisableStreamButton(false);
		}
	}, [loaded])

    function enableStream() 
    {
        setStream(!stream);
        if (stream)
        {
            setButtonText("Disable Stream");
            setStatusText("Streaming");
            logic();
        }
        else
        {
            setButtonText("Enable Stream");
            setStatusText("Ready to Start");
			if (streamObject && streamObject.getTracks)
			{
				streamObject.getTracks().forEach(function(track) {
					track.stop();
				  });
			}
        }
    }

    async function logic()
    {
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (streamO) {
                setStreamObject(streamO);
                video.srcObject = streamO;
                video.play();
            })
            .catch(function (err) {
                console.log("An error occurred: " + err);
                setStatusText("An error occurred: " + err);
            });

        try
        {
			
		
			function createFileFromUrl(path, url, callback) {
				let request = new XMLHttpRequest();
				request.open('GET', url, true);
				request.responseType = 'arraybuffer';
				request.onload = function(ev) {
					if (request.readyState === 4) {
						if (request.status === 200) {
							let data = new Uint8Array(request.response);
							cv.FS_createDataFile('/', path, data, true, false, false);
							setXmlLoaded(true);
							callback();
						} else {
							console.printError('Failed to load ' + url + ' status: ' + request.status);
						}
					}
				};
				request.send();
			};
			
            const faceCascade = new cv.CascadeClassifier();
			
			if(!xmlLoaded)
			{
				createFileFromUrl("haarcascade_frontalface_default.xml", faceCascadeData, () => {
					let loadSuccess = faceCascade.load("haarcascade_frontalface_default.xml");
					if (!loadSuccess)
					{
						console.log("Unable to load xml");
						setStatusText("Unable to load xml");
						setStream(false);
						return;
					}
				});
			}
			else
			{
				let loadSuccess = faceCascade.load("haarcascade_frontalface_default.xml");
				if (!loadSuccess)
				{
					console.log("Unable to load xml");
					setStatusText("Unable to load xml");
					setStream(false);
					return;
				}
			}
			
			
			// Load the pre-trained model
			const loaderHelper = {
				load() 
				{
					return modelData;	
				}
			};
			const model = await tf.loadLayersModel(loaderHelper);
			
			let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
			let gray = new cv.Mat();
			let faces = new cv.RectVector();

            function processVideo()
            {
				try
				{
					context.drawImage(video, 0, 0, canvas.width, canvas.height);
					let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
					src.data.set(imageData.data);
	
					cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
					var minSize = {
						height: 0,
						width: 0
					};
					var maxSize = {
						height: video.width,
						width: video.height
					};
					
					try
					{
						faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0, minSize, maxSize);
					}
					catch(ptr)
					{
						let err = cv.exceptionFromPtr(ptr)
						console.log("An error occurred: " + err.msg);
						setStatusText("An error occurred: " + err.msg);
						setStream(false);
						return;
					}
	
					// Extract features and classify emotions using the pre-trained model
					for (let i = 0; i < faces.size(); ++i) {
						let face = faces.get(i);
						let faceImg = gray.roi(face);
						cv.resize(faceImg, faceImg, new cv.Size(48, 48));
						tf.tidy(() => {
							let tensor = tf.browser.fromPixels(faceImg).mean(2).toFloat().div(255.0).expandDims(0);
							let prediction = model.predict(tensor);
							let emotions = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral'];
							let predictionData = prediction.dataSync();
							let maxIndex = 0;
							for (let j = 1; j < predictionData.length; ++j) {
								if (predictionData[j] > predictionData[maxIndex]) {
									maxIndex = j;
								}
							}
							let emotion = emotions[maxIndex];
							let textSize = Math.max(face.width / 10, 16);
							context.font = textSize + "px Arial";
							context.fillStyle = "red";
							context.fillText(emotion, face.x + 0.5 * (face.width - textSize * emotion.length), face.y - 5);
						});
						faceImg.delete();
					}
				}
				catch(err)
				{
					console.log("An error occurred: " + err);
					setStream(false);
					return;
				}
				
				if(stream)
				{
					requestAnimationFrame(processVideo);
				}
            }

            video.addEventListener('play', function() {
                requestAnimationFrame(processVideo);
            });
        }catch(err)
        {
			console.log("An error occurred: " + err);
			setStatusText("An error occurred: " + err);
			setStream(false);
			return;
        }
		
    };

    return (
        <Container className='myContainer' id='StreamContainer'>
            <h1 className='blue'>Stream</h1>
			<p>
				The below implementation runs natively in your browser. If you have a webcam, you can play with the model and see what emotions it detects.
			</p>
			<h4>Steps:</h4>
			<ol>
				<li>Request Webcam.</li>
				<li>Extract image from webcam video.</li>
				<li>Convert the image into gray scale.</li>
				<li>Recognize faces in the scene and display a rectangle around the face.</li>
				<li>For each identified face, extract the face and resize to 48x48.</li>
				<li>Use the CNN classifier to predict the emotion expressed by the face in the frame.</li>
				<li>Display the predicted emotion over the rectangle.</li>
			</ol>
			<p>Note that your video stream is not uploaded anywhere and is only used locally.</p>
			
            <div>
                <div>
					<video className='borderClass' id="video" width="640" height="480" autoPlay
                        ref={video}></video>
					<canvas className='borderClass' id="canvas" width="640" height="480"
                        ref={canvas}></canvas>
                </div>
                <div>
                    <input type="button" id="enableButton" onClick={enableStream} value={buttonText} disabled={disableStreamButton}></input>
                    <p>Demo is still a work in progress!</p>
                    <h4>Status:</h4>
                    <p>{statusText}</p>
					<p>We are working to integrate OpenCV and TensorFlow into this webpage to let you run the model in your browser.</p>
                </div>
            </div>
        </Container>

    );
	
}

export default StreamScreen;