import React, {Component} from 'react';
import {connect} from 'react-redux';
import Category from "./SubComponents/Category";
import Responsive from "./SubComponents/Responsive";
import {NavLink} from "react-router-dom";
import Icon from "../../../Config/GlobaliCons";
import Search from "./SubComponents/Search";
import {fetchCategory} from "../../../redux/actions/CategoryAction";
 class Header extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        setTimeout(
            function() {
                this.props.getCategory();
            }
                .bind(this),
            100
        )
    }

    handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';

    }

    render() {
        const userInfo = this.props.auth.userInfo;
        let apiToken = ''
        if (this.props.auth.apiToken.length < 1) {
            apiToken = null
        } else {
            apiToken = this.props.auth.apiToken
        }
        const isAuthenticated = apiToken
        return (
            <React.Fragment>
                <header className="header-main">
                    <div className="container-main">
                        <div className="d-block">
                            <section className="h-main-row">
                                <div className="col-lg-9 col-xs-12 pr">
                                    <div className="header-right">
                                        <div className="col-lg-3 pr">
                                            <div className="header-logo row text-right">
                                                <NavLink to="/">
                                                    <img src={Icon.Logo} alt="سرمد"/>
                                                </NavLink>
                                            </div>
                                        </div>
                                  <Search/>
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
                                                                    src={Icon.Man}
                                                                    className="avator"/> </span>
                                                                :
                                                                <NavLink to="/login">
                                                                    <span className="icon-account"> <img
                                                                        src={Icon.Man} className="avator"/> </span>
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
                                                                            <NavLink to="/profile/orders" className="account-link">سفارشات  من</NavLink>

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
            </React.Fragment>
        );
    }
}

Header.propTypes = {};

const mapDispatchToProps = dispatch => {
    return {
        getCategory: () => {
            dispatch(fetchCategory())
        },
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
