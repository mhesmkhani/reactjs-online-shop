import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Modal from "react-bootstrap/Modal";

class contentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname:'',
            email:'',
            phone:'',
            home_phone: '',
            national_code: '',
            nationalCodeModal: false,
            homePhoneModal: false,
            fullnameModal: false,
            emailModal: false,
            phoneModal: false,
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
    }

    handleEditFullName = (data) => {
        this.setState({
            fullname: data,
            fullnameModal: true
        })
    }
    handleEditEmail = (data) => {
        this.setState({
            email: data,
            emailModal: true
        })
    }
    handleEditPhone = (data) => {
        this.setState({
            phone: data,
            phoneModal: true
        })
    }
    handleEditHomePhone = (data) => {
        this.setState({
            home_phone: data,
            homePhoneModal: true
        })
    }
    handleEditNationalCode = (data) => {
        this.setState({
            national_code: data,
            nationalCodeModal: true
        })
    }
    handleClose = () => {
        this.setState({
            fullnameModal: false,
            emailModal: false,
            phoneModal: false,
            homePhoneModal: false,
            nationalCodeModal: false
        })
    }
    render() {
        const userInfo = this.props.auth.userInfo.data;
        return (

            <>
                <Modal show={this.state.fullnameModal} onHide={this.handleClose} dir="rtl">
                    <Modal.Header  className="primary-bg m-0 d-flex justify-content-center">
                        <Modal.Title className="text-light d-flex align-items-center">
                            <i style={{fontSize: 'small'}} className="fa fa-edit mx-1"></i>
                            <span style={{fontSize: 'small'}}>ویرایش اطلاعات</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center">
                        <div className="account-box-content col-12">
                            <div className="form-account-title">
                                <label htmlFor="fullname">نام و نام خانوادگی</label>
                                {/*<span className="invalid-feedback rtl m-0" style={{ display: errors["password"] ? 'block' : 'none' }}>{errors["password"]}</span>*/}
                                <input type="text"
                                       id="fullname"
                                       className="number-email-input text-right my-2"
                                       name="fullname"
                                       onChange={this.onChange}
                                       value={this.state.fullname}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="account-box-content p-2">
                        <div className="form-row-account col-12">
                            <button onClick={this.handleRedirect} className={"btn " + (this.state.fullname.length > 2 ?  "btn-login"  : "disable-btn")} disabled={this.state.fullname.length > 2 ? false : true}>
                                ثبت تغیرات
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.emailModal} onHide={this.handleClose} dir="rtl">
                    <Modal.Header  className="primary-bg m-0 d-flex justify-content-center">
                        <Modal.Title className="text-light d-flex align-items-center">
                            <i style={{fontSize: 'small'}} className="fa fa-edit mx-1"></i>
                            <span style={{fontSize: 'small'}}>ویرایش اطلاعات</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center">
                        <div className="account-box-content col-12">
                            <div className="form-account-title">
                                <label htmlFor="email">پست الکترونیک</label>
                                {/*<span className="invalid-feedback rtl m-0" style={{ display: errors["password"] ? 'block' : 'none' }}>{errors["password"]}</span>*/}
                                <input type="text"
                                       id="email"
                                       className="number-email-input text-left my-2"
                                       name="email"
                                       onChange={this.onChange}
                                       value={this.state.email}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="account-box-content p-2">
                        <div className="form-row-account col-12">
                            <button onClick={this.handleRedirect} className={"btn " + (this.state.email.length > 2 ?  "btn-login"  : "disable-btn")} disabled={this.state.email.length > 2 ? false : true}>
                                ثبت تغیرات
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.phoneModal} onHide={this.handleClose} dir="rtl">
                    <Modal.Header  className="primary-bg m-0 d-flex justify-content-center">
                        <Modal.Title className="text-light d-flex align-items-center">
                            <i style={{fontSize: 'small'}} className="fa fa-edit mx-1"></i>
                            <span style={{fontSize: 'small'}}>ویرایش اطلاعات</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center">
                        <div className="account-box-content col-12">
                            <div className="form-account-title">
                                <label htmlFor="phone">شماره تلفن همراه</label>
                                {/*<span className="invalid-feedback rtl m-0" style={{ display: errors["password"] ? 'block' : 'none' }}>{errors["password"]}</span>*/}
                                <input type="text"
                                       id="phone"
                                       className="number-email-input text-left my-2"
                                       name="phone"
                                       onChange={this.onChange}
                                       value={this.state.phone}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="account-box-content p-2">
                        <div className="form-row-account col-12">
                            <button onClick={this.handleRedirect} className={"btn " + (this.state.phone.length > 2 ?  "btn-login"  : "disable-btn")} disabled={this.state.phone.length > 2 ? false : true}>
                                ثبت تغیرات
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.homePhoneModal} onHide={this.handleClose} dir="rtl">
                    <Modal.Header  className="primary-bg m-0 d-flex justify-content-center">
                        <Modal.Title className="text-light d-flex align-items-center">
                            <i style={{fontSize: 'small'}} className="fa fa-edit mx-1"></i>
                            <span style={{fontSize: 'small'}}>ویرایش اطلاعات</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center">
                        <div className="account-box-content col-12">
                            <div className="form-account-title">
                                <label htmlFor="home_phone">تلفن ثابت</label>
                                {/*<span className="invalid-feedback rtl m-0" style={{ display: errors["password"] ? 'block' : 'none' }}>{errors["password"]}</span>*/}
                                <input type="text"
                                       id="home_phone"
                                       className="number-email-input text-left my-2"
                                       name="home_phone"
                                       onChange={this.onChange}
                                       value={this.state.home_phone}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="account-box-content p-2">
                        <div className="form-row-account col-12">
                            <button onClick={this.handleRedirect} className={"btn " + (this.state.home_phone.length > 2 ?  "btn-login"  : "disable-btn")} disabled={this.state.home_phone.length > 2 ? false : true}>
                                ثبت تغیرات
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.nationalCodeModal} onHide={this.handleClose} dir="rtl">
                    <Modal.Header  className="primary-bg m-0 d-flex justify-content-center">
                        <Modal.Title className="text-light d-flex align-items-center">
                            <i style={{fontSize: 'small'}} className="fa fa-edit mx-1"></i>
                            <span style={{fontSize: 'small'}}>ویرایش اطلاعات</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center">
                        <div className="account-box-content col-12">
                            <div className="form-account-title">
                                <label htmlFor="national_code">کد ملی</label>
                                {/*<span className="invalid-feedback rtl m-0" style={{ display: errors["password"] ? 'block' : 'none' }}>{errors["password"]}</span>*/}
                                <input type="text"
                                       id="national_code"
                                       className="number-email-input text-left my-2"
                                       name="national_code"
                                       onChange={this.onChange}
                                       value={this.state.national_code}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="account-box-content p-2">
                        <div className="form-row-account col-12">
                            <button onClick={this.handleRedirect} className={"btn " + (this.state.national_code.length > 2 ?  "btn-login"  : "disable-btn")} disabled={this.state.national_code.length > 2 ? false : true}>
                                ثبت تغیرات
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>

                <div className="col-lg-9 col-md-9 col-xs-12 pl">
                    <div className="profile-content">
                        <div className="profile-stats">
                            <table className="table table-profile">
                                <tbody>
                                <tr>
                                    <td className="w-50">
                                        <div className="d-flex">
                                            <div className="title">نام و نام خانوادگی:</div>
                                            <div onClick={() => userInfo.fullname != null ? this.handleEditFullName(userInfo.fullname) : this.handleEditFullName('کاربر سرمد')} style={{FontSize: 'large'}} className="cursor-pointer text-info">
                                                <i className="fa fa-edit mx-2"></i>
                                            </div>
                                        </div>
                                        {
                                            userInfo.fullname != null ?
                                                <div className="value">{userInfo.fullname}</div>
                                                :
                                                <div className="value">کاربر سرمد</div>
                                        }
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <div className="title">پست الکترونیک :</div>
                                            <div onClick={() => userInfo.email != null ? this.handleEditEmail(userInfo.email) : this.handleEditEmail('ــ')} style={{FontSize: 'large'}} className="cursor-pointer text-info">
                                                <i className="fa fa-edit mx-2"></i>
                                            </div>
                                        </div>
                                        {
                                            userInfo.email != null ?
                                                <div className="value">userInfo.email</div>
                                                :
                                                <div className="value">ــ</div>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex">
                                            <div className="title">شماره تلفن همراه:</div>
                                            <div onClick={() => userInfo.phone != null ? this.handleEditPhone(userInfo.phone) : this.handleEditPhone('ــ')} style={{FontSize: 'large'}} className="cursor-pointer text-info">
                                                <i className="fa fa-edit mx-2"></i>
                                            </div>
                                        </div>
                                        {
                                            userInfo.phone != null ?
                                                <div className="value">{userInfo.phone}</div>
                                                :
                                                <div className="value">ــ</div>

                                        }
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <div className="title"> تلفن ثابت:</div>
                                            <div onClick={() => userInfo.home_phone != null ? this.handleEditHomePhone(userInfo.home_phone) : this.handleEditHomePhone('ــ')} style={{FontSize: 'large'}} className="cursor-pointer text-info">
                                                <i className="fa fa-edit mx-2"></i>
                                            </div>
                                        </div>
                                        {
                                            userInfo.home_phone != null ?
                                                <div className="value">{userInfo.home_phone}</div>
                                                :
                                                <div className="value">ــ</div>

                                        }

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="title">  تاریخ عضویت :</div>
                                        {
                                            userInfo.created_at != null ?
                                                <div className="value">{userInfo.created_at}</div>
                                                :
                                                <div className="value">ــ</div>

                                        }
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <div className="title"> کد ملی :</div>
                                            <div onClick={() => userInfo.national_code != null ? this.handleEditNationalCode(userInfo.national_code) : this.handleEditNationalCode('ــ')} style={{FontSize: 'large'}} className="cursor-pointer text-info">
                                                <i className="fa fa-edit mx-2"></i>
                                            </div>
                                        </div>
                                        {
                                            userInfo.national_code != null ?
                                                <div className="value">{userInfo.national_code}</div>
                                                :
                                                <div className="value">ــ</div>

                                        }
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="profile">
                                <ul className="mb-0">
                                    <li className="profile-item">
                                        <div className="title">نام و نام خانوادگی:</div>
                                        <div className="value">حسن شجاعی</div>
                                    </li>
                                    <li className="profile-item">
                                        <div className="title">پست الکترونیک :</div>
                                        <div className="value">info@digismart.com</div>
                                    </li>
                                    <li className="profile-item">
                                        <div className="title">شماره تلفن همراه:</div>
                                        <div className="value">*******0991</div>
                                    </li>
                                    <li className="profile-item">
                                        <div className="title">تاریخ عضویت:</div>
                                        <div className="value">۱۳۹۹/۰۱/۱۲</div>
                                    </li>
                                    <li className="profile-item">
                                        <div className="title"> دریافت خبرنامه :</div>
                                        <div className="value">بله</div>
                                    </li>
                                    <li className="profile-item">
                                        <div className="title"> کد ملی :</div>
                                        <div className="value">-</div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

contentSection.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(contentSection);
