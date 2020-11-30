import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import Icon from "../../../../Config/GlobaliCons";

class SideSection extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

    handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    }


    render() {
        const userInfo = this.props.auth.userInfo.data;
        return (
            <div>
                <div className="col-lg-3 col-md-3 col-xs-12 pr">
                    <div className="sidebar-profile sidebar-navigation">
                        <section className="profile-box">
                            <header className="profile-box-header-inline">
                                <div className="profile-avatar user-avatar profile-img">
                                    <img src={Icon.Man}/>
                                </div>
                            </header>
                            <footer className="profile-box-content-footer">
                                {
                                    userInfo.fullname != null ?
                                        <span className="profile-box-nameuser">{userInfo.fullname}</span>
                                        :
                                        <span className="profile-box-nameuser">کاربر سرمد</span>

                                }
                                 <br/>
                                {
                                    userInfo.phone != null ?
                                        <span className="profile-box-phone"> شماره همراه :  {userInfo.phone} </span>
                                        :
                                        <span className="profile-box-phone">شماره همراه : خالی</span>

                                }
                                <div className="profile-box-tabs">
                                    <a onClick={this.handleLogout} className="cursor-pointer profile-box-tab-sign-out"><i
                                        className="mdi mdi-logout-variant"></i>خروج از حساب</a>
                                </div>
                            </footer>
                        </section>
                        <section className="profile-box">
                            <ul className="profile-account-navs">
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <NavLink exact to={"/profile"} activeClassName="active">
                                        <i className="mdi mdi-account-outline"></i>
                                        پروفایل
                                    </NavLink>
                                </li>
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <NavLink to={"/profile/orders"} activeClassName="active"><i className="mdi mdi-cart"></i>
                                        همه سفارش ها
                                    </NavLink>
                                </li>
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <NavLink to={'/profile/favorite'} activeClassName="active"><i className="mdi mdi-heart"></i>
                                        لیست علاقه مندی
                                    </NavLink>
                                </li>
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <NavLink to={"/profile/cart"} activeClassName="active"><i className="mdi mdi-map-outline"></i>
                                         سبد خرید
                                    </NavLink>
                                </li>
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <NavLink to={"/profile/comments"} activeClassName="active"><i
                                        className="mdi mdi-email-open-outline"></i>
                                        نظرات
                                    </NavLink>
                                </li>
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <NavLink to={"/profile/information"} activeClassName="active"><i
                                        className="mdi mdi-tooltip-text-outline"></i>
                                        اطلاعات حساب
                                    </NavLink>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

SideSection.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(SideSection);
