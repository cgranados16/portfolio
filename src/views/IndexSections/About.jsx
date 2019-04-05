import React from "react";

// reactstrap components
import {
  Container,
} from "reactstrap";


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class AboutSection extends React.Component {
 
  render() {var settings = {
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
          <h2 className="title">A little bit about me </h2>
          <h4>Hello, my name is Carlos Andrés Granados Ureña. I'm a Computer Engineering student at Costa Rica Institute of Technology(TEC). 
              I'm 20 years old and I'm living in Zapote, San José, CR. Besides programming I really enjoy playing guitar and listening to music.

          </h4>
          <h4>Email: cgranados16@gmail.com</h4>
          <h4>Github: <a href="https://github.com/cgranados16">https://github.com/cgranados16</a></h4>


        <h3 className="title">Experience</h3>
        <h4>I have worked with the following languages and tools:</h4>
        
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
    );
  }
}

export default AboutSection;
