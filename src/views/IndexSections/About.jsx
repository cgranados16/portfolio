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
        {/* <img alt="..." className="path" src={require("assets/img/path4.png")} /> */}
        <Container>
          <h2 className="title">A little bit about me </h2>
          <h4>Hello, my name is Carlos Andrés Granados Ureña. I have a bachelor's degree in Computer Engineering at Costa Rica Institute of Technology (TEC). 
              I'm 21 years old and I live in Zapote, San José, CR. Besides programming I really enjoy playing guitar and listening to music. I love all kinds of animals, but especially cats.🐈
          </h4>
          <h4>Email: <a href="mailto:cgranados16@gmail.com">cgranados16@gmail.com</a></h4>
          <h4>Github: <a href="https://github.com/cgranados16">https://github.com/cgranados16</a></h4>


        <h3 className="title">Experience</h3>
        <h4>I have experience with the following languages and tools:</h4>
        
        <Slider {...settings}>
            <div title="HTML5">
                <i className="devicon-html5-plain-wordmark portfolio-icon"></i>
            </div>
            <div title="CSS3">
                <i className="devicon-css3-plain-wordmark portfolio-icon"></i>
            </div>
            <div title="JavaScript">
                <i className="devicon-javascript-plain portfolio-icon"></i>
            </div>
            <div title="PHP">
                <i className="devicon-php-plain portfolio-icon"></i>
            </div>
            <div title="Laravel">
                <i className="devicon-laravel-plain-wordmark portfolio-icon"></i>
            </div>
            <div title="Go">
                <i className="devicon-go-plain portfolio-icon" ></i>
            </div>
            <div title="MySQL">
                <i className="devicon-mysql-plain-wordmark portfolio-icon"></i>
            </div>
            <div title="React">
                <i className="devicon-react-original portfolio-icon"></i>
            </div>
            <div title="NodeJS">
                <i className="devicon-nodejs-plain portfolio-icon"></i>
            </div>
            <div title="GitHub">
                <i className="devicon-github-original portfolio-icon"></i>
            </div>
            <div title="Python">
                <i className="devicon-python-plain-wordmark portfolio-icon"></i>
            </div>
            <div title="C++">
                <i className="devicon-cplusplus-line-wordmark portfolio-icon"></i>
            </div>
        </Slider>
        </Container>
        </div>
    );
  }
}

export default AboutSection;
