import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImplementationScreen from './components/ImplementationScreen';
import ResultsScreen from './components/ResultsScreen';
import StreamScreen from './components/StreamScreen';
import WelcomeScreen from './components/WelcomeScreen';
import ProjectProposal from './components/ProjectProposal';
import Navigator from './components/Navigator';
import Col from 'react-bootstrap/Col';
import { Container, Row } from 'react-bootstrap';
import { OpenCvProvider } from 'opencv-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <Row>
        <Col xs={6} sm={5} md={4} lg={3}>
          <Navigator />
        </Col>
        <Col>
          <WelcomeScreen />
          <ProjectProposal/>
          <ImplementationScreen />
          <OpenCvProvider>
            <StreamScreen />
          </OpenCvProvider>
          <ResultsScreen />
        </Col>
      </Row>
    </Container>
  </React.StrictMode>
);