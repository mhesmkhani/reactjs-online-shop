import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SideSection extends Component {
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
                <div className="col-lg-3 col-md-3 col-xs-12 pr">
                    <div className="sidebar-profile sidebar-navigation">
                        <section className="profile-box">
                            <header className="profile-box-header-inline">
                                <div className="profile-avatar user-avatar profile-img">
                                    <img src="assets/images/man.png"/>
                                </div>
                            </header>
                            <footer className="profile-box-content-footer">
                                <span className="profile-box-nameuser">حسن شجاعی</span>
                                <span
                                    className="profile-box-registery-date">عضویت در سایت 2 پیش</span>
                                <span className="profile-box-phone">شماره همراه : *******0991</span>
                                <div className="profile-box-tabs">
                                    <a href="#" className="profile-box-tab-sign-out"><i
                                        className="mdi mdi-logout-variant"></i>خروج از حساب</a>
                                </div>
                            </footer>
                        </section>
                        <section className="profile-box">
                            <ul className="profile-account-navs">
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <a href="#" className="active"><i
                                        className="mdi mdi-account-outline"></i>
                                        پروفایل
                                    </a>
                                </li>
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <a href="#" className=""><i className="mdi mdi-cart"></i>
                                        همه سفارش ها
                                    </a>
                                </li>
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <a href="#" className=""><i className="mdi mdi-heart"></i>
                                        لیست علاقه مندی
                                    </a>
                                </li>
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <a href="#" className=""><i className="mdi mdi-map-outline"></i>
                                        آدرس ها
                                    </a>
                                </li>
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <a href="#" className=""><i
                                        className="mdi mdi-email-open-outline"></i>
                                        نظرات
                                    </a>
                                </li>
                                <li className="profile-account-nav-item navigation-link-dashboard">
                                    <a href="#" className=""><i
                                        className="mdi mdi-tooltip-text-outline"></i>
                                        اطلاعات حساب
                                    </a>
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

export default SideSection;