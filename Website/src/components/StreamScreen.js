import React, { useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import * as tf from "@tensorflow/tfjs";
import { useOpenCv } from 'opencv-react';
import modelData from '../model/model.json';
import faceCascadeData from '../model/haarcascade_frontalface_default.xml';

function StreamScreen() {
    const video = useRef(null);
    const canvas = useRef(null);
    const [stream, setStream] = useState(true);
    const [buttonText, setButtonText] = useState("Enable Stream");
    const [statusText, setStatusText] = useState("Waiting");
    const [streamObject, setStreamObject] = useState([]);
    const { loaded, cv } = useOpenCv();
	
	const modelData = require("../model/model.json");
	const faceCascadeData = require("../model/haarcascade_frontalface_default.xml");

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
            setStatusText("Waiting");
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
            const faceCascade = new cv.CascadeClassifier();
            faceCascade.load(faceCascadeData);

            async function processVideo()
            {
                let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
                let gray = new cv.Mat();
                let faces = new cv.RectVector();

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
				catch(err)
				{
					console.log("An error occurred: " + err);
				}

                // Load the pre-trained model
				const loaderHelper = {
					load() 
					{
						return modelData;	
					}
				};
                const model = await tf.loadLayersModel(loaderHelper);

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

                requestAnimationFrame(processVideo);
            }

            video.addEventListener('play', function() {
                requestAnimationFrame(processVideo);
            });
        }catch(err)
        {
			setStatusText("An error occurred: " + err);
        }
    }

    return (
        <Container className='myContainer' id='StreamContainer'>
            <h1 className='blue'>Stream</h1>
            <Row>
                <Col>
					<Zoom>
						<video className='borderClass' id="video" width="640" height="480" autoPlay
                        ref={video}></video>
					</Zoom>
					<Zoom>
						<canvas className='borderClass' id="canvas" width="640" height="480"
                        ref={canvas}></canvas>
					</Zoom>
                </Col>
                <Col>
                    <input type="button" id="enableButton" onClick={enableStream} value={buttonText}></input>
                    <p>Demo still in progress!</p>
                    <p>Status:</p>
                    <p>{statusText}</p>
                </Col>
            </Row>
        </Container>

    );
}

export default StreamScreen;