import React, { useRef, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as tf from "@tensorflow/tfjs";
import { useOpenCv } from 'opencv-react';

function StreamScreen() {
    const video = useRef(null);
    const outputCanvas = useRef(null);
    const faceCanvas = useRef(null);
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
			const video = document.getElementById('video');
			video.pause();
        }
    }

    async function logic()
    {
        const video = document.getElementById('video');
        const outputCanvas = document.getElementById('outputCanvas');
        const faceCanvas = document.getElementById('faceCanvas');
        const outContext = outputCanvas.getContext('2d', { willReadFrequently: true });
        const faceContext = faceCanvas.getContext('2d', { willReadFrequently: true });

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
			
			function doLoadXml()
			{
				let loadSuccess = faceCascade.load("haarcascade_frontalface_default.xml");
				if (!loadSuccess)
				{
					console.log("Unable to load xml");
					setStatusText("Unable to load xml");
					setStream(false);
					return;
				}
			};
			
            const faceCascade = new cv.CascadeClassifier();
			
			if(!xmlLoaded)
			{
				createFileFromUrl("haarcascade_frontalface_default.xml", faceCascadeData, () => {
					doLoadXml();
				});
			}
			else
			{
				doLoadXml();
			}
			
			
			// Load the pre-trained model
			const loaderHelper = {
				load() 
				{
					return modelData;	
				}
			};
			const model = await tf.loadLayersModel(loaderHelper);

            function processVideo()
            {
				if (video.paused || video.ended) 
				{
					video.removeEventListener('play', reqAnimFram);
					return;
				}
			
				let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
				let gray = new cv.Mat();
				let faces = new cv.RectVector();
				
				try
				{
					outContext.drawImage(video, 0, 0, outputCanvas.width, outputCanvas.height);
					let imageData = outContext.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
					src.data.set(imageData.data);
	
					cv.cvtColor(src, gray, cv.COLOR_BGR2GRAY, 1);
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
					for (let i = 0; i < faces.size(); ++i) 
					{
						let face = faces.get(i);
						let faceImg = gray.roi(face);
						cv.resize(faceImg, faceImg, new cv.Size(48, 48));
						tf.tidy(() => {
							faceContext.drawImage(video, face.x, face.y, face.width, face.height, 0, 0, faceCanvas.width, faceCanvas.height);
							const roiTensor = tf.browser.fromPixels(faceCanvas, 1).expandDims(0);
							const prediction = model.predict(roiTensor);
							
							let emotions = ['Angry','Disgust','Fear','Happy','Neutral', 'Sad', 'Surprise'];
							let predictionData = prediction.dataSync();
							let maxIndex = 0;
							for (let j = 1; j < predictionData.length; ++j) {
								if (predictionData[j] > predictionData[maxIndex]) {
									maxIndex = j;
								}
							}
							let emotion = emotions[maxIndex];
							let textSize = Math.max(face.width / 10, 16);
							outContext.font = textSize + "px Arial";
							outContext.fillStyle = "red";
							outContext.fillText(emotion, face.x + 0.5 * (face.width - textSize * emotion.length), face.y - 5);
							
							outContext.beginPath();
							outContext.lineWidth = "3";
							outContext.strokeStyle = "red";
							outContext.rect(face.x, face.y, face.width, face.height);
							outContext.stroke();
							
							//faceContext.drawImage(faceCanvas, faceImg.x, faceImg.y, faceImg.width, faceImg.height, 0, 0, faceCanvas.width, faceCanvas.height);
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
				
				requestAnimationFrame(processVideo);
            }
			
			function reqAnimFram()
			{
				requestAnimationFrame(processVideo);
			};

            video.addEventListener('play', reqAnimFram);
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
				The below implementation runs locally in your browser. If you have a webcam, you can play with the model and see what emotions it detects.
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
					<canvas className='borderClass' id="outputCanvas" width="640" height="480"
                        ref={outputCanvas}></canvas>
					<canvas className='borderClass' id="faceCanvas" width="48" height="48"
                        ref={faceCanvas}></canvas>
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