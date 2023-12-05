import { Container, Card } from "react-bootstrap";

export default function PortCode(props) {

    return <div style={{textAlign: "center"}}>
        <h1>Code</h1>
        <p>Check out my github <a href={"https://github.com/ztcollins"}>here</a>.</p>
        <br/>

        <Card>
            <h4>Word Rush</h4>
            <Container>
                <p>Word rush is a game developed in P5JS. Play it <a href="games/word_rush">here</a>.</p>
                <p>I developed this game using Javascript and the base functions provided by p5JS.</p>
                <p><b>Javascript</b></p>
                <div className={"video-container"}>
                    <img src={"/word_rush.png"}></img>
                </div>
                
            </Container>
        </Card>

        <br/>

        <Card>
            <h4>Data structures & algorithms</h4>
            <Container>
                <p>In CS400, I worked on a team of 4 to create 3 projects over the semester. We swapped roles for the frontend, backend, data, and owner.</p>
                <p><b>Java</b></p>
                <div className={"video-container"}>
                    <img src={"/cs400.png"}></img>
                </div>
            </Container>
        </Card>

        <br/>

        <Card>
            <h4>Java Education Tool (WIP)</h4>
            <Container>
                <p>In CS506, I am working on a team of 6 to create a project over the semester. We are using Agile methodology to help facilitate the coding process. We are meeting with a client in order to create user stories such that we meet the requirements set by the client.</p>
                
                <p><b>React</b></p>
                <p><b>MySQL</b></p>
                <p><b>Java Spring Boot</b></p>
                <p><b>APIs</b></p>

                <h6>Google SSO sign in:</h6>
                <div className={"video-container"}>
                    <img src={"/edu_google.png"}></img>
                </div>
            
                <h6 style={{marginTop: 30}}>Maze canvas:</h6>
                <div className={"video-container"}>
                    <img src={"/edu_maze.png"}></img>
                </div>
                
            </Container>
        </Card>
    </div>
}