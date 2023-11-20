import { Col, Row, Card, Button } from "react-bootstrap";

export default function PortPrivate(props) {
    return <div className={"sign-in-container"}>
        <Row>
            <Col></Col>
            <Col>
                <Card>
                    <div className={"sign-in-header"}>
                        <h4>Sign in</h4>
                    </div>
                    <div className="form">
                        <form>
                            <div className="input-container">
                                <label>Username </label>
                                <input type="text" name="uname" required />
                                {}
                            </div>
                            <div className="input-container">
                                <label>Password </label>
                                <input type="password" name="pass" required />
                                {}
                            </div>
                            <div className={"sign-in-button"}>
                                <Button>Submit</Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    </div>
}