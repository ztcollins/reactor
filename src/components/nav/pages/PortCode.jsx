import { Container, Card } from "react-bootstrap";

export default function PortCode(props) {

    return <div style={{textAlign: "center"}}>
        <h1>Coding Projects</h1>
        <br/>
        <p>Check out my github <a href={"https://github.com/ztcollins"}>here</a>.</p>
        <br/>

        <Card>
            <h4>Word Rush</h4>
            <Container>
                <p>Word rush is a game developed in P5JS. Play it <a href="games/word_rush">here</a>.</p>
                <p>I developed this game using Javascript and the base functions provided by P5JS.</p>

                <p><b>Technologies: </b>Javascript</p>
                <p><b>Concepts: </b>Inputs, UIs, Graphics, APIs</p>

                <div className={"image-container"}>
                    <img src={"/word_rush.png"}></img>
                </div>
                
            </Container>
        </Card>

        <br/>

        <Card>
            <h4>Data structures & algorithms</h4>
            <Container>
                <p>In CS400, I worked on a team of 4 to create three projects over the semester. We swapped roles for the frontend, backend, data, and owner.</p>
                
                <p><b>Technologies: </b>Java, Git</p>
                <p><b>Concepts: </b>Software Development, Red-Black Trees, HashTables, Searching Algorithms</p>

                <div className={"image-container"}>
                    <img src={"/cs400.png"}></img>
                </div>
            </Container>
        </Card>

        <br/>

        <Card>
            <h4>Java Education Tool</h4>
            <Container>
                <p>In CS506, I worked on a team of 6 to create a fullstack project over the semester. We used the Agile methodology to help facilitate the coding process. We met with a client in order to create user stories. The project is not complete, but students are able to upload code to navigate a maze programatically.</p>
                
                <p><b>Technologies: </b>Java, Spring Boot, Maven, React, MySQL, GitLab, Bootstrap, HTML, CSS</p>
                <p><b>Concepts: </b>Software Development Life Cycle, Fullstack Development, APIs, 3rd Party Libraries, Runtime Compilation, React Graphics, User Management</p>

                <br></br>
                <br></br>

                <b>Google SSO sign in:</b>
                <div className={"image-container"}>
                    <img src={"/edu_google.png"}></img>
                </div>

                <br></br>
                <br></br>
            
                <b style={{marginTop: 100}}>Maze canvas:</b>
                <div className={"image-container"}>
                    <img src={"/edu_maze.png"}></img>
                </div>
                
            </Container>
        </Card>

        <br/>

        <Card>
            <h4>Airline Analysis</h4>
            <Container>
                <p>This project aimed to determine which airline amenities and airlines companies correlated with the most positive reviews.</p>
                <p>View the project analysis <a href="/airlines.html" target="_blank">here</a></p>
                
                <p><b>Technologies: </b>GAMS, Python, Pandas, MATLAB</p>
                <p><b>Concepts: </b>Data Gathering & Cleaning, Optimization Algorithms, Data & Algorithm Interpretation, Visual Displays of Data</p>

                <div className={"image-container"}>
                    <img src={"/airlines_graph.png"}></img>
                </div>
            </Container>
        </Card>
    </div>
}