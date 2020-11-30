import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ApiUrls from "../../../../Config/ApiUrls";
import {deleteCart, fetchCarts, updateCart} from "../../../../redux/actions/CartAction";

class DetailProduct extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

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
                <h3 className="order-review-heading">سفارش شما</h3>
                <div className="checkout-review-order">
                        <div className="row justify-content-center px-4 pb-2">
                            <div className={"col text-center "} style={{fontSize: 'large',color:'#6c757d',backgroundColor:'#edf4fb'}}>نام محصول</div>
                            <div className={"col text-center"} style={{fontSize: 'large',color:'#6c757d',backgroundColor:'#edf4fb'}}>تعداد</div>
                            <div className={"col text-center"} style={{fontSize: 'large',color:'#6c757d',backgroundColor:'#edf4fb'}}>قیمت هر واحد</div>
                        </div>
                        {
                            cartData.map(product =>
                        <div className="row justify-content-center px-4 py-2">
                            <div className={"col text-right"} style={{fontWeight: 500,whiteSpace:'nowrap'}}>
                            <img className={"mx-2"} src={ApiUrls.BaseUrl + product.images[0].resized_name} width={50}/>
                            <span>{product.title}</span>
                            </div>
                            <div className={"col text-center"} style={{fontWeight: 500}}>{product.pivot.quantity}</div>
                            <div className={"col text-center"} style={{fontSize: 'medium',color:'#28a745'}}>{product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان </div>
                        </div>
                            )}

                    <hr/>
                    <div>
                       <div className="d-flex" >
                           <i style={{fontSize: 'large',color:'#495057'}} className="mdi mdi-cash-multiple"></i>
                           <span className={"mx-1"} style={{fontSize: 'large',color:'#495057'}}> مجموع پرداخت:</span>
                           <span className={"mx-1"} style={{fontSize: 'large',color:'#28a745'}}>{finalSumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>
                       </div>
                        <div className="d-flex my-2">
                            <span className={"mx-1"} style={{fontWeight:500}}>ارسال عادی:</span>
                            <span className={"mx-1"} style={{fontWeight:500}}>رایگان</span>
                        </div>
                    </div>
                    <ul className="checkout-payment-methods">
                        <li className="checkout-payment-method-item d-block">
                            <label htmlFor="#" className="outline-radio">
                                <input type="radio" name="payment_method"
                                       id="payment-option-online"/>
                                <span className="outline-radio-check"></span>
                            </label>
                            <label htmlFor="#" className="shipping-totals-title-row">
                                <div className="shipping-totals-title">پرداخت اینترنتی هوشمند
                                </div>
                            </label>
                        </li>
                        <li className="checkout-payment-method-item d-block">
                            <label htmlFor="#" className="outline-radio">
                                <input type="radio" name="payment_method"
                                       id="payment-option-online"/>
                                <span className="outline-radio-check"></span>
                            </label>
                            <label htmlFor="#" className="shipping-totals-title-row">
                                <div className="shipping-totals-title">پرداخت هنگام دریافت</div>
                            </label>
                        </li>
                    </ul>
                    {/*<div className="form-auth-row">*/}
                    {/*    <label htmlFor="#" className="ui-checkbox mt-1">*/}
                    {/*        <input type="checkbox" value="1" name="login" id="remember"/>*/}
                    {/*        <span className="ui-checkbox-check"></span>*/}
                    {/*    </label>*/}
                    {/*    <label htmlFor="remember" className="remember-me mr-0"><a href="#">حریم*/}
                    {/*        خصوصی</a> و <a href="#">شرایط قوانین </a>استفاده از سرویس های*/}
                    {/*        سایت دیجی‌اسمارت را مطالعه نموده و با کلیه موارد آن موافقم <abbr*/}
                    {/*            className="required" title="ضروری">*</abbr></label>*/}
                    {/*</div>*/}
                    <button className="btn-Order btn btn-primary mt-4 mb-3" type="submit">ثبت
                        سفارش
                    </button>
                </div>
            </>
        );
    }
}

DetailProduct.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        cart: state.cart,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUserCart: config => {
            dispatch(fetchCarts(config))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailProduct);