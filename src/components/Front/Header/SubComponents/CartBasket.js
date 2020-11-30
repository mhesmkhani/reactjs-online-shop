import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchSingleProduct} from "../../../../redux/actions/GetProductAction";
import {deleteFavorite, fetchFavorite} from "../../../../redux/actions/FavoriteAction";
import {deleteCart, fetchCarts} from "../../../../redux/actions/CartAction";
import ApiUrl from "../../../../Config/ApiUrls";
import {NavLink} from "react-router-dom";

class CartBasket extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                <div className="divider-space-card d-block">
                    <div className="header-cart-basket">
                        <a href="#" className="cart-basket-box">
                          <span className="icon-cart">
                            <i className="mdi mdi-cart"></i>
                            </span>
                            <span className="title-cart">سبد خرید</span>
                            <span className="price-cart">
                                {finalSumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                <span className={"mx-1"}>تومان</span>
                            </span>
                            <span className="count-cart">{orderquantity}</span>
                        </a>
                        <div className="widget-shopping-cart">
                            <div className="widget-shopping-cart-content">
                                <ul className="product-list-widget">
                                    {
                                        cartData.map(product => {
                                            return (
                                                <li className="mini-cart-item">
                                                    <div className="mini-cart-item-content">
                                                        <a
                                                            onClick={() => this.handleRemoveCart(product.id)}
                                                           className="mini-cart-item-close">
                                                            <i className="fa fa-trash"></i>
                                                        </a>
                                                        <a href="#"
                                                           className="mini-cart-item-image d-block">
                                                            {
                                                                (!product.images.length) ? null : <img
                                                                    src={ApiUrl.BaseUrl + product.images[0].resized_name}/>
                                                            }
                                                        </a>
                                                        <span className="product-name-card">{product.title}</span>
                                                        <div className="variation">
                                             <span
                                                 className="variation-n">فروشنده : </span>
                                                            <p className="mb-0"> سرمد </p>
                                                        </div>
                                           <div className="quantity d-flex">
                                             <span className="quantity-Price-amount mr-0">
                                                 {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                 <span className={"mx-1"}>تومان</span>
                                            </span>
                                               <span className="quantity-Price-amount mx-auto">
                                                   <span className={"mx-1"}> تعداد:</span>
                                                   {product.pivot.quantity}
                                            </span>
                                            </div>
                                        </div>
                            </li>
                                            )
                                        }

                                    )}
                                </ul>
                                <div className="mini-card-total">
                                    <strong>قیمت کل : </strong>
                                    <span className="price-total">
                                        {finalSumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                       <span className={"mx-1"}>تومان</span>
                                    </span>
                                </div>
                                <div className="mini-card-button ">
                                    <NavLink to={"/profile/cart"} className="view-card mx-1">
                                        مشاهده سبد خرید
                                    </NavLink>
                                    <NavLink to={"/user/checkout"} className="card-checkout">
                                        تسویه حساب
                                    </NavLink>
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
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUserCart: config => {
            dispatch(fetchCarts(config))
        },
        onClickToRemoveCart: (producId,config) => {
            dispatch(deleteCart(producId,config))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartBasket);
