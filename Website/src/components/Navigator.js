
import React from 'react';
import Container from 'react-bootstrap/Container';

function Navigator() {

    return (
        <Container className='navigatorContainer myContainer' fluid="false">
            <h4><a href="#WelcomeContainer">Welcome</a></h4>
            <h4><a href="#PPContainer">Project Proposal</a></h4>
            <h4><a href="#ImplementationContainer">Implementation</a></h4>
            <h4><a href="#StreamContainer">Stream</a></h4>
            <h4><a href="#ResultsContainer">Results</a></h4>
        </Container>

    );
}

export default Navigator;