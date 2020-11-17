import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Index from "./Index";

class SingleProduct extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header/>
                 <Index/>
                <Footer/>
            </div>
        );
    }
}

SingleProduct.propTypes = {};

export default SingleProduct;
