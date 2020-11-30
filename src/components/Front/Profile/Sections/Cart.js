import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ApiUrl from "../../../../Config/ApiUrls";
import {NavLink} from "react-router-dom";
import {bindActionCreators} from "redux";
import {deleteCart, fetchCarts, updateCart} from "../../../../redux/actions/CartAction";
import Icon from "../../../../Config/GlobaliCons";

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }

    }


    componentDidMount() {
        const apiToken = this.props.auth.apiToken
        if (apiToken.length > 0) {
            const config = {
                headers: {'Authorization': this.props.auth.apiToken}
            }
            this.props.getUserCart(config);
        }
    }

    sumQuantity = (id) => {
        const counter = document.getElementById(id).getAttribute('id')
        if(counter === id.toString()){
            document.getElementById(id).value = + document.getElementById(id).value + 1
            const config = {
                headers: {'Authorization': this.props.auth.apiToken}
            }
            const data = {
                product_id: id,
                quantity: document.getElementById(id).value
            }
            this.props.onClickToUpdateCart(data,config)
            this.componentDidMount();
        }
    }

    minusQuantity = (id) => {
        const counter = document.getElementById(id).getAttribute('id')
        if(counter === id.toString()){
            if(document.getElementById(id).value <= 1){
                document.getElementById(id).value = 1
            }else{
                document.getElementById(id).value = + document.getElementById(id).value - 1
                const config = {
                    headers: {'Authorization': this.props.auth.apiToken}
                }
                const data = {
                    product_id: id,
                    quantity: document.getElementById(id).value
                }
                this.props.onClickToUpdateCart(data,config)
                this.componentDidMount();
            }

        }
    }

    handleRemoveCart = (id) => {
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        const data = {
            product_id: id,
        }
        this.props.onClickToRemoveCart(data,config)
        this.componentDidMount();
    }


    render() {
        const {cart} = this.props;
        const cartData = cart.cart;
        let orderquantity = 0
        let quantity = 0
        let price = 0
        let totalPrice = []
        orderquantity = cart.cart.length;
        quantity = cartData.map(product => product.pivot.quantity)
        price = cartData.map(product => product.price)
        quantity.map((q, indexQ) => {
            price.map((p, indexP) => {
                switch (indexQ) {
                    case indexP:
                        totalPrice.push(q * p)
                        break;
                }
            })
        })
        let finalSumPrice = totalPrice.reduce(function (a, b) {
            return a + b;
        }, 0);
        return (
            <>
                <div className="col-lg-9 col-md-9 col-xs-12 pl">
                    <div className="profile-content">
                        <div className="profile-stats">
                            <section className="cart-home">
                                <div className="post-item-cart d-block order-2">
                                    <div className="content-page">
                                        <div className="cart-form">
                                            <form action="#" className="c-form">
                                                <table className="table-cart cart table table-borderless">
                                                    {
                                                        cartData.length > 0 ?
                                                            <thead>
                                                            <tr>
                                                                <th scope="col" className="product-cart-name text-center"></th>
                                                                <th scope="col" className="product-cart-name text-center">نام محصول</th>
                                                                <th scope="col" className="product-cart-quantity text-center">تعداد مورد
                                                                    نیاز
                                                                </th>
                                                                <th scope="col" className="product-cart-price text-center">قیمت</th>
                                                            </tr>
                                                            </thead>
                                                            :
                                                            null
                                                    }
                                                    {
                                                        cartData.length > 0 ?
                                                            <tbody>
                                                            {
                                                                cartData.map(product =>
                                                                        <tr>
                                                                            <th>
                                                                                <div className="product-thumbnail-img">
                                                                                    <a href="#">
                                                                                        {
                                                                                            (!product.images.length) ? null : <img
                                                                                                src={ApiUrl.BaseUrl + product.images[0].resized_name}/>
                                                                                        }
                                                                                    </a>
                                                                                    <div onClick={() => this.handleRemoveCart(product.id)} className="product-remove cursor-pointer d-flex flex-column justify-content-center align-items-center">
                                                                                        <i className="fa fa-trash"></i>
                                                                                        <span style={{fontSize: 'small'}}>حذف</span>
                                                                                    </div>
                                                                                </div>
                                                                            </th>
                                                                            <th scope="row" className="product-cart-name">
                                                                                <div className="product-title">
                                                                                    <a href="#">
                                                                                        {product.title}
                                                                                    </a>
                                                                                    <div className="variation">
                                                                                        <div className="variant-guarantee">
                                                                                            <i className="mdi mdi-check"></i>
                                                                                            گارانتی اصالت و سلامت فیزیکی کالا
                                                                                        </div>
                                                                                        <div className="seller">فروشنده :
                                                                                            <span>سرمد</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </th>
                                                                            <td className="product-cart-quantity">
                                                                                <div className="required-number before">
                                                                                    <div className="quantity d-flex justify-content-center">
                                                                                        <input
                                                                                            id={product.id}
                                                                                            type="number"
                                                                                            min="1"
                                                                                            max="100"
                                                                                            step="1"
                                                                                            name={"quantity"}
                                                                                            value={product.pivot.quantity}/>
                                                                                        <div className="quantity-nav">
                                                                                            <div
                                                                                                onClick={() => this.sumQuantity(product.id)}
                                                                                                className="quantity-button quantity-up"> +
                                                                                            </div>
                                                                                            <div onClick={() => this.minusQuantity(product.id)}
                                                                                                 className="quantity-button quantity-down"
                                                                                                 aria-disabled={true}> -
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="product-cart-price text-center">
                                                               <span className="amount">
                                                                {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                <span className={"mx-1"}>تومان</span>
                                                            </span>
                                                                            </td>

                                                                        </tr>
                                                                )}

                                                            </tbody>
                                                            :
                                                            <section className="cart-home">
                                                                <div
                                                                className="post-item-cart d-block order-2">
                                                                                        <div
                                                                                            className="cart-empty text-center ">
                                                                                            <div className="cart-empty-img mb-4 mt-4">
                                                                                                <img src={Icon.CertEmptyRef}/>
                                                                                            </div>
                                                                                            <p className="cart-empty-title">
                                                                                                سبد خرید شما در حال حاضر خالی است.
                                                                                            </p>
                                                                                        </div>
                                                                </div>

                                                            </section>
                                                    }
                                                </table>
                                            </form>
                                        </div>
                                        {
                                            cartData.length > 0 ?
                                                <div className="cart-collaterals">
                                                    <div className="totals d-block">
                                                        <h3 className="Total-cart-total">مجموع کل سبد خرید</h3>
                                                        <div className="checkout-summary">
                                                            <ul className="checkout-summary-summary">
                                                                <li className="cart-subtotal">
                                                                    <span className="amount">قیمت کل</span>
                                                                    <span style={{fontSize: 'large',fontWeight:'600'}}> {finalSumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                                    <span className={"mx-1"}>تومان</span>
                                                                </li>
                                                                <li className="shipping-totals">
                                                                    <span className="amount">حمل و نقل</span>
                                                                    <div className="shipping-totals-item">
                                                                        <div className="shipping-totals-outline">
                                                                            <label htmlFor="#" className="outline-radio">
                                                                                <input type="radio" name="payment_method"
                                                                                       id="payment-option-online"
                                                                                       checked="checked"/>
                                                                                <span
                                                                                    className="outline-radio-check"></span>
                                                                            </label>
                                                                            <label htmlFor="#"
                                                                                   className="shipping-totals-title-row">
                                                                                <div className="shipping-totals-title">حمل و نقل
                                                                                    رایگان
                                                                                </div>
                                                                            </label>
                                                                        </div>

                                                                    </div>
                                                                </li>
                                                                <li className="order-total">
                                                                    <span className="amount">مجموع پرداخت</span>
                                                                    <span style={{fontSize: 'large',fontWeight:'600'}}> {finalSumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                                    <span className={"mx-1"}>تومان</span>
                                                                </li>
                                                                <li className="discount-code">
                                                                    <div className="d-flex align-items-right">
                                                                        <div className="col-md-4 pl mt-5">
                                                                            <div className="proceed-to-checkout">
                                                                                <NavLink to={"/user/checkout"} className="checkout-button d-block">
                                                                                    تسویه حساب
                                                                                </NavLink>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </>


        );
    }
}

Favorite.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        cart: state.cart,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClickToUpdateCart: (producId,config) => {
            dispatch(updateCart(producId,config))
        },
        onClickToRemoveCart: (producId,config) => {
            dispatch(deleteCart(producId,config))
        },
        getUserCart: config => {
            dispatch(fetchCarts(config))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
