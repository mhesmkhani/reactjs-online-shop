import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Content extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }


    componentWillUnmount() {

    }

    render() {
        const singleProdcut = this.props.singleProduct.singleProduct;

        return (
            <div>
                <div className="col-lg-7 col-xs-12 pl mt-5 d-block">
                    <section className="product-info">
                        <div className="product-headline">
                            <h1 className="product-title">
                                {singleProdcut.map(item => item.title)}
                            </h1>
                            <div className="product-guaranteed text-success">
                                12
                                <span>فروش موفق</span>
                            </div>
                        </div>
                        <div className="product-attributes">
                            <div className="product-config">
                                <span
                                    className="product-title-en">Samsung Galaxy Note 10 Dual SIM 256GB Mobile Phone</span>
                                <div className="product-rate">
                                    <i className="fa fa-star active"></i>
                                    <i className="fa fa-star active"></i>
                                    <i className="fa fa-star active"></i>
                                    <i className="fa fa-star active"></i>
                                    <i className="fa fa-star active"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-config-wrapper">
                            <div className="product-directory">
                                <ul>
                                    <li>
                                                <span>
                                                    <i className="fa fa-archive"></i> دسته:
                                                </span>
                                        <a href="#" className="product-link product-cat-title">کالای
                                            دیجیتال</a>
                                        ,
                                        <a href="#"
                                           className="product-link product-cat-title">موبایل</a>
                                    </li>
                                    <li>
                                                <span>
                                                    <i className="fa fa-tags"></i> برچسب:
                                                </span>
                                        <a href="#"
                                           className="product-link product-tag-title">سامسونگ</a>
                                    </li>
                                    <li>
                                                <span>
                                                    برند:
                                                </span>
                                        <a href="#"
                                           className="product-link product-tag-title">سامسونگ</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col=lg-6 col-md-6 col-xs-12 pr">
                                <div className="product-variants">
                                    <span>رنگ بندی: </span>
                                    <ul className="js-product-variants">
                                        <li className="ui-variant">
                                            <label htmlFor="#" className="ui-variant-color">
                                                                        <span className="ui-variant-shape"
                                                                              style={{backgroundColor: '#56abef'}}></span>
                                                <input type="radio" value="4" name="color"
                                                       id="variant" className="js-variant-selector"
                                                       checked=""/>
                                                <span className="ui-variant-check"></span>
                                            </label>
                                        </li>
                                        <li className="ui-variant">
                                            <label htmlFor="#" className="ui-variant-color">
                                                                        <span className="ui-variant-shape"
                                                                              style={{backgroundColor: '#a97eca'}}></span>
                                                <input type="radio" value="4" name="color"
                                                       id="variant"
                                                       className="js-variant-selector"/>
                                                <span className="ui-variant-check"></span>
                                            </label>
                                        </li>
                                        <li className="ui-variant">
                                            <label htmlFor="#" className="ui-variant-color">
                                                                        <span className="ui-variant-shape"
                                                                              style={{backgroundColor: '#a97eca'}}></span>
                                                <input type="radio" value="4" name="color"
                                                       id="variant"
                                                       className="js-variant-selector"/>
                                                <span className="ui-variant-check"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-params pt-3">
                                    <ul data-title="ویژگی‌های محصول">
                                        <li>
                                            <span>سیستم عامل: </span>
                                            <span>Android</span>
                                        </li>
                                        <li>
                                            <span>شبکه های ارتباطی: </span>
                                            <span>2G، 3G، 4G</span>
                                        </li>
                                        <li>
                                            <span>مقدار RAM: </span>
                                            <span> 8 گیگابایت</span>
                                        </li>
                                        <li>
                                            <span>ویژگی‌های خاص: </span>
                                            <span>  مقاوم در برابر آب
                                                        دارای بدنه مقاوم
                                                        فبلت
                                                        مجهز به حس‌گر اثرانگشت
                                                        مناسب عکاسی سلفی
                                                        مناسب بازی
                                                        دارای قلم
                                                    </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-price-survey-question">
                                    آیا قیمت مناسب‌تری سراغ دارید؟
                                    <div className="answers">
                                        <a href="#"
                                           className="product-price-survery-answer price-yes btn btn-secondary">بلی</a>
                                        <a href="#"
                                           className="product-price-survery-answer price-no btn btn-secondary">خیر</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col=lg-6 col-md-6 col-xs-12 pr">
                                <div className="product-seller-info">
                                    <div className="seller-info-changable">
                                        <div className="product-seller-row vendor">
                                            <span className="title"> فروشنده:</span>
                                            <a href="#" className="product-name">دیجی اسمارت</a>
                                        </div>
                                        <div className="product-seller-row guarantee">
                                            <span className="title"> گارانتی:</span>
                                            <a href="#" className="product-name">۱۸ ماهه دیجی
                                                اسمارت</a>
                                        </div>
                                        <div className="product-seller-row price">
                                            <span className="title"> قیمت:</span>
                                            <a href="#" className="product-name">
                                                        <span className="amount">
                                                            14,350,000
                                                            <span>تومان</span>
                                                        </span>
                                            </a>
                                        </div>
                                        <div className="product-seller-row guarantee">
                                            <span className="title mt-3"> تعداد:</span>
                                            <div className="quantity pl">
                                                <input type="number" min="1" max="100" step="1"
                                                       value="1"/>
                                                <div className="quantity-nav">
                                                    <div
                                                        className="quantity-button quantity-up">+
                                                    </div>
                                                    <div
                                                        className="quantity-button quantity-down">-
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-seller-row add-to-cart">
                                            <a href="#" className="btn-add-to-cart btn btn-primary">
                                                <span className="btn-add-to-cart-txt">افزودن به سبد خرید</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

Content.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        singleProduct: state.singleProduct
    }
}
export default connect(mapStateToProps)(Content);
