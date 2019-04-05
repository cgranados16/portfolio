import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/css/portfolio.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";
import "assets/devicon/devicon.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Index from "views/Index.jsx";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" render={props => <Index {...props} />} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
