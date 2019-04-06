import React from "react";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";

class ThanksSection extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      dog: ''
    }
  }

  componentDidMount(){
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) =>{
        console.log(data.message);
        this.setState({dog : data.message});
      })
  }

  render() {
    return (
        <div className="section section-basic" id="portfolio-section">
        <img alt="..." className="path" src={require("assets/img/path3.png")} />
        <Container >
          <h2 className="title">You have reached this far</h2>
          <h4>I hope you liked my work. Here is a random dog image to brighten up your day.</h4>          
          <small className="d-block text-uppercase font-weight-bold mb-4">
                  Image from <a href='https://dog.ceo/dog-api/'>Dog API</a>
                </small>
          <Row className="justify-content-center align-items-center">
           
                <img
                  alt="..."
                  className="img-fluid rounded shadow"
                  src={ this.state.dog}
                  style={{ maxWidth: "500px",  maxHeight: "500px" }}
                />
          </Row>
            
        </Container>
        </div>
    );
  }
}

export default ThanksSection;
