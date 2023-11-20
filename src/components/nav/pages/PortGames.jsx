import { Col, Container, Row } from "react-bootstrap";

export default function PortGames(props) {

    return <div>
        <h1>Games</h1>
        <br/>
        <h5>Word Rush</h5>
        <Container fluid={true}>
            <p>Word rush is a game developed in P5JS. Play it <a href="games/word_rush">here</a>.</p>
        </Container>
    </div>
}