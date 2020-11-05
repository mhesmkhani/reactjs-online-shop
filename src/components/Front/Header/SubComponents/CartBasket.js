import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CartBasket extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }


    render() {
        return (
            <>
                <div className="divider-space-card d-block">
                    <div className="header-cart-basket">
                        <a href="#" className="cart-basket-box">
                                                <span className="icon-cart">
                                                    <i className="mdi mdi-cart"></i>
                                                </span>
                            <span className="title-cart">سبد خرید</span>
                            <span className="price-cart">25,000,000
                                                    <span>تومان</span>
                                                </span>
                            <span className="count-cart">2</span>
                        </a>
                        <div className="widget-shopping-cart">
                            <div className="widget-shopping-cart-content">
                                <ul className="product-list-widget">
                                    <li className="mini-cart-item">
                                        <div className="mini-cart-item-content">
                                            <a href="#"
                                               className="mini-cart-item-close">
                                                <i className="fa fa-trash"></i>
                                            </a>
                                            <a href="#"
                                               className="mini-cart-item-image d-block">
                                                <img
                                                    src="assets/images/menu-main/img-card.jpg"/>
                                            </a>
                                            <span className="product-name-card">لپ تاپ چووی الترابوک 14 اینچ پرو</span>
                                            <div className="variation">
                                                                                <span
                                                                                    className="variation-n">فروشنده : </span>
                                                <p className="mb-0">دیجی اسمارت </p>
                                            </div>
                                            <div className="quantity">
                                                                    <span className="quantity-Price-amount"> 15,000,000
                                                                        <span>تومان</span>
                                                                    </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mini-cart-item">
                                        <div className="mini-cart-item-content">
                                            <a href="#"
                                               className="mini-cart-item-close">
                                                <i className="fa fa-trash"></i>
                                            </a>
                                            <a href="#"
                                               className="mini-cart-item-image d-block">
                                                <img
                                                    src="assets/images/menu-main/img-card-2.jpg"/>
                                            </a>
                                            <span className="product-name-card">هواوای میت بوک X پرو 13.9 اینچ</span>
                                            <div className="variation">
                                                                                <span
                                                                                    className="variation-n">فروشنده : </span>
                                                <p className="mb-0">دیجی اسمارت </p>
                                            </div>
                                            <div className="quantity">
                                                                    <span className="quantity-Price-amount"> 10,000,000
                                                                        <span>تومان</span>
                                                                    </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mini-card-total">
                                    <strong>قیمت کل : </strong>
                                    <span className="price-total"> 25,000,000
                                                            <span>تومان</span>
                                                        </span>
                                </div>
                                <div className="mini-card-button">
                                    <a href="cart.html" className="view-card">مشاهده سبد
                                        خرید</a>
                                    <a href="checkout.html" className="card-checkout">تسویه
                                        حساب</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

CartBasket.propTypes = {};

export default CartBasket;
