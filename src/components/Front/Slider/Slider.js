import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div className="container-main">
                    <div className="d-block">
                        <div className="col-lg-8 col-xs-12 pr">
                            <div className="slider-main-container d-block">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                            className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="assets/images/slider-main/sm-1.jpg" className="d-block w-100"
                                                 alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/slider-main/sm-2.jpg" className="d-block w-100"
                                                 alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/slider-main/sm-3.jpg" className="d-block w-100"
                                                 alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/slider-main/sm-4.jpg" className="d-block w-100"
                                                 alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/slider-main/sm-5.jpg" className="d-block w-100"
                                                 alt="..."/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                       data-slide="prev">
                                        <span className="fa fa-angle-left" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                       data-slide="next">
                                        <span className="fa fa-angle-right" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-xs-12 pl mt-1">
                            <div className="adplacement-container-column">
                                <a href="#" className="adplacement-item">
                                    <div className="adplacement-sponsored-box">
                                        <img src="assets/images/adplacement/a-1.jpg"/>
                                    </div>
                                </a>
                                <a href="#" className="adplacement-item">
                                    <div className="adplacement-sponsored-box">
                                        <img src="assets/images/adplacement/a-2.jpg"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-12 pr">
                            <div className="adplacement-container-column mt-4">
                                <a href="#" className="adplacement-item img-banner">
                                    <div className="adplacement-sponsored-box">
                                        <img src="assets/images/adplacement/a-3.jpg"/>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="slider-widget-products slider-content-tabs slider-amazing-product">
                                <div className="widget widget-product card slider-content-tabs">
                                    <header className="card-header">
                                        <span className="title-one">محصولات شگفت انگیز</span>
                                        <h3 className="card-title"></h3>
                                    </header>
                                    <div
                                        className="product-carousel product-amazing owl-carousel owl-theme owl-rtl owl-loaded owl-drag">
                                        <div className="owl-stage-outer">
                                            <div className="owl-stage">
                                                <div className="owl-item tab-item active">

                                                    <div className="item">
                                                        <a href="#" className="d-block hover-img-link">
                                                            <img src="assets/images/slider-amazing/as-1.jpg"
                                                                 className="img-fluid" alt=""/>
                                                        </a>
                                                        <h2 className="post-title">
                                                            <a href="#">
                                                                لپ تاپ ۱۵ اینچی ایسوس مدل VivoBook Flip TP510UQ – C
                                                            </a>
                                                        </h2>
                                                        <div className="price">
                                                            <del><span>12,000,000<span>تومان</span></span></del>
                                                            <ins><span>11,180,000<span>تومان</span></span></ins>
                                                        </div>
                                                        <div className="countdown-timer">
                                                            <div className="countdown h4"
                                                                 data-date-time="10/10/2020 12:00"
                                                                 data-labels="{&quot;label-day&quot;: &quot;روز&quot;, &quot;label-hour&quot;: &quot;ساعت&quot;, &quot;label-minute&quot;: &quot;دقیقه&quot;, &quot;label-second&quot;: &quot;ثانیه&quot;}">
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">155</div>
                                                                    <div className="countdown-label">روز</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">10</div>
                                                                    <div className="countdown-label">ساعت</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">16</div>
                                                                    <div className="countdown-label">دقیقه</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">01</div>
                                                                    <div className="countdown-label">ثانیه</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item tab-item active">
                                                    <div className="item">
                                                        <a href="#" className="d-block hover-img-link">
                                                            <img src="assets/images/slider-amazing/as-2.jpg"
                                                                 className="img-fluid" alt=""/>
                                                        </a>
                                                        <h2 className="post-title">
                                                            <a href="#">
                                                                یخچال و فریزر سامسونگ مدل HM34
                                                            </a>
                                                        </h2>
                                                        <div className="price">
                                                            <del><span>9,000,000<span>تومان</span></span></del>
                                                            <ins><span>8,500,000<span>تومان</span></span></ins>
                                                        </div>
                                                        <div className="countdown-timer">
                                                            <div className="countdown h4"
                                                                 data-date-time="10/10/2020 12:00"
                                                                 data-labels="{&quot;label-day&quot;: &quot;روز&quot;, &quot;label-hour&quot;: &quot;ساعت&quot;, &quot;label-minute&quot;: &quot;دقیقه&quot;, &quot;label-second&quot;: &quot;ثانیه&quot;}">
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">155</div>
                                                                    <div className="countdown-label">روز</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">10</div>
                                                                    <div className="countdown-label">ساعت</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">16</div>
                                                                    <div className="countdown-label">دقیقه</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">01</div>
                                                                    <div className="countdown-label">ثانیه</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item tab-item active">
                                                    <div className="item">
                                                        <a href="#" className="d-block hover-img-link">
                                                            <img src="assets/images/slider-amazing/as-3.jpg"
                                                                 className="img-fluid" alt=""/>
                                                        </a>
                                                        <h2 className="post-title">
                                                            <a href="#">
                                                                کامپیوتر همه کاره 21.5 اینچی ایسوس مدل AIO V222UAK-B
                                                            </a>
                                                        </h2>
                                                        <div className="price">
                                                            <del><span>12,000,000<span>تومان</span></span></del>
                                                            <ins><span>11,180,000<span>تومان</span></span></ins>
                                                        </div>
                                                        <div className="countdown-timer">
                                                            <div className="countdown h4"
                                                                 data-date-time="10/10/2020 12:00"
                                                                 data-labels="{&quot;label-day&quot;: &quot;روز&quot;, &quot;label-hour&quot;: &quot;ساعت&quot;, &quot;label-minute&quot;: &quot;دقیقه&quot;, &quot;label-second&quot;: &quot;ثانیه&quot;}">
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">155</div>
                                                                    <div className="countdown-label">روز</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">10</div>
                                                                    <div className="countdown-label">ساعت</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">16</div>
                                                                    <div className="countdown-label">دقیقه</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">01</div>
                                                                    <div className="countdown-label">ثانیه</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item tab-item active">
                                                    <div className="item">
                                                        <a href="#" className="d-block hover-img-link">
                                                            <img src="assets/images/slider-amazing/as-4.jpg"
                                                                 className="img-fluid" alt=""/>
                                                        </a>
                                                        <h2 className="post-title">
                                                            <a href="#">
                                                                شارژر بی سیم مدل EP-NG930
                                                            </a>
                                                        </h2>
                                                        <div className="price">
                                                            <del><span>8,000,000<span>تومان</span></span></del>
                                                            <ins><span>6,500,000<span>تومان</span></span></ins>
                                                        </div>
                                                        <div className="countdown-timer">
                                                            <div className="countdown h4"
                                                                 data-date-time="10/10/2020 12:00"
                                                                 data-labels="{&quot;label-day&quot;: &quot;روز&quot;, &quot;label-hour&quot;: &quot;ساعت&quot;, &quot;label-minute&quot;: &quot;دقیقه&quot;, &quot;label-second&quot;: &quot;ثانیه&quot;}">
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">155</div>
                                                                    <div className="countdown-label">روز</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">10</div>
                                                                    <div className="countdown-label">ساعت</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">16</div>
                                                                    <div className="countdown-label">دقیقه</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">01</div>
                                                                    <div className="countdown-label">ثانیه</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item tab-item">
                                                    <div className="item">
                                                        <a href="#" className="d-block hover-img-link">
                                                            <img src="assets/images/slider-amazing/as-5.jpg"
                                                                 className="img-fluid" alt=""/>
                                                        </a>
                                                        <h2 className="post-title">
                                                            <a href="#">
                                                                تلویزیون ال ای دی هوشمند سامسونگ مدل 55NU7900 سایز 55
                                                                اینچ
                                                            </a>
                                                        </h2>
                                                        <div className="price">
                                                            <del><span>14,500,000<span>تومان</span></span></del>
                                                            <ins><span>13,500,000<span>تومان</span></span></ins>
                                                        </div>
                                                        <div className="countdown-timer">
                                                            <div className="countdown h4"
                                                                 data-date-time="10/10/2020 12:00"
                                                                 data-labels="{&quot;label-day&quot;: &quot;روز&quot;, &quot;label-hour&quot;: &quot;ساعت&quot;, &quot;label-minute&quot;: &quot;دقیقه&quot;, &quot;label-second&quot;: &quot;ثانیه&quot;}">
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">155</div>
                                                                    <div className="countdown-label">روز</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">10</div>
                                                                    <div className="countdown-label">ساعت</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">16</div>
                                                                    <div className="countdown-label">دقیقه</div>
                                                                </div>
                                                                <div className="countdown-item">
                                                                    <div className="countdown-value">01</div>
                                                                    <div className="countdown-label">ثانیه</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-nav">
                                            <button type="button" role="presentation" className="owl-prev disabled">
                                                <i className="fa fa-angle-right"></i>
                                            </button>
                                            <button type="button" role="presentation" className="owl-next">
                                                <i className="fa fa-angle-left"></i>
                                            </button>
                                        </div>
                                        <div className="owl-dots disabled"></div>
                                        <div className="owl-nav">
                                            <button type="button" role="presentation" className="owl-prev disabled"><i
                                                className="fa fa-angle-right"></i></button>
                                            <button type="button" role="presentation" className="owl-next"><i
                                                className="fa fa-angle-left"></i></button>
                                        </div>
                                        <div className="owl-dots disabled"></div>
                                        <div className="owl-nav">
                                            <button type="button" role="presentation" className="owl-prev disabled"><i
                                                className="fa fa-angle-right"></i></button>
                                            <button type="button" role="presentation" className="owl-next"><i
                                                className="fa fa-angle-left"></i></button>
                                        </div>
                                        <div className="owl-dots disabled"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-xs-12 pl">
                            <div className="content-widget-amazing">
                                <section id="amazing-slider" className="carousel slide carousel-fade card"
                                         data-ride="carousel">
                                    <div className="row m-0">
                                        <ol className="carousel-indicators pr-0 d-flex flex-column col-lg-3">
                                            <li className="active" data-target="#amazing-slider" data-slide-to="0">
                                                <span>لپ تاپ ۱۵ اینچی</span>
                                            </li>
                                            <li data-target="#amazing-slider" data-slide-to="1" className="">
                                                <span>یخچال و فریزر</span>
                                            </li>
                                            <li data-target="#amazing-slider" data-slide-to="2" className="">
                                                <span>کامپیوتر همه کاره</span>
                                            </li>
                                            <li data-target="#amazing-slider" data-slide-to="3" className="">
                                                <span>شارژر بی سیم</span>
                                            </li>
                                            <li data-target="#amazing-slider" data-slide-to="4" className="">
                                                <span>تلویزیون سامسونگ</span>
                                            </li>
                                        </ol>
                                        <div className="carousel-inner p-0 col-12 col-lg-9">
                                            <div className="carousel-item active">
                                                <div className="row m-0">
                                                    <div className="right-col col-5 d-flex align-items-center">
                                                        <a className="w-100 text-center img-link-amazing" href="#">
                                                            <img src="assets/images/slider-amazing/as-1.jpg"
                                                                 className="img-fluid" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="discount">
                                                    <span className="discount-percent">6.2
                                                        <i className="fa fa-percent"></i>
                                                    </span>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="#"> لپ تاپ ۱۵ اینچی ایسوس مدل VivoBook Flip TP510UQ
                                                                – C </a>
                                                        </h2>
                                                        <div className="price text-center">
                                                            <del><span>12,000,000<span>تومان</span></span></del>
                                                            <ins><span>11,180,000<span>تومان</span></span></ins>
                                                        </div>
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">ظرفیت حافظه داخلی: </span>
                                                                <span className="text">یک ترابایت </span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">ظرفیت حافظه رم: </span>
                                                                <span className="text">8 گیگابایت </span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">سری پردازنده: </span>
                                                                <span className="text">Core i5 </span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">دقت صفحه نمایش: </span>
                                                                <span className="text"> 1080 × 1920 </span>
                                                            </li>
                                                        </ul>
                                                        <div className="countdown-timer">
                                                            <div className="countdown h4"
                                                                 data-date-time="10/10/2020 12:00"
                                                                 data-labels='{"label-day": "روز", "label-hour": "ساعت", "label-minute": "دقیقه", "label-second": "ثانیه"}'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row m-0">
                                                    <div className="right-col col-5 d-flex align-items-center">
                                                        <a className="w-100 text-center img-link-amazing" href="#">
                                                            <img src="assets/images/slider-amazing/as-2.jpg"
                                                                 className="img-fluid" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="discount">
                                                    <span className="discount-percent">3.2
                                                        <i className="fa fa-percent"></i>
                                                    </span>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="#"> یخچال و فریزر سامسونگ مدل HM34 </a>
                                                        </h2>
                                                        <div className="price text-center">
                                                            <del><span>9,000,000<span>تومان</span></span></del>
                                                            <ins><span>8,500,000<span>تومان</span></span></ins>
                                                        </div>
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">قفل کودک: </span>
                                                                <span className="text">دارد</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">اخطار باز ماندن درب: </span>
                                                                <span className="text">بله</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">آبسردکن: </span>
                                                                <span className="text">دارد</span>
                                                            </li>
                                                        </ul>
                                                        <div className="countdown-timer">
                                                            <div className="countdown h4"
                                                                 data-date-time="10/10/2020 12:00"
                                                                 data-labels='{"label-day": "روز", "label-hour": "ساعت", "label-minute": "دقیقه", "label-second": "ثانیه"}'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row m-0">
                                                    <div className="right-col col-5 d-flex align-items-center">
                                                        <a className="w-100 text-center img-link-amazing" href="#">
                                                            <img src="assets/images/slider-amazing/as-3.jpg"
                                                                 className="img-fluid" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="discount">
                                                    <span className="discount-percent">2.2
                                                        <i className="fa fa-percent"></i>
                                                    </span>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="#">کامپیوتر همه کاره 21.5 اینچی ایسوس مدل AIO
                                                                V222UAK-B</a>
                                                        </h2>
                                                        <div className="price text-center">
                                                            <del><span>12,000,000<span>تومان</span></span></del>
                                                            <ins><span>11,180,000<span>تومان</span></span></ins>
                                                        </div>
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">ظرفیت حافظه داخلی: </span>
                                                                <span className="text">500 گیگابایت</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">ظرفیت حافظه رم: </span>
                                                                <span className="text">4 گیگابایت </span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">سری پردازنده: </span>
                                                                <span className="text">Pentium </span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">دقت صفحه نمایش: </span>
                                                                <span className="text"> 1080 × 1920 </span>
                                                            </li>
                                                        </ul>
                                                        <div className="countdown-timer">
                                                            <div className="countdown h4"
                                                                 data-date-time="10/10/2020 12:00"
                                                                 data-labels='{"label-day": "روز", "label-hour": "ساعت", "label-minute": "دقیقه", "label-second": "ثانیه"}'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row m-0">
                                                    <div className="right-col col-5 d-flex align-items-center">
                                                        <a className="w-100 text-center img-link-amazing" href="#">
                                                            <img src="assets/images/slider-amazing/as-4.jpg"
                                                                 className="img-fluid" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="discount">
                                                    <span className="discount-percent">4.2
                                                        <i className="fa fa-percent"></i>
                                                    </span>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="#">
                                                                شارژر بی سیم مدل EP-NG930
                                                            </a>
                                                        </h2>
                                                        <div className="price text-center">
                                                            <del><span>8,000,000<span>تومان</span></span></del>
                                                            <ins><span>6,500,000<span>تومان</span></span></ins>
                                                        </div>
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">شدت جریان خروجی: </span>
                                                                <span
                                                                    className="text"> 2.0 آمپر مخصوص تبلت و موبایل </span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">تعداد درگاه خروجی: </span>
                                                                <span className="text">1</span>
                                                            </li>
                                                        </ul>
                                                        <div className="countdown-timer">
                                                            <div className="countdown h4"
                                                                 data-date-time="10/10/2020 12:00"
                                                                 data-labels='{"label-day": "روز", "label-hour": "ساعت", "label-minute": "دقیقه", "label-second": "ثانیه"}'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item  finished">
                                                <div className="row m-0">
                                                    <div className="right-col col-5 d-flex align-items-center">
                                                        <a className="w-100 text-center img-link-amazing" href="#">
                                                            <img src="assets/images/slider-amazing/as-5.jpg"
                                                                 className="img-fluid" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="discount">
                                                    <span className="discount-percent">5.2
                                                        <i className="fa fa-percent"></i>
                                                    </span>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="#">
                                                                تلویزیون ال ای دی هوشمند سامسونگ مدل 55NU7900 سایز 55
                                                                اینچ
                                                            </a>
                                                        </h2>
                                                        <div className="price text-center">
                                                            <del><span>14,500,000<span>تومان</span></span></del>
                                                            <ins><span>13,500,000<span>تومان</span></span></ins>
                                                        </div>
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">درگاه USB: </span>
                                                                <span className="text">دارد </span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">کیفیت تصویر: </span>
                                                                <span className="text">Ultra HD - 4K</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <i className="fa fa-check"></i>
                                                                <span className="title">رابط هوشمند: </span>
                                                                <span className="text">دارد </span>
                                                            </li>
                                                        </ul>
                                                        <div className="countdown-timer">
                                                            <div className="countdown h4"
                                                                 data-date-time="10/10/2020 12:00"
                                                                 data-labels='{"label-day": "روز", "label-hour": "ساعت", "label-minute": "دقیقه", "label-second": "ثانیه"}'></div>
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
            </React.Fragment>
        );
    }
}

Slider.propTypes = {};

export default Slider;
