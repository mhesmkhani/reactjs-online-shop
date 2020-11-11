import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import validator from "validator";
import {connect} from "react-redux";
import * as action from '../../../../redux/actions/AuthAction'
import Modal from "react-bootstrap/Modal";

class CreatePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            password: '',
            confirm_password: '',
            errors: {},
            show: false
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
                    <Modal.Header  className="primary-bg m-0 d-flex justify-content-center">
                        <Modal.Title className="text-light d-flex align-items-center">
                            <i className="mdi mdi-check-decagram mx-1"></i>
                            <h6 >ثبت نام با موفقیت انجام شد</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center">
                        <span style={{fontSize: 'small',fontWeight:500}}> برای استفاده از خدمات فروشگاه لطفا وارد حساب کاربری خود شوید</span>
                    </Modal.Body>
                    <Modal.Footer className="account-box-content p-2">
                        <div className="form-row-account col-12">
                            <button onClick={this.handleRedirect} className="btn btn-primary btn-login">
                                ورود به حساب
                            </button>
                        </div>
                    </Modal.Footer>
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
                                                    <span className="sub-title">به دیجی اسمارت</span>
                                                </NavLink>
                                                <NavLink to="/create-password" className="register-ds">
                                                    <span className="title">ثبت نام </span>
                                                    <span className="sub-title">در دیجی اسمارت</span>
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
