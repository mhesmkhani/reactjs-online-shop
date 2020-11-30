import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import validator from "validator";
import {connect} from "react-redux";
import * as action from '../../../../redux/actions/AuthAction'
import Modal from "react-bootstrap/Modal";
import Icon from "../../../../Config/GlobaliCons";

class CreatePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            password: '',
            confirm_password: '',
            errors: {},
            show: true
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
        if (validator.isEmpty(this.state.password)) {
            formIsValid = false;
            errors["password_required"] = "فیلد رمزعبور نمیتواند خالی باشد";
        }
        if (validator.isEmpty(this.state.confirm_password)) {
            formIsValid = false;
            errors["confirm_password"] = "فیلد فیلد تکرار رمزعبور نمیتواند خالی باشد";
        }
        this.setState({errors}, () => {
            return callback(formIsValid)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleValidation((valid) => {
            if (valid) this.createPassword()
        })
    }

    createPassword = () => {

        this.setState({

            spinner: true
        });
        const data = {
            password: this.state.password,
            confirm_password: this.state.confirm_password,
        }
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }

        this.props.CreatePassword(data, config, (message) => {
            let errors = {}
            if (message === 'success') {
                this.setState({
                    show: true
                })
            } else {
                    errors["password"] = message;
            }
            this.setState({
                spinner: false,
                errors
            })

        });
    }
    handleRedirect = () => {
        this.props.history.push('/login')
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        const {errors} = this.state
         return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose} dir="rtl">
                    <Modal.Body className="d-flex justify-content-center">
                        <div className="Login-to-account mt-4">
                            <div className="account-box-content">
                                <h4 className="mb-2 text-center">ثبت نام با موفقیت انجام شد</h4>
                                <form action="#" className="form-account text-center">
                                    <div className="user-account-welcome">
                                        <img src={Icon.Man}/>
                                    </div>
                                    <div className="made-account">
                                        <h2>حساب کاربری شما در سرمد ساخته شد</h2>
                                        <p>اکنون می‌توانید به صفحه‌ای که در آن بودید بازگردید و یا با تکمیل اطلاعات حساب
                                            کاربری
                                            خود به کلیه امکانات و
                                            سرویس‌های سرمد و سرویس‌های وابسته به آن دسترسی داشته باشید</p>
                                    </div>
                                    <div className="form-row-account">
                                        <button className="btn btn-primary btn-login" onClick={this.handleRedirect}>ورود به حساب کاربری</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

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
                                                    <span className="sub-title">به سرمد</span>
                                                </NavLink>
                                                <NavLink to="/create-password" className="register-ds">
                                                    <span className="title">ثبت نام </span>
                                                    <span className="sub-title">در سرمد</span>
                                                </NavLink>
                                            </div>
                                            <div className="Login-to-account mt-4">
                                                <div className="account-box-content">
                                                    <h4> ایجاد رمزعبور </h4>
                                                    <div className="form-account text-right">
                                                        <div className="form-account-title">
                                                            <label htmlFor="password">
                                                                یک رمزعبور قوی برای خود ایجاد کنید
                                                            </label>
                                                            <span className="invalid-feedback rtl m-0"
                                                                  style={{display: errors["password"] ? 'block' : 'none'}}>{errors["password"]}
                                                            </span>
                                                            <span className="invalid-feedback rtl m-0"
                                                                  style={{display: errors["password_required"] ? 'block' : 'none'}}>{errors["password_required"]}
                                                            </span>
                                                            <input type="password"
                                                                   className="password-input"
                                                                   name="password"
                                                                   onChange={this.onChange}
                                                                   value={this.state.password}
                                                            />
                                                        </div>
                                                        <div className="form-account-title">
                                                            <label htmlFor="confirm_password">
                                                               تکرار رمزعبور
                                                            </label>
                                                            <span className="invalid-feedback rtl m-0"
                                                                  style={{display: errors["confirm_password"] ? 'block' : 'none'}}>{errors["confirm_password"]}
                                                            </span>

                                                            <input type="password"
                                                                   className="password-input"
                                                                   name="confirm_password"
                                                                   onChange={this.onChange}
                                                                   value={this.state.confirm_password}
                                                            />
                                                        </div>
                                                        <div className="form-row-account">
                                                            <button onClick={this.handleSubmit}
                                                                    className="btn btn-primary btn-login">
                                                                     تایید رمز عبور
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

CreatePassword.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, action)(CreatePassword);
