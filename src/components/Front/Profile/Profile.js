import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SideSection from "./SubComponents/SideSection";
import BottomSection from "./SubComponents/ContentSection";
import ContentSection from "./SubComponents/ContentSection";
import Index from "./Index";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Profile extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

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

Profile.propTypes = {};

export default Profile;
