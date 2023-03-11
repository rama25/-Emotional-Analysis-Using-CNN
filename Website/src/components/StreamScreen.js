import React, { useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function StreamScreen() {
    const video = useRef(null);
    const canvas = useRef(null);

    useEffect(() => {
        //logic(); //Fix this
      });

    return (
        <Container className='myContainer' id='StreamContainer'>
            <h1 className='blue'>Stream</h1>
            <Row>
                <Col>
                    <video className='borderClass' id="video" width="640" height="480" autoPlay
                        ref={video}></video>
                    <canvas className='borderClass' id="canvas" width="640" height="480"
                        ref={canvas}></canvas>
                </Col>
                <Col>
                    <p>Check out this demo</p>
                </Col>
            </Row>
        </Container>

    );
}

function logic()
{
    // Remove once cv and tf are defined
    let cv = "";
    let tf = "";
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function (err) {
            console.log("An error occurred: " + err);
        });

    const faceCascade = new cv.CascadeClassifier();
    const faceCascadeFile = 'haarcascade_frontalface_default.xml';
    faceCascade.load(faceCascadeFile);

    async function processVideo() {
        let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
        let gray = new cv.Mat();
        let faces = new cv.RectVector();

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        src.data.set(imageData.data);

        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
        faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0, [0, 0], [video.width, video.height]);

        // Load the pre-trained model
        const model = await tf.loadLayersModel('emotion_detection_model.h5');

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
}

export default StreamScreen;