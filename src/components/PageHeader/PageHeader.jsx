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
            <Col xs="8" >
              <h1 className="text-white title header title">Carlos Granados</h1>
              <h3 className="d-none d-sm-block header sub">
               Computer Engineer
              </h3>
              <a href="https://drive.google.com/open?id=1W1NLYseEF7yDwqmUdUg8LOGoR4WeJ1m6" target="_blank">
              <Button
                  className="d-none d-lg-block header button"
                  color="default"
                  
                  //onClick=''
                >
                  <i className="tim-icons icon-cloud-download-93" /> Download my CV
                </Button>
              </a>
              
            </Col>
            <Col xs="4">
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src='https://scontent.fsyq3-1.fna.fbcdn.net/v/t1.0-9/49348842_2244124092576436_9102186824473772032_n.jpg?_nc_cat=108&_nc_ht=scontent.fsyq3-1.fna&oh=9fecf2732c912b262c5f7f5276e35463&oe=5D377E50'
                />
            </Col>
          </Row>
          
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
