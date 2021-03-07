import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ApiUrls from "../../../../Config/ApiUrls";
import {deleteCart, fetchCarts, updateCart} from "../../../../redux/actions/CartAction";
import {addOrderProducts, fetchOrders} from "../../../../redux/actions/OrdersAction";

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

    handleSetOrders = () => {
        const apiToken = this.props.auth.apiToken
        const userInfo = this.props.auth.userInfo;
        const {cart} = this.props;
        const cartData = cart.cart;
        let quantity = 0;
        let price = 0;
        let totalPrice = [];
        quantity = cartData.map(product => product.pivot.quantity);
        price = cartData.map(product => product.price);
        quantity.map((q, indexQ) => {
            price.map((p, indexP) => {
                switch (indexQ) {
                    case indexP:
                        totalPrice.push(q * p);
                        break;
                }
            })
        })
        let finalSumPrice = totalPrice.reduce(function (a, b) {
            return a + b;
        }, 0);
        if (apiToken.length > 0) {
            const config = {
                headers: {'Authorization': apiToken}
            }
            const data = {
                user_id: userInfo.id,
                order_total_price: finalSumPrice
            }
            this.props.getToOrders(data,config)
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
            <React.Fragment>
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
                    <button onClick={this.handleSetOrders} className="btn-Order btn btn-primary mt-4 mb-3" type="submit">ثبت
                        سفارش
                    </button>
                </div>
            </React.Fragment>
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUserCart: config => {
            dispatch(fetchCarts(config))
        },
        getToOrders: (data,config) => {
            dispatch(fetchOrders(data,config , callback => {
                const cart = callback.state.cart.cart
                const apiToken = callback.state.auth.apiToken
                const order_id = callback.res.order_id
                const config = {
                    headers: {'Authorization': apiToken}
                }
                const data = {
                    product_id: cart.map(product => product.id),
                    order_id: order_id,
                    quantity:  cart.map(product => product.pivot.quantity),
                }
                if(callback.res.message === "success"){
                    dispatch(addOrderProducts(data,config,callback => {
                        console.log(callback)
                    }))
                }
            }))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailProduct);
