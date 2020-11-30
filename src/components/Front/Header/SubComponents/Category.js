import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CartBasket from "./CartBasket";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as action from '../../../../redux/actions/SearchProductAction'
import {fetchSingleProduct, setClearSingleProduct} from "../../../../redux/actions/GetProductAction";
import {fetchFavorite} from "../../../../redux/actions/FavoriteAction";
import {getsearchValue} from "../../../../redux/actions/SearchProductAction";
import {fetchSearch} from "../../../../redux/actions/SearchProductAction";

class Category extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }
    handleGetSearch = (data) => {
        const value = {}
        this.props.search(data)
        this.props.getclearSingleProduct(value)
    }

    render() {
        const {category} = this.props;
        const categoryData = category.category;
        const userInfo = this.props.auth.userInfo.data;
        let apiToken = ''
        if (this.props.auth.apiToken.length < 1) {
            apiToken = null
        } else {
            apiToken = this.props.auth.apiToken
        }
        const isAuthenticated = apiToken

        return (
            <>
                <nav className="header-main-nav">
                    <div className="d-block">
                        <div className="align-items-center">
                            <ul className="menu-ul mega-menu-level-one">
                                {
                                    categoryData.map(category =>
                                        <li id="nav-menu-item" className="menu-item nav-overlay">
                                            <a href="#" className="current-link-menu">
                                                {category.title}
                                            </a>
                                            <ul className="sub-menu is-mega-menu mega-menu-level-two">
                                                {
                                                    category.subcategories.map(subcategory =>
                                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                                            <a href="#" className="mega-menu-link">
                                                                {subcategory.title}
                                                            </a>
                                                            <ul className="sub-menu mega-menu-level-three">
                                                                {
                                                                    subcategory.sub_subcategories.map(item =>
                                                                    <li className="menu-mega-item-three">
                                                                    <Link to={"/category/search?q=" + (item.title.replace(/ /g, "-"))} onClick={() => this.handleGetSearch(item.title.replace(/ /g, "-"))}>
                                                                        {item.title}
                                                                    </Link >
                                                                    </li>
                                                                    )}

                                                            </ul>
                                                        </li>
                                                  )}

                                                <div className="bg-image">
                                                    <img src="assets/images/menu-main/digital.png" alt=""/>
                                                </div>
                                            </ul>

                                        </li>
                                    )}
                                {

                                    <CartBasket/>

                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

Category.propTypes = {};
const mapStateToProps = (state) => {
    return {
        category: state.category,
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        search: slug => {
            dispatch(fetchSearch(slug))
        },
        getclearSingleProduct: id => {
            dispatch(setClearSingleProduct(id))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Category);
