import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import validator from "validator";
import {connect} from "react-redux";
import * as action from '../../../../redux/actions/AuthAction'
import axios from "axios";

class VerifyCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            errors: {},
            time: {},
            seconds: 120
        }
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({time: timeLeftVar});
        this.startTimer();
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);
            this.handleExpireToken()
        }
    }

    handleValidation = (callback) => {
        let errors = {};
        let formIsValid = true;

        if (validator.isEmpty(this.state.code)) {
            formIsValid = false;
            errors["code"] = "فیلد کد تایید نمیتواند خالی باشد";
        }
        this.setState({errors}, () => {
            return callback(formIsValid)
        });
    }

    handleExpireToken = () => {
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        const url = 'http://127.0.0.1:8000/api/user/expireCode';
        return axios.get(url, config).then(response => {
            if (response.data.message) {
                this.props.history.push('/receive-code')
            }
        }).catch(error => {
            throw(error)
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.errors)
        this.handleValidation((valid) => {
            if (valid) this.verifyCode()
        })
    }

    verifyCode = () => {

        this.setState({
            spinner: true
        });
        const data = {
            code: this.state.code,
        }
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }

        this.props.VerifyCode(data, config, (message) => {
            let errors = {}
            if (message === 'success') {
                this.props.history.push(`/create-password`);
            } else {
                errors["confirm"] = message;
            }
            this.setState({
                spinner: false,
                errors
            })

        });
    }

    render() {
        const {errors, time} = this.state
        console.log(errors)
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
                                                <NavLink to="/verify-code" className="register-ds">
                                                    <span className="title">ثبت نام </span>
                                                    <span className="sub-title">در دیجی اسمارت</span>
                                                </NavLink>
                                            </div>
                                            <div className="Login-to-account mt-4">
                                                <div className="account-box-content">
                                                    <h4>کد تایید را وارد نمایید</h4>
                                                    <div className="form-account text-right">
                                                        <div className="form-account-title">
                                                            <label htmlFor="code">
                                                                ما برای شما یک کد تایید ارسال کردیم، لطفا آن را وارد
                                                                نمایید
                                                            </label>
                                                            <span className="invalid-feedback rtl m-0"
                                                                  style={{display: errors["code"] ? 'block' : 'none'}}>{errors["code"]}
                                                            </span>
                                                            <span className="invalid-feedback rtl m-0"
                                                                  style={{display: errors["confirm"] ? 'block' : 'none'}}>{errors["confirm"]}
                                                            </span>

                                                            <input type="text"
                                                                   className="number-email-input"
                                                                   id="code"
                                                                   name="code"
                                                                   onChange={this.onChange}
                                                                   value={this.state.code}/>

                                                        </div>
                                                        <div className="form-row-account">
                                                            <button onClick={this.handleSubmit}
                                                                    className="btn btn-primary btn-login">
                                                                ثبت کد تایید
                                                            </button>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="mx-1" style={{fontSize: 'small'}}>
                                                                    زمان باقی مانده
                                                                </div>
                                                                <div className="mx-1">
                                                                    <span>{time.m}:</span><span>{time.s}</span>
                                                                </div>

                                                            </div>
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

VerifyCode.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, action)(VerifyCode);
