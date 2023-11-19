import { Col, Container, Row } from "react-bootstrap";

export default function JavaEduLanding(props) {

    return <div>
        <h1>About Java Educator</h1>
        <br/>
        <Container fluid={true}>
                    <p>Welcome to the Java Education Tool.</p>
                    <p>This information is current as of <strong>September 30th, 2023.</strong></p>
                    <p>Interested in trying the tool? <a target="_blank" href="./sign-on">Sign in here!</a></p>
                    <h3>The Java Education Project...</h3>
                    <p>Java education tool is an interactive, web-based application that is meant to be used as a motivator for students that haven’t learned any coding. The main feature of the software is a maze challenge that has a robot. Students must use java code to help a simplified robot escape the maze programmatically. There will be a mode so students can practice how the robot works and a mode that allows them to test out their code. Students and teachers will be able to login to this tool to access separate features.</p>
        </Container>
    </div>
}