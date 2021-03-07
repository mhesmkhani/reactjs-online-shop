import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ApiUrl from "../../../../Config/ApiUrls";
import {NavLink} from "react-router-dom";
import {bindActionCreators} from "redux";
import {fetchSingleProduct, getSingleProductData} from "../../../../redux/actions/GetProductAction";
import {deleteFavorite, fetchFavorite} from "../../../../redux/actions/FavoriteAction";
import Icon from "../../../../Config/GlobaliCons";
import {fetchUserOrderProducts} from "../../../../redux/actions/OrdersAction";

class Orders extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        document.title = "همه سفارش ها"
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        this.props.getUserOrders(config)
    }
    render() {
        const {orders} = this.props;
        const ordersData = orders.orders;
         return (
            <React.Fragment>
                <div className="col-lg-9 col-md-9 col-xs-12 pl">
                    <div className="profile-content">
                        <div className="profile-stats">
                            <div className="table-orders">

                                        <table className="table table-profile-orders">
                                            <thead className="thead-light">
                                            <tr>
                                                <th scope="col">شماره سفارش</th>
                                                <th scope="col">تاریخ ثبت سفارش</th>
                                                <th scope="col">وضعیت</th>
                                                <th scope="col">مجموع</th>
                                                <th scope="col">جزئیات</th>
                                            </tr>
                                            </thead>
                                            {
                                                ordersData.length > 0 ?
                                                    ordersData.map( order =>
                                            <tbody>
                                            <tr>
                                                <td className="order-code">{order.order_number}</td>
                                                <td>
                                                    {
                                                        order.created_at.toString().substring(10, 0)
                                                            .replace(/-/g, "/")
                                                    }
                                                </td>
                                                <td className={"Waiting " + (order.status === "success" ? "text-success" : "text-danger")}>
                                                    {order.status === "success" ? 'پرداخت شده' : 'لغو شده'}
                                                </td>
                                                <td className="totla">
                                                    <span className="amount">
                                                        {order.order_total_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                        <span className={"mx-1"}>تومان</span>
                                                    </span>
                                                </td>
                                                <td className="detail">
                                                    <a href="#"
                                                     className="btn btn-secondary d-block">نمایش</a></td>
                                            </tr>
                                            </tbody>
                                                    )
                                                    :
                                                    null
                                            }
                                        </table>
                                {
                                    ordersData.length > 0 ?
                                            null
                                        :
                                        <section className="cart-home">
                                            <div
                                                className="post-item-cart d-block order-2">
                                                <div className="content-page">
                                                    <div className="cart-form">
                                                        <div
                                                            className="cart-empty text-center ">
                                                            <div className="cart-empty-img mb-4 mt-4">
                                                                <img src={Icon.OrderEmpty} width={200}/>
                                                            </div>
                                                            <p className="cart-empty-title">
                                                                لیست محصولات شما خالی میباشد
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                }

                                <div className="profile-orders">
                                    <div className="collapse">
                                        <div className="profile-orders-item">
                                            {
                                                ordersData.length > 0 ?
                                                    ordersData.map( order =>
                                                        <div className="profile-orders-header">
                                                            <a href="profile-order-2.html"
                                                               className="profile-orders-header-details">
                                                                <div className="profile-orders-header-summary">
                                                                    <div className="profile-orders-header-row">
                                                            <span
                                                                className="profile-orders-header-id">{order.order_number}</span>
                                                                        <span className="amount">
                                                                                     {order.order_total_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                        <span className={"mx-1"}>تومان</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className="profile-orders-header-data">
                                                                <div className="profile-info-row">
                                                                    <div className="profile-info-label">تاریخ ثبت سفارش</div>
                                                                    <div className="profile-info-value">
                                                                        {
                                                                            order.created_at.toString().substring(10, 0)
                                                                                .replace(/-/g, "/")
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="profile-info-row">
                                                                    <div className="profile-info-label">مبلغ کل</div>
                                                                    <div className="profile-info-value">
                                                                <span className="amount">
                                                                    {order.order_total_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                    <span>تومان</span>
                                                                </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                        :
                                                    <section className="cart-home">
                                                        <div
                                                            className="post-item-cart d-block order-2">
                                                            <div className="content-page">
                                                                <div className="cart-form">
                                                                    <div
                                                                        className="cart-empty text-center ">
                                                                        <div className="cart-empty-img mb-4 mt-4">
                                                                            <img src={Icon.OrderEmpty} width={200}/>
                                                                        </div>
                                                                        <p className="cart-empty-title">
                                                                            لیست محصولات شما خالی میباشد
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                            }



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>


        );
    }
}

Orders.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        orders: state.orders,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUserOrders: config => {
            dispatch(fetchUserOrderProducts(config))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders);
