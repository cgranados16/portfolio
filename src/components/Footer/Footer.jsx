import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="2">
              <h1 className="title">CG•</h1>
            </Col>
            <Col md="7">
            <Row>
            {/* <p>Page made in React Native</p> */}
            </Row>
              
            </Col>
            <Col md="3">
              <h3 className="title">Contact me:</h3>
              <div className="btn-wrapper profile ">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/cgranados16"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  GitHub
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/cgranados16/"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  LinkedIn
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
