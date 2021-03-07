import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Responsive extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

    render() {

        return (
            <React.Fragment>

                {/*responsive-megamenu-mobile*/}
                <nav className="sidebar">
                    <div className="nav-header">
                        <div className="header-cover"></div>
                        <div className="logo-wrap">
                            <a className="logo-icon" href="#"><img alt="logo-icon"
                                                                   src="assets/images/logo.png" width="40"/></a>
                        </div>
                    </div>
                    <ul className="nav-categories ul-base">
                        <li><a href="#" className="collapsed" type="button" data-toggle="collapse"
                               data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <i className="mdi mdi-chevron-down"></i>کالای دیجیتال</a>

                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                 data-parent="#accordionExample" >
                                <ul>
                                    <li className="has-sub"><a href="#" className="category-level-2">لوازم
                                        جانبی گوشی</a>
                                        <ul>
                                            <li><a href="#" className="category-level-3">کیف و کاور گوشی</a>
                                            </li>
                                            <li><a href="#" className="category-level-3">پاور بانک(شارژر
                                                همراه)</a></li>
                                            <li><a href="#" className="category-level-3">پایه نگهدارنده
                                                گوشی</a></li>
                                            <li><a href="#" className="category-level-3">همه موارد این
                                                دسته</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-sub"><a href="#" className="category-level-2">گوشی
                                        موبایل</a>
                                        <ul>
                                            <li><a href="#" className="category-level-3">سامسونگ</a></li>
                                            <li><a href="#" className="category-level-3">هوآوی</a></li>
                                            <li><a href="#" className="category-level-3">اپل</a></li>
                                            <li><a href="#" className="category-level-3">شیائومی</a></li>
                                            <li><a href="#" className="category-level-3">آنر</a></li>
                                            <li><a href="#" className="category-level-3">نوکیا</a></li>
                                            <li><a href="#" className="category-level-3">همه موارد این
                                                دسته</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-sub"><a href="#"
                                                               className="category-level-2">دوربین</a>
                                        <ul>
                                            <li><a href="#" className="category-level-3">دوربین عکاسی
                                                دیجیتال</a></li>
                                            <li><a href="#" className="category-level-3">دوربین ورزشی و فیلم
                                                برداری</a></li>
                                            <li><a href="#" className="category-level-3">دوربین چاپ سریع</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="nav-btn nav-slider">
                    <span className="linee1"></span>
                    <span className="linee2"></span>
                    <span className="linee3"></span>
                </div>
                <div className="overlay"></div>
                {/*responsive-megamenu-mobile*/}
            </React.Fragment>
        );
    }
}

Responsive.propTypes = {};

export default Responsive;
