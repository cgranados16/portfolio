import React from "react";

// core components

import MyNavbar from "components/Navbars/MyNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";

import Portfolio from "views/IndexSections/Portfolio.jsx";
import About from "views/IndexSections/About.jsx";
import Thanks from "views/IndexSections/Thanks.jsx";


class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <MyNavbar />
         <div className="wrapper">
          <PageHeader />
          <div className="main">
            <About/>
            <Portfolio/>
            <Thanks/>
          </div>
          <Footer />
        </div> 
      </>
    );
  }
}

export default Index;
