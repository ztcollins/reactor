import { Image, Row, Col } from "react-bootstrap";

export default function PortLanding(props) {

    return <Row>
        <Col lg={8}>
            <h1 style={{fontWeight: "bold", textTransform: "uppercase"}}>Zachary <a style={{color: "#2471A3"}}>Collins</a></h1>
            <h5 style={{fontWeight: "bold", textTransform: "uppercase"}}>UW-Madison Student | Software Engineer</h5>
            <h7 style={{textTransform: "uppercase", color: "#868EB0", marginTop: 20}}>Madison, WI - <a href="mailto:ztcollins@gmail.com">ztcollins@gmail.com</a></h7>
            <p style={{marginTop: 50, color: "#868EB0",}}>I am a software developer that loves to always learn, enjoys building projects and solving challenging problems.</p>
            <p style={{marginTop: 50, color: "#868EB0",}}>Check out the other pages that have my work or visit these links below.</p>
            <div fluid>
                <a style={{marginRight: 20}} href="https://github.com/ztcollins" target="_blank">
                    <img src="/github-mark.svg" width="48" height="48"/>
                </a>
                <a href="https://www.linkedin.com/in/zachary-collins-a90ab7207/" target="_blank">
                    <img src="/linkedin.svg" width="48" height="48"/>
                </a>
            </div>
        </Col>
        <Col>
            <Image src={"/me.jpg"} style={{borderRadius: 20}} fluid></Image>
        </Col>
    </Row>
}