import { Container, Card } from "react-bootstrap";

export default function PortArt(props) {

    return <div style={{textAlign: "center"}}>
        <h1>Art Projects</h1>
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
            <h4>3D Modelling</h4>
            <br></br>
            <Container>
            <h5>Character Sheet (Maya)</h5>
                <p>This is a scene I created in Maya that has two characters I created.</p>
                <p><a href="/characterSheetFull.png" target="_blank">View Full</a></p>
                <div className={"image-container"}>
                    <img src={"/characterSheetFull.png"}></img>
                </div>
            </Container>
            <br></br>
            <Container>
            <h5>Modern Vanitas (Maya)</h5>
                <p>This is a scene I created in Maya that is meant to be my interpretation of a modern Vanitas painting.</p>
                <p><a href="/collins_zachary_ass1_v2.jpg" target="_blank">View Full</a></p>
                <div className={"image-container"}>
                    <img src={"/collins_zachary_ass1_v2.jpg"}></img>
                </div>
            </Container>
            <br></br>
            <Container>
            <h5>Reality (Rhino)</h5>
                <p>This is a scene I created in Rhino that is meant to be an ideal reality.</p>
                <p><a href="/CollinsZachary_Reality.jpg" target="_blank">View Full</a></p>
                <div className={"image-container"}>
                    <img src={"/CollinsZachary_Reality.jpg"}></img>
                </div>
            </Container>

        </Card>

        <br/>

        <Card>
            <h3>3D Animations (Maya)</h3>
            <br></br>
            <Container>
                <h5>Old Grave</h5>
                <p>This is a creepy animation I created in Maya.</p>
                <div className={"video-container"}>
                    <video loop controls muted>
                        <source src={"https://uwmadison.box.com/shared/static/gc9fp9r11jehvq8a3b8nqthkfgxgudj5.mp4"} type="video/mp4" />
                    </video>
                </div>
            </Container>
            <br></br>
            <Container>
                <h5>Plant Timelapse</h5>
                <p>This is an animation of a plant decaying that I created in Maya.</p>
                <div className={"video-container"}>
                    <video loop controls muted>
                        <source src={"https://uwmadison.box.com/shared/static/qun7rf4loh4cgny01uavwobpccf5i1e1.mp4"} type="video/mp4" />
                    </video>
                </div>
                
            </Container>
        </Card>

        <br></br>

        <Card>
            <h4>Adobe Photoshop</h4>
            <br></br>
            <Container>
            <h5>Altered</h5>
                <p>This is an image I created in Adobe photoshop that is meant to be an altered version of history.</p>
                <p><a href="/Altered_Image.jpg" target="_blank">View Full</a></p>
                <div className={"image-container"}>
                    <img src={"/Altered_Image.jpg"}></img>
                </div>
            </Container>
        </Card>
    </div>
}