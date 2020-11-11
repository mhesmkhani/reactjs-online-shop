import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import validator from "validator";
import {connect} from "react-redux";
import * as action from '../../../../redux/actions/AuthAction'

class ReceiveCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            errors: {}
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
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
        this.setState({errors}, () => {
            return callback(formIsValid)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleValidation((valid) => {
            if (valid) this.receiveCode()
        })
    }

    receiveCode = () => {

        this.setState({
            spinner: true
        });
        const data = {
            phone: this.state.phone,
        }

        this.props.ReceiveCode(data, (message) => {
            let errors = {}
            if (message.phone) {
                errors["login"] = message.phone[0]
            } else if (message === 'success') {
                this.props.history.push(`/verify-code`);
            } else {
                if (message) {
                    errors["login"] = message;
                }
            }
            this.setState({
                spinner: false,
                errors
            })

        });
    }

    render() {
        const {errors} = this.state
        return (
            <>
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
                                                <NavLink to="/receive-code" className="register-ds">
                                                    <span className="title">ثبت نام</span>
                                                    <span className="sub-title">در دیجی اسمارت</span>
                                                </NavLink>
                                            </div>
                                            <div className="Login-to-account mt-4">
                                                <div className="account-box-content">
                                                    <h4>ثبت نام</h4>
                                                    <div className="form-account text-right">
                                                        <div className="form-account-title">
                                                            <label htmlFor="phone">شماره موبایل خود را وارد کنید
                                                            </label>
                                                            <span className="invalid-feedback rtl m-0"
                                                                  style={{display: errors["phone"] ? 'block' : 'none'}}>{errors["phone"]}
                                                            </span>
                                                            <span className="invalid-feedback rtl m-0"
                                                                  style={{display: errors["login"] ? 'block' : 'none'}}>{errors["login"]}
                                                            </span>
                                                            <input type="text"
                                                                   className="number-email-input"
                                                                   id="phone"
                                                                   name="phone"
                                                                   onChange={this.onChange}
                                                                   value={this.state.phone}/>

                                                        </div>
                                                        <div className="form-row-account">
                                                            <button onClick={this.handleSubmit}
                                                                    className="btn btn-primary btn-login">
                                                                دریافت کد تایید
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
            </>
        );
    }
}

ReceiveCode.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, action)(ReceiveCode);
