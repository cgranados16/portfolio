import React from "react";

// reactstrap components
import { Container, Col, Row, Button } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter" id="home-section">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center">
          <Row>
            <Col xs="12" sm="4">
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require('assets/img/header-image.jpg')}
                />
            </Col>
            <Col xs="12" sm="8">
              <h1 className="text-white title header title">Carlos Granados</h1>
              <h3 className="d-none d-sm-block header sub">
               Computer Engineer
              </h3>
              <a href="https://drive.google.com/open?id=1W1NLYseEF7yDwqmUdUg8LOGoR4WeJ1m6" target="_blank" rel="noopener noreferrer">
              <Button
                  className="d-lg-block header button"
                  color="default"
                  
                  //onClick=''
                >
                  <i className="tim-icons icon-cloud-download-93" /> Download my CV
                </Button>
              </a>
              
            </Col>
          </Row>
          
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
