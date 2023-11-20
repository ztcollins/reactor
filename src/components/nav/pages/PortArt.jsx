import { Container, Card } from "react-bootstrap";

export default function PortArt(props) {

    return <div>
        <h1>Art</h1>
        <br/>
        <Card>
            <h3>Adobe After Effects Animations</h3>
            <br></br>
            <Container>
                <h5>Ship rekt</h5>
                <p>This is an absurdist animation I created in After Effects.</p>
                <div className={"video-container"}>
                    <video loop controls muted>
                        <source src={"/actual_final_compress.mp4"} type="video/mp4" />
                    </video>
                </div>
            </Container>
            <br></br>
            <Container>
                <h5>Untitled</h5>
                <p>This is an animation I created about Seattle in After Effects.</p>
                <div className={"video-container"}>
                    <video loop controls muted>
                        <source src={"/Collins_art428_compress.mp4"} type="video/mp4" />
                    </video>
                </div>
                
            </Container>
        </Card>
        

        <br/>

        <Card>
            <h4>Maya 3D modelling</h4>
            <br></br>
            <Container>
            <h5>Modern Vanitas</h5>
                <p>This is a scene I created in Maya that is meant to be my interpretation of a modern Vanitas painting.</p>
                <img style={{height: 800, width: 800}} src={"/collins_zachary_ass1_v2.jpg"}></img>
            </Container>
        </Card>
    </div>
}