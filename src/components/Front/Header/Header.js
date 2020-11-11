import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../../redux/actions/CategoryAction'
import PropTypes from 'prop-types';
import Category from "./SubComponents/Category";
import CartBasket from "./SubComponents/CartBasket";
import Responsive from "./SubComponents/Responsive";
import {NavLink} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchCategory();
    }

    handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    render() {
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
                <header className="header-main">
                    <div className="container-main">
                        <div className="d-block">
                            <section className="h-main-row">
                                <div className="col-lg-9 col-xs-12 pr">
                                    <div className="header-right">
                                        <div className="col-lg-3 pr">
                                            <div className="header-logo row text-right">
                                                <a href="#">
                                                    <img src="assets/images/logo.png" alt="دیجی اسمارت"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 pl">
                                            <div className="header-search row text-right">
                                                <div className="header-search-box">
                                                    <form action="#" className="form-search">
                                                        <input type="search" className="header-search-input"
                                                               name="search-input"
                                                               placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…"/>
                                                        <div className="action-btns">
                                                            <button className="btn btn-search" type="submit">
                                                                <i className="fa fa-search"></i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-xs-12 pl">
                                    <div className="header-left">
                                        <div className="header-account text-left">
                                            <div className="d-block">
                                                <div className="account-box">
                                                    <div className="nav-account d-block pl">

                                                        {
                                                            isAuthenticated ?
                                                                <span className="icon-account"> <img
                                                                    src="assets/images/man.png"
                                                                    className="avator"/> </span>
                                                                :
                                                                <NavLink to="/login">
                                                                    <span className="icon-account"> <img
                                                                        src="assets/images/man.png" className="avator"/> </span>
                                                                </NavLink>
                                                        }

                                                        {
                                                            isAuthenticated ?
                                                                <span className="title-account">
                                                                   <i style={{color: '#06B194'}}
                                                                      className="mdi mdi-shield-check mx-1"></i>
                                                                    {
                                                                            userInfo ?
                                                                            userInfo.phone
                                                                            :
                                                                            <span>کاربر سرمد</span>
                                                                    }
                                                                </span>
                                                                :
                                                                <NavLink to="/login">
                                                                    <span className="btn btn-light title-account"> ورود به حساب کاربری</span>
                                                                </NavLink>

                                                        }
                                                        {
                                                            isAuthenticated ?
                                                                <div className="dropdown-menu">
                                                                    <ul className="account-uls mb-0">
                                                                        <li className="account-item">
                                                                            <NavLink to="/profile" className="account-link"> پروفایل</NavLink>

                                                                        </li>
                                                                        <li className="account-item">
                                                                            <NavLink to="#" className="account-link">سفارشات  من</NavLink>

                                                                        </li>

                                                                        <li className="account-item">
                                                                            <a onClick={this.handleLogout}
                                                                               className="account-link">خروج</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                :
                                                                null
                                                        }


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <Category/>
                            <Responsive/>
                        </div>
                    </div>
                </header>
                <div className="nav-categories-overlay"></div>
            </>
        );
    }
}

Header.propTypes = {};

const mapDispatchToProps = dispatch => ({
    dispatch
})

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, action)(Header);
