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

    render() {
        return (
            <>
                <Header/>
                <Index location={this.props.location}/>
                <Footer/>
            </>
        );
    }
}

Profile.propTypes = {};

export default Profile;
