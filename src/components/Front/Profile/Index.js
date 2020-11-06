import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Profile from "./Profile";
import SideSection from "./SubComponents/SideSection";
import ContentSection from "./SubComponents/ContentSection";

class Index extends Component {
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
                <div className="container-main">
                    <div className="d-block">
                        <section className="profile-home">
                            <div className="col-lg">
                                <div className="post-item-profile order-1 d-block">
                                    <SideSection/>
                                    <ContentSection/>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;