import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Profile from "./Profile";
import SideSection from "./SubComponents/SideSection";
import ContentSection from "./SubComponents/ContentSection";
import Favorite from "./Sections/Favorite";

class Index extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const pathLocation = this.props.location.pathname;
        const item = []
        switch (pathLocation){
            case "/profile":
                item.push(<ContentSection/>)
                break;
            case "/profile/favorite":
                item.push(<Favorite/>)
                break;
        }
        return (
            <>
                <div className="container-main">
                    <div className="d-block">
                        <section className="profile-home">
                            <div className="col-lg">
                                <div className="post-item-profile order-1 d-block">
                                    <SideSection/>
                                    {item}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </>
        );
    }
}

Index.propTypes = {};

export default Index;