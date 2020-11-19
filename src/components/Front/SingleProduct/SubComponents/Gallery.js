import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import OwlCarousel from 'react-owl-carousel2';
import ReactImageZoom from 'react-image-zoom';

// import 'react-owl-carousel2/style.css'
import $ from 'jquery';

import {NavLink} from "react-router-dom";
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImage: '',
        }

    }

    componentWillMount() {

    }
    componentDidMount() {
    }
    handleSetImage = (data) => {
        console.log(data)
       this.setState({
           mainImage: data
       })
    }
    render() {
        const {mainImage} = this.state;
        const singleProdcut = this.props.singleProduct.singleProduct;
        const options = {
            rtl: true,
            loop: false,
            dots: false,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 2,
                },
                1000:{
                    items: 4
                }
            }
        };
        return (
            <div>
                <div className="col-lg-5 col-xs-12 pr d-block ">
                    <section className="product-gallery">
                        <div className="gallery">
                            <div className="gallery-item">
                                <div>
                                    <ul className="gallery-actions">
                                        <li className="mx-1">
                                            <a href="#" className="btn-option add-product-wishes">
                                                <i className="mdi mdi-heart-outline"></i>
                                                <span>محبوب</span>
                                            </a>
                                        </li>
                                        <li className="mx-1 option-social">
                                            <a href="#" className="btn-option btn-option-social"
                                               data-toggle="modal" data-target="#option-social">
                                                <i className="mdi mdi-share"></i>
                                                <span>اشتراک</span>
                                            </a>
                                            <div className="modal fade" id="option-social"
                                                 tabIndex="-1" role="dialog"
                                                 aria-labelledby="exampleModalCenterTitle"
                                                 aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered"
                                                     role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title"
                                                                id="exampleModalCenterTitle">اشتراک
                                                                گذاری</h5>
                                                            <button type="button" className="close"
                                                                    data-dismiss="modal"
                                                                    aria-label="Close">
                                                                                        <span
                                                                                            aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="title">با استفاده از
                                                                روش‌های زیر می‌توانید این صفحه
                                                                را با دوستان خود به اشتراک
                                                                بگذارید.
                                                            </div>
                                                            <form action="#"
                                                                  className="email-sharing">
                                                                <h5 className="share-title">ارسال از
                                                                    طریق ایمیل</h5>
                                                                <div
                                                                    className="input-group-sharing">
                                                                    <input type="email"
                                                                           className="share-email-address form-control"
                                                                           id="share-email"/>
                                                                    <button
                                                                        className="btn-send-email btn btn-primary"
                                                                        type="submit">ارسال
                                                                        ایمیل
                                                                    </button>
                                                                </div>
                                                            </form>
                                                            <div className="share-options">
                                                                <div
                                                                    className="share-social-buttons text-center">
                                                                    <a href="#"
                                                                       className="share-social share-social-twitter">
                                                                        <i className="mdi mdi-twitter"></i>
                                                                    </a>
                                                                    <a href="#"
                                                                       className="share-social share-social-facebook">
                                                                        <i className="mdi mdi-facebook"></i>
                                                                    </a>
                                                                    <a href="#"
                                                                       className="share-social share-social-whatsapp">
                                                                        <i className="mdi mdi-whatsapp"></i>
                                                                    </a>
                                                                    <a href="#"
                                                                       className="share-social share-social-email-outline">
                                                                        <i className="mdi mdi-email-outline"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="form-share-col">
                                                                <input className="ui-url-field"
                                                                       type="url"
                                                                       value="https://www.digikala.com/product/dkp-1672478"
                                                                       readOnly=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mx-1 option-alarm">
                                            <a href="#" className="btn-option btn-option-alarm"
                                               data-toggle="modal"
                                               data-target="#btn-option-alarm">
                                                <i className="mdi mdi-bell-outline"></i>
                                                <span>اطلاع‌رسانی</span>
                                            </a>
                                            <div className="modal fade" id="btn-option-alarm"
                                                 tabIndex="-1" role="dialog"
                                                 aria-labelledby="exampleModalCenterTitle"
                                                 aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered"
                                                     role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title"
                                                                id="exampleModalCenterTitle">به
                                                                من اطلاع بده</h5>
                                                            <button type="button" className="close"
                                                                    data-dismiss="modal"
                                                                    aria-label="Close">
                                                                                        <span
                                                                                            aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div
                                                                className="form-notification-title">از
                                                                طریق:
                                                            </div>
                                                            <div className="form-auth-row">
                                                                <label htmlFor="#"
                                                                       className="ui-checkbox mt-1">
                                                                    <input type="checkbox"
                                                                           value="1"
                                                                           name="login"
                                                                           id="remember"/>
                                                                    <span
                                                                        className="ui-checkbox-check"></span>
                                                                </label>
                                                                <label htmlFor="remember"
                                                                       className="remember-me mr-0">ایمیل
                                                                    به
                                                                    info@digismart.com</label>
                                                            </div>
                                                            <div className="form-auth-row">
                                                                <label htmlFor="#"
                                                                       className="ui-checkbox mt-1">
                                                                    <input type="checkbox"
                                                                           value="1"
                                                                           name="login"
                                                                           id="remember"/>
                                                                    <span
                                                                        className="ui-checkbox-check"></span>
                                                                </label>
                                                                <label htmlFor="remember"
                                                                       className="remember-me mr-0">پیامک
                                                                    به *******0991</label>
                                                            </div>
                                                            <div className="form-auth-row">
                                                                <label htmlFor="#"
                                                                       className="ui-checkbox mt-1">
                                                                    <input type="checkbox"
                                                                           value="1"
                                                                           name="login"
                                                                           id="remember"/>
                                                                    <span
                                                                        className="ui-checkbox-check"></span>
                                                                </label>
                                                                <label htmlFor="remember"
                                                                       className="remember-me mr-0">سیستم
                                                                    پیام شخصی دیجی
                                                                    اسمارت</label>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button"
                                                                    className="btn btn-primary ml-2">ثبت
                                                            </button>
                                                            <button type="button"
                                                                    className="btn btn-secondary"
                                                                    data-dismiss="modal">بازگشت
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mx-1 Three-dimensional">
                                            <a href="#" className="btn-option btn-Three-dimensional"
                                               data-toggle="modal" data-target="#more-product">
                                                <i className="mdi mdi-more"></i>
                                                <span>نمایش بیشتر</span>
                                            </a>
                                            <div className="modal fade" id="more-product"
                                                 tabIndex="-1" role="dialog"
                                                 aria-labelledby="exampleModalCenterTitle"
                                                 aria-hidden="true">
                                                <div
                                                    className="modal-dialog modal-dialog-centered more-product"
                                                    role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-body">
                                                            <div id="custom-events">
                                                                {
                                                                    singleProdcut.map(product => product.images.map(image =>
                                                                        <a href={"http://127.0.0.1:8000/" + (image.filename)}>
                                                                            <img
                                                                                src={"http://127.0.0.1:8000/" + (image.filename)}/>
                                                                        </a>
                                                                    ))}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mx-1 Three-dimensional">
                                            <a href="product-comparison.html"
                                               className="btn-option btn-compare">
                                                <i className="mdi mdi-compare"></i>
                                                <span>مقایسه</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-img">
                                    {singleProdcut.map(item =>
                                        <a href="#" >
                                            <img className="background-main-image" src={"http://127.0.0.1:8000/" +(mainImage.length > 1 ? mainImage : item.images[0].filename)} width={500}/>
                                        </a>
                                    )}
                                    <div id="gallery_01f"   style={{width: 500, float: 'right'}}>
                                        <ul className="gallery-items" id="gallery-slider">
                                            <OwlCarousel
                                                options={options}
                                           >
                                            {singleProdcut.map(item => item.images.map(image =>
                                                <li className="item">
                                                    <div onClick={() => this.handleSetImage(image.filename)} className="elevatezoom-gallery  active"
                                                       data-update=""
                                                       data-image={"http://127.0.0.1:8000/" + (image.resized_name)}
                                                       data-zoom-image={"http://127.0.0.1:8000/" + (image.resized_name)}>
                                                        <img className="cursor-pointer" src={"http://127.0.0.1:8000/" + (image.resized_name)} style={{width: 100}}/>
                                                    </div>
                                                </li>
                                            ))}
                                            </OwlCarousel>
                                        </ul>
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

Gallery.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        singleProduct: state.singleProduct
    }
}
export default connect(mapStateToProps)(Gallery);
