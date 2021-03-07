import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Modal from "react-bootstrap/Modal";
import {fetchSearch} from "../../../../redux/actions/SearchProductAction";
import {setClearSingleProduct} from "../../../../redux/actions/GetProductAction";
import {
    updateEmail,
    updateFullname,
    updateHomePhone,
    updateNationalCode,
    updatePhone
} from "../../../../redux/actions/UserAction";
import {loginSuccess} from "../../../../redux/actions/AuthAction";
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
        const userInfo = this.props.auth.userInfo;
        let fullname = ''
        if(userInfo.fullname){
            fullname = userInfo.fullname
        }else{
            fullname = 'کاربرسرمد'
        }
        document.title = "حساب کاربری | " + fullname
    }

    handleUpdateFullname = () => {
        const data = {
            fullname: this.state.fullname,
        }
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        this.props.getToUpdateFullname(data,config)
    }
    handleUpdatePhone = () => {
        const data = {
            phone: this.state.phone,
        }
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        this.props.getToUpdatePhone(data,config)
    }
    handleUpdateHomePhone = () => {
        const data = {
            home_phone: this.state.home_phone,
        }
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        this.props.getToUpdateHomePhone(data,config)
    }
    handleUpdateEmail = () => {
        const data = {
            email: this.state.email,
        }
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        this.props.getToUpdateEmail(data,config)
    }
    handleUpdateNationalCode= () => {
        const data = {
            national_code: this.state.national_code,
        }
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        this.props.getToUpdateNationalCode(data,config)
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
    handleClsInput = () => {
        this.setState({
            fullname:'',
            email:'',
            phone:'',
            home_phone: '',
            national_code: '',
        })
    }
    render() {
        const userInfo = this.props.auth.userInfo;
         return (
            <React.Fragment>
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
                                       onClick={this.handleClsInput}
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
                        <div className="d-flex form-row-account col-12">
                            <button onClick={this.handleUpdateFullname} className={"mx-1 col btn " + (this.state.fullname.length > 2 ?  "btn-login"  : "disable-btn")} disabled={this.state.fullname.length > 2 ? false : true}>
                                ثبت تغیرات
                            </button>
                            <button onClick={this.handleClose} className={"mx-1 col btn btn-dark"} >
                                بازگشت
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
                                       onClick={this.handleClsInput}
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
                        <div className="d-flex form-row-account col-12">
                            <button onClick={this.handleUpdateEmail} className={"mx-1 col btn " + (this.state.email.length > 2 ?  "btn-login"  : "disable-btn")} disabled={this.state.email.length > 2 ? false : true}>
                                ثبت تغیرات
                            </button>
                            <button onClick={this.handleClose} className={"mx-1 col btn btn-dark"} >
                                بازگشت
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
                                <input type="tel"
                                       onClick={this.handleClsInput}
                                       id="phone"
                                       maxLength={11}
                                       className="number-email-input text-left my-2"
                                       name="phone"
                                       onChange={this.onChange}
                                       value={this.state.phone}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="account-box-content p-2">
                        <div className="d-flex form-row-account col-12">
                            <button onClick={this.handleUpdatePhone} className={"mx-1 col btn " + (this.state.phone.length > 2 ?  "btn-login"  : "disable-btn")} disabled={this.state.phone.length > 2 ? false : true}>
                                ثبت تغیرات
                            </button>
                            <button onClick={this.handleClose} className={"mx-1 col btn btn-dark"} >
                                بازگشت
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
                                <input type="tel"
                                       onClick={this.handleClsInput}
                                       maxLength={11}
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
                        <div className="d-flex form-row-account col-12">
                            <button onClick={this.handleUpdateHomePhone} className={"mx-1 col btn " + (this.state.home_phone.length > 2 ?  "btn-login"  : "disable-btn")} disabled={this.state.home_phone.length > 2 ? false : true}>
                                ثبت تغیرات
                            </button>
                            <button onClick={this.handleClose} className={"mx-1 col btn btn-dark"} >
                                بازگشت
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
                                <input type="tel"
                                       onClick={this.handleClsInput}
                                       maxLength={10}
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
                        <div className="d-flex form-row-account col-12">
                            <button onClick={this.handleUpdateNationalCode} className={"mx-1 col btn " + (this.state.national_code.length > 2 ?  "btn-login"  : "disable-btn")} disabled={this.state.national_code.length > 2 ? false : true}>
                                ثبت تغیرات
                            </button>
                            <button onClick={this.handleClose} className={"mx-1 col btn btn-dark"} >
                                بازگشت
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
                                                <div className="value">{userInfo.email}</div>
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
                                                <div className="value">
                                                    {
                                                        userInfo.created_at === 0 ? 0 :
                                                            userInfo.created_at.toString().substring(10, 0)
                                                                .replace(/-/g, "/")
                                                    }

                                                </div>
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
            </React.Fragment>
        );
    }
}

contentSection.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getToUpdateFullname: (data,config) => {
            dispatch(updateFullname(data,config , callback => {
            dispatch(loginSuccess(callback))
            }))
        },
        getToUpdatePhone: (data,config) => {
          dispatch(updatePhone(data,config, callback => {
              dispatch(loginSuccess(callback))
          }))
        },
        getToUpdateHomePhone: (data,config) => {
            dispatch(updateHomePhone(data,config, callback => {
                dispatch(loginSuccess(callback))
            }))
        },
        getToUpdateEmail: (data,config) => {
            dispatch(updateEmail(data, config, callback => {
                dispatch(loginSuccess(callback))
            }))
        },
        getToUpdateNationalCode: (data,config) => {
            dispatch(updateNationalCode(data, config, callback => {
                dispatch(loginSuccess(callback))
            }))
        },

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(contentSection);
