import React from "react";

// reactstrap components
import {

  Button,
  UncontrolledCarousel,
  Container,
  Row,
  Col
} from "reactstrap";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ExperienceSection extends React.Component {
 
  render() { var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="section section-basic" id="about-section">
    {/* <img alt="..." className="path" src={require("assets/img/path1.png")} /> */}
    <Container>
      <h2 className="title">Experience</h2>
      <h4>I have worked with the following languages and tools:</h4>
    </Container>
    <div className="section">
    <Container>
        <Slider {...settings}>
            <div>
                <i class="devicon-html5-plain-wordmark portfolio-icon"></i>
            </div>
            <div>
                <i class="devicon-css3-plain-wordmark portfolio-icon"></i>
            </div>
            <div>
                <i class="devicon-javascript-plain portfolio-icon"></i>
            </div>
            <div>
                <i class="devicon-php-plain portfolio-icon"></i>
            </div>
            <div>
                <i class="devicon-mysql-plain-wordmark portfolio-icon"></i>
            </div>
            <div>
                <i class="devicon-react-original portfolio-icon"></i>
            </div>
            <div>
                <i class="devicon-nodejs-plain portfolio-icon"></i>
            </div>
            <div>
                <i class="devicon-github-original portfolio-icon"></i>
            </div>
            <div>
                <i class="devicon-python-plain-wordmark portfolio-icon"></i>
            </div>
            <div>
                <i class="devicon-cplusplus-line-wordmark portfolio-icon"></i>
            </div>
           
        </Slider>
    </Container>
    </div>
    </div>
    );
  }
}

export default ExperienceSection;
