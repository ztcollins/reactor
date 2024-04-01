import { Container } from "react-bootstrap";

export default function PortResume(props) {

    return <div style={{textAlign: "center"}}>
        <h1>Resume</h1>
        <br/>
        <p>View my resume <a href="/zach_resume_2023_upload.pdf" target="_blank">here</a>.</p>
        <br/>
        <Container fluid={true}>
            <iframe style={{borderRadius: 20}} src={"/zach_resume_2024_1.2.pdf"} width="100%" height="1000px" />
        </Container>
        
    </div>
}