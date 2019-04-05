import React from "react";

// reactstrap components
import {

  Button,
  UncontrolledCarousel,
  Container,
  Row,
  Col
} from "reactstrap";


const carouselItems = [
    {
      src: require("assets/img/Sequence/Icon.jpeg"),
      altText: "Slide 1",
      caption: "Sequence Logo"
    },
    {
      src: require("assets/img/Sequence/start.png"),
      altText: "Slide 2",
      caption: "Start Screen"
    },
    {
      src: require("assets/img/Sequence/game.png"),
      altText: "Slide 3",
      caption: "In-Game"
    }
  ];

  
const cultivosCRItems = [
  {
    src: require("assets/img/CultivosCR/Landing.PNG"),
    altText: "Slide 1",
    caption: "Landing Page"
  },  
  {
    src: require("assets/img/CultivosCR/harvest-page.PNG"),
    altText: "Slide 3",
    caption: "Harvest page"
  },
  {
    src: require("assets/img/CultivosCR/reviews.PNG"),
    altText: "Slide 4",
    caption: "Reviews"
  },
  {
    src: require("assets/img/CultivosCR/sales.png"),
    altText: "Slide 5",
    caption: "Sales"
  },
  {
    src: require("assets/img/CultivosCR/Map.png"),
    altText: "Slide 2",
    caption: "Map"
  },  
];


class PortfolioSection extends React.Component {
 
  render() {
    return (
        <div className="section section-basic" id="portfolio-section">
        <img alt="..." className="path" src={require("assets/img/path2.png")} />
        <Container>
          <h2 className="title">Portfolio</h2>
          <h4>These are some of the projects I have work for in my courses at TEC. I will try to upload live demos in the future.</h4>
        </Container>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
              
                  <h1 className="profile-title text-left">Forest Report Application</h1>
                  
                  <p className="profile-description text-left">
                  Automation and digitization of SINAC(National System of Conservation Areas)'s forms when reporting forest damage. 
                  Officers must be able to capture information even in areas where there is no signal, so the mobile app is being developed according to the principles of <a href='https://developer.chrome.com/apps/offline_apps'>Offline First</a>.
                  It also uses a GIS capable database for storing related geographic data. 
                  </p>
                  RESTful API, React Native, PostGIS, Laravel.
                  <Row className=" align-items-center">
                    <i className="devicon-react-plain portfolio-icon"></i>
                    <i className="devicon-laravel-plain-wordmark portfolio-icon"></i>
                    <i className="devicon-postgresql-plain-wordmark portfolio-icon"></i>
                  </Row>
                  <div className="btn-wrapper pt-3">
                      <Button
                        className="btn-simple"
                        color="primary"
                        href="https://marvelapp.com/ge5agi9"
                        target="_blank"
                        >
                        <i className="tim-icons icon-bulb-63" /> Check the prototype!
                    </Button> 
                  </div>
                
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="5">
                  <h1 className="profile-title text-left">CultivosCR</h1>
                  <p className="profile-description text-left">
                  A social network where you can sell and look for seeds, trees, fruits and vegetables. You can search for gardens around you and start buying or you can start growing your own products and selling it through the app. The idea is to grow up a community of people who cares about the planet and plants their own food.
                  </p>
                  Multi-language, Google Maps, Social Network.
                  <Row className="justify-content-between align-items-center">
                    <i className="devicon-php-plain portfolio-icon"></i>
                    <i className="devicon-laravel-plain-wordmark portfolio-icon"></i>
                    <i className="devicon-mysql-plain-wordmark portfolio-icon"></i>
                    <i className="devicon-apache-plain-wordmark portfolio-icon"></i>
                  </Row>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="info"
                      href="https://github.com/cgranados16/AP_Huertas-Urbanas-Comunitarias"
                      target="_blank"
                    >
                      <i className="fab fa-github" /> Check it on GitHub!
                    </Button>
                  </div>
                </Col>
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={cultivosCRItems} />
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Sequence</h1>
                  <p className="profile-description text-left">
                   Sequence is a board game where the objective is to form rows of five poker chips on the board by placing the chips on the board spaces corresponding to cards played from the player's hand.
                  </p>
                  Board Game, C++, Qt
                  <Row className="justify-content-between align-items-center">
                    <i className="devicon-cplusplus-line-wordmark portfolio-icon"></i>
                  </Row>
                  <div className="btn-wrapper pt-3">
                     {/* <Button
                        className="btn-simple"
                        color="primary"
                        href="https://github.com/cgranados16/Sequence"
                        target="_blank"
                        >
                        <i className="tim-icons icon-bulb-63" /> Download
                    </Button> */}
                    <Button
                      className="btn-simple"
                      color="info"
                      href="https://github.com/cgranados16/Sequence"
                      target="_blank"
                    >
                      <i className="fab fa-github" /> Check it on GitHub!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
    );
  }
}

export default PortfolioSection;
