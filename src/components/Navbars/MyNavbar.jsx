import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  scrollToHome = () => {
    document
      .getElementById("home-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToPortfolio = () => {
    document
      .getElementById("portfolio-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToAbout= () => {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Designed and Coded by Creative Tim"
              tag={Link}
            >
            Carlos
            <span> Granados</span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-center " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Carlos Granados
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink href="#" onClick={this.scrollToHome}>
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.scrollToAbout}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.scrollToPortfolio}>
                  Portfolio
                </NavLink>
              </NavItem>
                
        
            </Nav>
          </Collapse>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Carlos Granados
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://github.com/cgranados16"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="GitHub"
                >
                  <i className="fab fa-github" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/profile.php?id=100009366026046"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/cgranados16"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Instagram"
                >
                  <i className="fab fa-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
             
             
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
