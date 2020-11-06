import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CartBasket from "./CartBasket";
import {connect} from "react-redux";

class Category extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }


    render() {
        const {category} = this.props;
        const categoryData = category.category;
        const subCategory = categoryData.map(item => item.subcategories.map(item => item.title));
        const subSubCategory = categoryData.map(item => item.subcategories.map(item => item.sub_subcategories.map(item => item)));

        console.log(subCategory)
        // console.log(subSubCategory)
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
                                                                    <a href="#">
                                                                        {item.title}
                                                                    </a>
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
                                <CartBasket/>
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
    }
}
export default connect(mapStateToProps)(Category);
