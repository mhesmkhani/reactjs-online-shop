import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import validator from 'validator';
import * as action from "../../../../redux/actions/AuthAction";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            phone: '',
            password: '',
            errors: {}
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount() {

    }

    handleValidation = (callback) => {
        let errors = {};
        let formIsValid = true;
        if (validator.isEmpty(this.state.phone)) {
            formIsValid = false;
            errors["phone"] = "فیلد شماره موبایل نمیتواند خالی باشد";
        }
        if (validator.isEmpty(this.state.password)) {
            formIsValid = false;
            errors["password"] = "فیلد رمز عبور نمیتواند خالی بماند";
        }
        this.setState({ errors }, () => {
            return callback(formIsValid)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleValidation((valid) => {
            if (valid) this.loginUser()
        })
    }

    loginUser = async () => {
        this.setState({
            spinner: true
        });
        const data = {
            phone: this.state.phone,
            password: this.state.password,
        }
        this.props.UserLogin(data)
        this.props.history.push(`/profile`);
    }
    render() {
        const {errors} = this.state
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
                                                    <h4>ورود به حساب کاربری</h4>
                                                    <div  className="form-account text-right">
                                                        <div className="form-account-title">
                                                            <label htmlFor="phone"> شماره موبایل</label>
                                                            <span className="invalid-feedback rtl m-0" style={{ display: errors["phone"] ? 'block' : 'none' }}>{errors["phone"]}</span>
                                                            <input type="text"
                                                                   className="number-email-input"
                                                                   id="phone"
                                                                   name="phone"
                                                                   onChange={this.onChange}
                                                                   value={this.state.phone}
                                                            />
                                                        </div>
                                                        <div className="form-account-title">
                                                            <label htmlFor="password">رمز عبور</label>
                                                            <span className="invalid-feedback rtl m-0" style={{ display: errors["password"] ? 'block' : 'none' }}>{errors["password"]}</span>
                                                            <a href="#" className="account-link-password">رمز خود را  فراموش کرده ام</a>
                                                            <input type="password"
                                                                   className="password-input"
                                                                   name="password"
                                                                   onChange={this.onChange}
                                                                   value={this.state.password}
                                                            />
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
                                                            <button onClick={this.handleSubmit} className="btn btn-primary btn-login">
                                                              ورود به حساب
                                                            </button>
                                                        </div>
                                                    </div>
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

Login.propTypes = {};
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps,action)(Login);