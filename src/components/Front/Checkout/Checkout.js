import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Index from "./Index";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Checkout extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Index/>
                <Footer/>
            </React.Fragment>
        );
    }
}

Checkout.propTypes = {};

export default Checkout;
