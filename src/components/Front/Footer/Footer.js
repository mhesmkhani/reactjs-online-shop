import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
     console.log("what is this")
    }


    render() {
        return (
            <>
                <footer className="footer-main-site">
                    <section className="d-block d-xl-block d-lg-block d-md-block d-sm-block order-1">
                        <div className="footer-shopping-features">
                            <div className="container-fluid">
                                <div className="col-12">
                                    <div className="item">
                                            <span className="icon-shopping">
                                                <i className="fa fa-paper-plane"></i>
                                            </span>
                                        <span className="title-shopping">تحویل اکسپرس</span>
                                        <span className="desc-shopping">در کمترین زمان دریافت کنید</span>
                                    </div>
                                    <div className="item">
                                            <span className="icon-shopping">
                                                <i className="fa fa-volume-control-phone"></i>
                                            </span>
                                        <span className="title-shopping">پشتیبانی ۲۴ ساعته</span>
                                        <span className="desc-shopping">پشتیبانی هفت روز هفته</span>
                                    </div>
                                    <div className="item">
                                            <span className="icon-shopping">
                                                <i className="fa fa-home"></i>
                                            </span>
                                        <span className="title-shopping">پرداخت در محل</span>
                                        <span className="desc-shopping">هنگام دریافت پرداخت کنید</span>
                                    </div>
                                    <div className="item">
                                            <span className="icon-shopping">
                                                <i className="fa fa-repeat"></i>
                                            </span>
                                        <span className="title-shopping">۷ روز ضمانت بازگشت</span>
                                        <span className="desc-shopping">هفت روز مهلت دارید </span>
                                    </div>
                                    <div className="item">
                                            <span className="icon-shopping">
                                                <i className="fa fa-shield"></i>
                                            </span>
                                        <span className="title-shopping">ضمانت اصل‌بودن کالا</span>
                                        <span className="desc-shopping">تایید اصالت کالا</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="d-block d-xl-block d-lg-block d-md-block d-sm-block order-1">
                        <div className="container-fluid">
                            <div className="col-12">
                                <div className="footer-middlebar">
                                    <div className="col-lg-8 d-block pr">
                                        <div className="footer-links">
                                            <div className="col-lg-3 col-md-3 col-xs-12 pr">
                                                <div className="row">
                                                    <section className="footer-links-col">
                                                        <div className="headline-links">
                                                            <a href="#">
                                                                با دیجی اسمارت
                                                            </a>
                                                        </div>
                                                        <ul className="footer-menu-ul">
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    اتاق خبر دیجی اسمارت
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    فروش در دیجی اسمارت
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    همکاری با سازمان‌ها
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    فرصت‌های شغلی
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </section>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-xs-12 pr">
                                                <div className="row">
                                                    <section className="footer-links-col">
                                                        <div className="headline-links">
                                                            <a href="#">
                                                                خدمات مشتریان
                                                            </a>
                                                        </div>
                                                        <ul className="footer-menu-ul">
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    پاسخ به پرسش‌های متداول
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    رویه‌های بازگرداندن کالا
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    شرایط استفاده
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    حریم خصوصی
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </section>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-xs-12 pr">
                                                <div className="row">
                                                    <section className="footer-links-col">
                                                        <div className="headline-links">
                                                            <a href="#">
                                                                راهنمای خرید از دیجی اسمارت
                                                            </a>
                                                        </div>
                                                        <ul className="footer-menu-ul">
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    نحوه ثبت سفارش
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    رویه ارسال سفارش
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-type-custom">
                                                                <a href="#">
                                                                    شیوه‌های پرداخت
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-block pl">
                                        <div className="shortcode-widget-area">
                                            <form action="#" className="form-newsletter">
                                                <fieldset>
                                                    <span className="form-newsletter-title"> با عضویت در خبرنامه از آخرین اخبار و محصولات سایت مطلع شوید...</span>
                                                    <div className="input-group-newsletter">
                                                        <input type="email" className="input-field form-control" placeholder="آدرس ایمیل خود را وارد کنید" />
                                                            <button className="btn btn-info btn-secondary" type="submit">ارسال</button>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="footer-more-info">
                                        <div className="col-lg-10 pr">
                                            <div className="footer-content d-block">
                                                <div className="text pr-1">
                                                    <h2 className="title">فروشگاه اینترنتی دیجی اسمارت</h2>
                                                    <p className="desc"> دیجی اسمارت به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل کلیدی، پرداخت در محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا، موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به دیجی اسمارت با یک سایت پر از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 pl">
                                            <div className="footer-safety-partner">
                                                <div className="widget widget-product card mb-0">
                                                    <div className="product-carousel-symbol owl-carousel owl-theme owl-rtl owl-loaded owl-drag">
                                                        <div className="owl-stage-outer">
                                                            <div className="owl-stage d-flex" >
                                                                <div className="owl-item active" >
                                                                    <div className="item">
                                                                        <a href="#" className="d-block hover-img-link">
                                                                            <img src="assets/images/footer/license/L-1.png" className="img-fluid img-brand" alt=""/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item active" >
                                                                    <div className="item">
                                                                        <a href="#" className="d-block hover-img-link mt-0">
                                                                            <img src="assets/images/footer/license/L-2.png" className="img-fluid img-brand" alt=""/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer-copyright">
                                            <div className="footer-copyright-text">
                                                <p>تمامی مطالب، عکس ها و... متعلق به سایت فروشگاهی دیجی اسمارت می باشد.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </>
        );
    }
}

Footer.propTypes = {};

export default Footer;