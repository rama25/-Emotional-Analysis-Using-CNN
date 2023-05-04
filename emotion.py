# #Importing required packages:
# The first step is to import the necessary Python libraries and modules. The following packages are imported:

# load_model: from the Keras models module, used to load a pre-trained CNN model from a file.
# numpy: used for numerical computing, especially array manipulation.
# argparse: used to parse command-line arguments.
# dlib: used for face detection and facial landmark extraction.
# cv2: the OpenCV library, used for image processing and video capturing.
# Parsing command-line arguments:
# Next, the script parses command-line arguments using the argparse module. The script accepts a single argument, "-vw" or "--isVideoWriter", which is used to specify whether to write the output video to a file or not. This argument is optional and its default value is False.

# Defining emotions dictionary:
# The emotions dictionary is defined next, which maps the numerical labels predicted by the CNN model to the corresponding emotional states. Each emotion label is associated with a string representation of the emotion and a color used to draw the bounding box around the detected face.

# Defining helper functions:
# The script defines two helper functions: shapePoints() and rectPoints().

# shapePoints() takes a dlib facial landmark object as input and returns a 2D NumPy array of shape (68, 2) containing the (x, y) coordinates of the 68 facial landmarks.

# rectPoints() takes a dlib rectangle object as input and returns a tuple containing the (x, y) coordinates of the top-left corner of the rectangle, its width and height.

# Loading pre-trained CNN model:
# Next, the script loads a pre-trained CNN model for facial emotion recognition using the load_model() function from Keras. The model is loaded from the file "emotionModel.hdf5", which should be present in the same directory as the script. The compile=False argument is passed to the load_model() function to prevent the model from being re-compiled.

# Initializing video capture:
# The script initializes a video capture object using the OpenCV VideoCapture() function with an argument of 0, which corresponds to the default camera.

# Writing output video:
# If the "-vw" or "--isVideoWriter" argument is set to True, the script creates an output video file named "output.avi" using the OpenCV VideoWriter() function. The video is written using the MJPG codec with a frame rate of 22 frames per second and the same resolution as the input video.

# Main loop:
# The script enters into an infinite loop that captures frames from the video feed, processes them, and displays the results in a window.

# a. Reading frame:

# In each iteration of the loop, the script reads a frame from the video capture object using the read() function. The returned values are assigned to the variables "ret" and "frame". "ret" is a Boolean value indicating whether a frame was successfully read, and "frame" is a NumPy array containing the pixel values of the frame.

# b. Resizing frame:

# The frame is resized to a width of 720 pixels and a height of 480 pixels using the OpenCV resize() function. This size is used to speed up the processing and reduce the computational load on the CNN model.







# Importing required packages
from keras.models import load_model
import numpy as np
import argparse
import dlib
import cv2

ap = argparse.ArgumentParser()
ap.add_argument("-vw", "--isVideoWriter", type=bool, default=False)
args = vars(ap.parse_args())

emotion_offsets = (20, 40)
emotions = {
    0: {
        "emotion": "Angry",
        "color": (193, 69, 42)
    },
    1: {
        "emotion": "Disgust",
        "color": (164, 175, 49)
    },
    2: {
        "emotion": "Fear",
        "color": (40, 52, 155)
    },
    3: {
        "emotion": "Happy",
        "color": (23, 164, 28)
    },
    4: {
        "emotion": "Sad",
        "color": (164, 93, 23)
    },
    5: {
        "emotion": "Suprise",
        "color": (218, 229, 97)
    },
    6: {
        "emotion": "Neutral",
        "color": (108, 72, 200)
    }
}


def shapePoints(shape):
    coords = np.zeros((68, 2), dtype="int")
    for i in range(0, 68):
        coords[i] = (shape.part(i).x, shape.part(i).y)
    return coords


def rectPoints(rect):
    x = rect.left()
    y = rect.top()
    w = rect.right() - x
    h = rect.bottom() - y
    return (x, y, w, h)


faceLandmarks = "predictor.dat"
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor(faceLandmarks)

emotionModelPath = 'final_model.hdf5' 
emotionClassifier = load_model(emotionModelPath, compile=False)
emotionTargetSize = emotionClassifier.input_shape[1:3]

cap = cv2.VideoCapture(0)

if args["isVideoWriter"] == True:
    fourrcc = cv2.VideoWriter_fourcc("M", "J", "P", "G")
    capWidth = int(cap.get(3))
    capHeight = int(cap.get(4))
    videoWrite = cv2.VideoWriter("output.avi", fourrcc, 22,
                                 (capWidth, capHeight))

while True:
    ret, frame = cap.read()
    frame = cv2.resize(frame, (720, 480))

    if not ret:
        break

    grayFrame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    rects = detector(grayFrame, 0)
    for rect in rects:
        shape = predictor(grayFrame, rect)
        points = shapePoints(shape)
        (x, y, w, h) = rectPoints(rect)
        grayFace = grayFrame[y:y + h, x:x + w]
        try:
            grayFace = cv2.resize(grayFace, (emotionTargetSize))
        except:
            continue

        grayFace = grayFace.astype('float32')
        grayFace = grayFace / 255.0
        grayFace = (grayFace - 0.5) * 2.0
        grayFace = np.expand_dims(grayFace, 0)
        grayFace = np.expand_dims(grayFace, -1)
        emotion_prediction = emotionClassifier.predict(grayFace)
        emotion_probability = np.max(emotion_prediction)
        if (emotion_probability > 0.36):
            emotion_label_arg = np.argmax(emotion_prediction)
            color = emotions[emotion_label_arg]['color']
            cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
            cv2.line(frame, (x, y + h), (x + 20, y + h + 20),
                     color,
                     thickness=2)
            cv2.rectangle(frame, (x + 20, y + h + 20), (x + 110, y + h + 40),
                          color, -1)
            cv2.putText(frame, emotions[emotion_label_arg]['emotion'],
                        (x + 25, y + h + 36), cv2.FONT_HERSHEY_SIMPLEX, 0.5,
                        (255, 255, 255), 1, cv2.LINE_AA)
        else:
            color = (255, 255, 255)
            cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)

    if args["isVideoWriter"] == True:
        videoWrite.write(frame)

    cv2.imshow("Emotion Recognition", frame)
    k = cv2.waitKey(1) & 0xFF
    if k == 27:
        break

cap.release()
if args["isVideoWriter"] == True:
    videoWrite.release()
cv2.destroyAllWindows()
