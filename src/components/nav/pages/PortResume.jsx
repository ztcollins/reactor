import { Col, Container, Row } from "react-bootstrap";

export default function PortResume(props) {

    return <div>
        <h1>Resume</h1>
        <br/>
        <Container fluid={true}>
            <p>View my resume <a download href="../../../src/assets/zach_resume_2023_upload.pdf" target="_blank">here</a>.</p>
            <iframe src={"../../../src/assets/zach_resume_2023_upload.pdf"} width="100%" height="1000px" />
        </Container>
        
    </div>
}