import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../Auth/Login/Login";
import Test from "../Test";

class Home extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
      document.title = " فروشگاه اینترنتی صنایع دستی و فرهنگی سرمد"
    }


    render() {
        return (
            <React.Fragment>
                <Header/>
                 <Slider/>
                <Footer/>
            </React.Fragment>
        );
    }
}

Home.propTypes = {};

export default Home;
