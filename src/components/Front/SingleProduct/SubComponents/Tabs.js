import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Tabs extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }


    render() {
        const singleProdcut = this.props.singleProduct.singleProduct;

        return (
            <React.Fragment>
                <div className="tabs">
                    <div className="tab-box">
                        <ul className="tab nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="Review-tab" data-toggle="tab"
                                   href="#Review" role="tab" aria-controls="Review"
                                   aria-selected="true">
                                    <i className="mdi mdi-format-list-checks"></i>
                                    <span style={{fontSize: 'large'}}>نقد و بررسی</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="Specifications-tab" data-toggle="tab"
                                   href="#Specifications" role="tab" aria-controls="Specifications"
                                   aria-selected="true">
                                    <i className="mdi mdi-format-list-checks"></i>
                                   <span style={{fontSize: 'large'}}> مشخصات</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="User-comments-tab" data-toggle="tab"
                                   href="#User-comments" role="tab" aria-controls="User-comments"
                                   aria-selected="false">
                                    <i className="mdi mdi-comment-text-multiple-outline"></i>
                                    <span style={{fontSize: 'large'}}>نظرات کاربران</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg">
                        {
                            singleProdcut.map(product =>
                                <div className="tabs-content">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="Review" role="tabpanel"
                                             aria-labelledby="Review-tab">
                                            <h2 className="params-headline">توضیحات</h2>
                                            <section className="content-expert-summary">
                                                <div className="mask pm-3">
                                                    <div className="mask-text">
                                                     <p>{product.description}</p>
                                                    </div>
                                                    {/*<a href="#" className="mask-handler">*/}
                                                    {/*    <span className="show-more">+ ادامه مطلب</span>*/}
                                                    {/*    <span className="show-less">- بستن</span>*/}
                                                    {/*</a>*/}
                                                    {/*<div className="shadow-box"></div>*/}
                                                </div>
                                            </section>
                                        </div>
                                        <div className="tab-pane fade show" id="Specifications" role="tabpanel"
                                             aria-labelledby="Specifications-tab">
                                            <article>
                                                <h2 className="params-headline">مشخصات فنی
                                                    <span>{product.title}</span>
                                                </h2>
                                                <section>
                                                    <ul className="params-list">
                                                        {
                                                            product.attributes.map(attribute =>
                                                                <li className="params-list-item">
                                                                    <div className="params-list-key">
                                                                        <span
                                                                            className="block">{attribute.attribute_keys}</span>
                                                                    </div>
                                                                    <div className="params-list-value">
                                                                        <span
                                                                            className="block">{attribute.attribute_values}</span>
                                                                    </div>
                                                                </li>
                                                            )}


                                                    </ul>
                                                </section>

                                            </article>
                                        </div>
                                        <div className="tab-pane fade" id="User-comments" role="tabpanel"
                                             aria-labelledby="User-comments-tab">
                                            <div className="comments">
                                                <h2 className="params-headline">امتیاز کاربران به
                                                    <span>Samsung Galaxy Note 10 Dual SIM 256GB Mobile Phone</span>
                                                </h2>
                                                <div className="comments-summary">
                                                    <div className="col-lg-6 col-md-6 col-xs-12 pr">
                                                        <div className="comments-summary-box">
                                                            <ul className="comments-item-rating">
                                                                <li>
                                                                    <span className="cell-title">کیفیت ساخت:</span>
                                                                    <span className="cell-value">خوب</span>
                                                                    <div className="rating-general">
                                                                        <div className="rating-value"></div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                        <span
                                                                            className="cell-title">ارزش خرید به نسبت قیمت:</span>
                                                                    <span className="cell-value">خوب</span>
                                                                    <div className="rating-general">
                                                                        <div className="rating-value"></div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <span className="cell-title">نوآوری:</span>
                                                                    <span className="cell-value">خوب</span>
                                                                    <div className="rating-general">
                                                                        <div className="rating-value"
                                                                             style={{width: '70%'}}></div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                        <span
                                                                            className="cell-title">امکانات و قابلیت ها:</span>
                                                                    <span className="cell-value">متوسط</span>
                                                                    <div className="rating-general">
                                                                        <div className="rating-value"
                                                                             style={{width: '65%'}}></div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <span className="cell-title">سهولت استفاده:</span>
                                                                    <span className="cell-value">خوب</span>
                                                                    <div className="rating-general">
                                                                        <div className="rating-value"
                                                                             style={{width: '75%'}}></div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <span className="cell-title">طراحی و ظاهر:</span>
                                                                    <span className="cell-value">خوب</span>
                                                                    <div className="rating-general">
                                                                        <div className="rating-value"></div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-xs-12 pr">
                                                        <div className="comments-summary-note">
                                                            <h6>شما هم می‌توانید در مورد این کالا نظر بدهید.</h6>
                                                            <p>
                                                                برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود
                                                                شوید. اگر این محصول را قبلا از دیجی‌کالا خریده
                                                                باشید،
                                                                نظر
                                                                شما به عنوان مالک محصول ثبت خواهد شد.
                                                            </p>
                                                            <a href="#" className="btn-add-comment btn btn-secondary">افزودن
                                                                نظر جدید</a>
                                                        </div>
                                                    </div>
                                                    <div className="product-comment-list">
                                                        <ul className="comment-list">
                                                            <li>
                                                                <div className="col-lg-3 pr">
                                                                    <section>
                                                                        <div className="comments-user-shopping">حسن
                                                                            شجاعی
                                                                            <div className="cell-date">
                                                                                در تاریخ ۱۸ فروردین ۱۳۹۹
                                                                            </div>
                                                                            <div className="message-light"><i
                                                                                className="fa fa-thumbs-o-up"></i>خرید
                                                                                این محصول را توصیه می‌کنم
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                                <div className="col-lg-9 pl">
                                                                    <div className="article">
                                                                        <ul className="comment-text">
                                                                            <div className="header">
                                                                                <div>بهتر از آیفون</div>
                                                                                <div className="product-rate pl">
                                                                                    <i className="fa fa-star active"></i>
                                                                                    <i className="fa fa-star active"></i>
                                                                                    <i className="fa fa-star active"></i>
                                                                                    <i className="fa fa-star active"></i>
                                                                                    <i className="fa fa-star active"></i>
                                                                                </div>
                                                                                <p>در کل سامسونگ کاربردی تر از آیفون
                                                                                    هست ولی از نظر کیفیت تصویر و
                                                                                    سرعت آیفون بهتره و کلاس!</p>
                                                                            </div>
                                                                            <div className="comments-evaluation">
                                                                                <div
                                                                                    className="comments-evaluation-positive">
                                                                                    <span>نقاط قوت</span>
                                                                                    <ul>
                                                                                        <li>
                                                                                            سبک
                                                                                        </li>
                                                                                        <li>
                                                                                            سرعت پردازش بالا
                                                                                        </li>
                                                                                        <li>
                                                                                            خوش دست
                                                                                        </li>
                                                                                        <li>
                                                                                            صفحه نمایش عالی
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div
                                                                                    className="comments-evaluation-negative">
                                                                                    <span>نقاط قوت</span>
                                                                                    <ul>
                                                                                        <li>
                                                                                            قیمت زیاد
                                                                                        </li>
                                                                                        <li>
                                                                                            باطری ضعیف
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="footer">
                                                                                    <div className="comments-likes">آیا
                                                                                        این نظر برایتان مفید بود؟
                                                                                        <button
                                                                                            className="btn-like js-comment-like"
                                                                                            type="submit">بله
                                                                                            <span
                                                                                                className="count">8</span>
                                                                                        </button>
                                                                                        <button
                                                                                            className="btn-like js-comment-dislike"
                                                                                            type="submit">خیر
                                                                                            <span
                                                                                                className="count">4</span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="col-lg-3 pr">
                                                                    <section>
                                                                        <div className="comments-user-shopping">جلال
                                                                            بهرامی راد
                                                                            <div className="cell-date">
                                                                                در تاریخ ۱۹ فروردین ۱۳۹۹
                                                                            </div>
                                                                            <div className="message-light"><i
                                                                                className="fa fa-thumbs-o-up"></i>خرید
                                                                                این محصول را توصیه می‌کنم
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                                <div className="col-lg-9 pl">
                                                                    <div className="article">
                                                                        <ul className="comment-text">
                                                                            <div className="header">
                                                                                <div>عالی و صدرصد بهتر از اپل</div>
                                                                                <div className="product-rate pl">
                                                                                    <i className="fa fa-star active"></i>
                                                                                    <i className="fa fa-star active"></i>
                                                                                    <i className="fa fa-star active"></i>
                                                                                    <i className="fa fa-star active"></i>
                                                                                    <i className="fa fa-star active"></i>
                                                                                </div>
                                                                                <p>عالییه بنظرمن اونایی که میرن پول
                                                                                    گوشی های ایفون با اون قیمت رو
                                                                                    میدن با استفاده از این گوشی باید
                                                                                    نظرشونو عوض کنن</p>
                                                                            </div>
                                                                            <div className="comments-evaluation">
                                                                                <div
                                                                                    className="comments-evaluation-positive">
                                                                                    <span>نقاط قوت</span>
                                                                                    <ul>
                                                                                        <li>
                                                                                            سبک
                                                                                        </li>
                                                                                        <li>
                                                                                            سرعت پردازش بالا
                                                                                        </li>
                                                                                        <li>
                                                                                            خوش دست
                                                                                        </li>
                                                                                        <li>
                                                                                            صفحه نمایش عالی
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div
                                                                                    className="comments-evaluation-negative">
                                                                                    <span>نقاط قوت</span>
                                                                                    <ul>
                                                                                        <li>
                                                                                            قیمت زیاد
                                                                                        </li>
                                                                                        <li>
                                                                                            باطری ضعیف
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="footer">
                                                                                    <div className="comments-likes">آیا
                                                                                        این نظر برایتان مفید بود؟
                                                                                        <button
                                                                                            className="btn-like js-comment-like"
                                                                                            type="submit">بله
                                                                                            <span
                                                                                                className="count">8</span>
                                                                                        </button>
                                                                                        <button
                                                                                            className="btn-like js-comment-dislike"
                                                                                            type="submit">خیر
                                                                                            <span
                                                                                                className="count">4</span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Tabs.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        singleProduct: state.singleProduct
    }
}
export default connect(mapStateToProps)(Tabs);
