import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class Layout extends Component {
    constructor(props) {
        super(props);

    }



    componentDidMount() {

    }



    render() {
        return (
            <React.Fragment>
               <Header/>
               <Footer/>
            </React.Fragment>
        );
    }
}

Layout.propTypes = {};

export default Layout;
