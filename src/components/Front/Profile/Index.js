import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Profile from "./Profile";
import SideSection from "./SubComponents/SideSection";
import ContentSection from "./SubComponents/ContentSection";
import Favorite from "./Sections/Favorite";
import {connect} from "react-redux";
import {fetchSingleProduct, setClearSingleProduct} from "../../../redux/actions/GetProductAction";
import {fetchFavorite} from "../../../redux/actions/FavoriteAction";
import Cart from "./Sections/Cart";

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
        const value = {}
        this.props.getclearSingleProduct(value)
        switch (pathLocation){
            case "/profile":
                item.push(<ContentSection/>)
                break;
            case "/profile/favorite":
                item.push(<Favorite/>)
                break;
            case "/profile/cart":
                item.push(<Cart/>)
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
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        favorite: state.favorite
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getclearSingleProduct: id => {
            dispatch(setClearSingleProduct(id))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
