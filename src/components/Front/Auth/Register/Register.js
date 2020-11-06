import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

class Register extends Component {
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
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <section className="page-account-box">
                                <div className="col-lg-6 col-md-6 col-xs-12 mx-auto">
                                    <div className="ds-userlogin">
                                        <NavLink to="/" className="account-box-logo">digismart</NavLink>
                                        <div className="account-box">
                                            <div className="account-box-headline">
                                                <NavLink to="/login" className="login-ds" activeClassName="active">
                                                    <span className="title">ورود</span>
                                                    <span className="sub-title">به دیجی اسمارت</span>
                                                </NavLink>
                                                <NavLink to="/register" className="register-ds">
                                                    <span className="title">ثبت نام</span>
                                                    <span className="sub-title">در دیجی اسمارت</span>
                                                </NavLink>
                                            </div>
                                            <div className="Login-to-account mt-4">
                                                <div className="account-box-content">
                                                    <h4>ثبت نام</h4>
                                                    <form action="#" className="form-account text-right">
                                                        <div className="form-account-title">
                                                            <label htmlFor="email-phone">شماره موبایل</label>
                                                            <input type="text" className="number-email-input"
                                                                   id="email-phone" name="email-account"/>
                                                        </div>
                                                        <div className="form-account-title">
                                                            <label htmlFor="password">رمز عبور</label>
                                                            <a href="#" className="account-link-password">رمز خود را
                                                                فراموش کرده ام</a>
                                                            <input type="password" className="password-input"
                                                                   name="password-account"/>
                                                        </div>
                                                        <div className="form-auth-row">
                                                            <label htmlFor="#" className="ui-checkbox mt-1">
                                                                <input type="checkbox" value="1" name="login"
                                                                       id="remember"/>
                                                                <span className="ui-checkbox-check"></span>
                                                            </label>
                                                            <label htmlFor="remember" className="remember-me mr-0">مرا
                                                                به خاطر بسپار</label>
                                                        </div>
                                                        <div className="form-row-account">
                                                            <button className="btn btn-primary btn-login">ورود به دیجی
                                                                اسمارت
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {};

export default Register;