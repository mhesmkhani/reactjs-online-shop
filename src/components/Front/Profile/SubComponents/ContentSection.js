import React, {Component} from 'react';
import PropTypes from 'prop-types';

class contentSection extends Component {
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
                <div className="col-lg-9 col-md-9 col-xs-12 pl">
                    <div className="profile-content">
                        <div className="profile-stats">
                            <table className="table table-profile">
                                <tbody>
                                <tr>
                                    <td className="w-50">
                                        <div className="title">نام و نام خانوادگی:</div>
                                        <div className="value">حسن شجاعی</div>
                                    </td>
                                    <td>
                                        <div className="title">پست الکترونیک :</div>
                                        <div className="value">info@digismart.com</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="title">شماره تلفن همراه:</div>
                                        <div className="value">*******0991</div>
                                    </td>
                                    <td>
                                        <div className="title">تاریخ عضویت:</div>
                                        <div className="value">۱۳۹۹/۰۱/۱۲</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="title"> دریافت خبرنامه :</div>
                                        <div className="value">بله</div>
                                    </td>
                                    <td>
                                        <div className="title"> کد ملی :</div>
                                        <div className="value">-</div>
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
                            <div className="profile-edit-action">
                                <a href="#" className="link-spoiler-edit btn btn-secondary">ویرایش
                                    اطلاعات</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

contentSection.propTypes = {};

export default contentSection;