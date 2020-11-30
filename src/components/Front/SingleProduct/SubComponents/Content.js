import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {deleteFavorite, fetchFavorite, storeFavorite} from "../../../../redux/actions/FavoriteAction";
import {fetchCarts, storeCart} from "../../../../redux/actions/CartAction";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }

    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
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


    componentWillUnmount() {

    }

    sumQuantity = () => {
        this.setState({
            quantity: this.state.quantity += 1
        })
    }
    minusQuantity = () => {
        if(this.state.quantity <= 1){
            this.setState({
                quantity: 1
            })
        }else {
            this.setState({
                quantity: this.state.quantity -= 1
            })
        }
    }

    handleAddCart = (id) => {
        const productID = id[0];
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        const data = {
            product_id: productID,
            quantity: this.state.quantity
       }
        this.props.onClickToAddCart(data,config)
        this.componentDidMount();
    }
    render() {
        const singleProdcut = this.props.singleProduct.singleProduct;
        const categoryTitle = this.props.breadCrumb.breadCrumb.map(category => category.title);
        const subcategorieTitle = this.props.breadCrumb.breadCrumb.map(category => category.subcategories.map(subcategorie => subcategorie.title));
        const {cart} = this.props;
        const cartData = cart.cart;
        let attributes = [];
        let isCart = false;
        singleProdcut.map((product,index) => {
            cartData.reduce((fav, el) => {
                if (el.id !== null && product.id === el.id) {
                    isCart = true
                }
                return fav;
            }, [])
        })
         singleProdcut.map(product => product.attributes.map((item, index) => {
                switch (index) {
                    case 0:
                        attributes.push(item);
                        break;
                    case 1:
                        attributes.push(item);
                        break;
                    case 2:
                        attributes.push(item);
                        break;
                    case 3:
                        attributes.push(item);
                        break;
                    case 4:
                        attributes.push(item);
                        break;
                }
            }
        ))
        return (

            <div>
                <div className="col-lg-7 col-xs-12 pl mt-5 d-block">
                    <section className="product-info">
                        <div className="product-headline">
                            <h1 className="product-title">
                                {singleProdcut.map(product => product.title)}
                            </h1>
                            <div className="product-guaranteed text-success">
                                12
                                <span>فروش موفق</span>
                            </div>
                        </div>
                        <div className="product-attributes">
                            <div className="product-config">
                                <span
                                    className="product-title-en">Samsung Galaxy Note 10 Dual SIM 256GB Mobile Phone</span>
                                <div className="product-rate">
                                    <i className="fa fa-star active"></i>
                                    <i className="fa fa-star active"></i>
                                    <i className="fa fa-star active"></i>
                                    <i className="fa fa-star active"></i>
                                    <i className="fa fa-star active"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-config-wrapper">
                            <div className="product-directory">
                                <ul>
                                    <li>
                                        <span>
                                          <i className="fa fa-archive"></i> دسته:
                                        </span>
                                        <a  className="product-link product-cat-title">{categoryTitle}</a>
                                        ,
                                        <a  className="product-link product-cat-title">{subcategorieTitle}</a>
                                    </li>
                                    <li>
                                                <span>
                                                    <i className="fa fa-tags"></i> برچسب:
                                                </span>
                                        <a href="#"
                                           className="product-link product-tag-title">سامسونگ</a>
                                    </li>
                                    <li>
                                                <span>
                                                    برند:
                                                </span>
                                        <a href="#"
                                           className="product-link product-tag-title">سامسونگ</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col=lg-6 col-md-6 col-xs-12 pr">
                                <div className="product-params pt-3">
                                    <ul data-title="ویژگی‌های محصول">
                                        {
                                            attributes.map(item =>
                                                <li>
                                                    <span>{item.attribute_keys}</span>
                                                    <span>{item.attribute_values}</span>
                                                </li>
                                            )}

                                    </ul>
                                </div>

                            </div>
                            <div className="col=lg-6 col-md-6 col-xs-12 pr">
                                <div className="product-seller-info">
                                    <div className="seller-info-changable">
                                        <div className="product-seller-row vendor">
                                            <span className="title"> فروشنده:</span>
                                            <a href="#" className="product-name">سرمد</a>
                                        </div>
                                        <div className="product-seller-row guarantee">
                                            <span className="title"> گارانتی:</span>
                                            <a href="#" className="product-name">
                                                گارانتی اصالت و سلامت فیزیکی کالا
                                            </a>

                                        </div>
                                        <div className="product-seller-row price">
                                            <span className="title"> قیمت:</span>
                                            <a href="#" className="product-name">
                                                        <span className="amount">
                                                     {singleProdcut.map(product => product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ","))}
                                                       <span className="mx-1">تومان</span>
                                                        </span>
                                            </a>
                                        </div>
                                        <div className="product-seller-row guarantee">
                                            <span className="title mt-3"> تعداد:</span>
                                            <div className="quantity pl">
                                                <input type="number"
                                                       min="1"
                                                       max="100"
                                                       step="1"
                                                       name={"quantity"}
                                                       onChange={this.onChange}
                                                       value={this.state.quantity}/>
                                                <div className="quantity-nav">
                                                    <div onClick={this.sumQuantity} className="quantity-button quantity-up"> + </div>
                                                    <div onClick={this.minusQuantity} className="quantity-button quantity-down" aria-disabled={true}> - </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-seller-row add-to-cart">
                                            {
                                                isCart === true ?
                                                    <a onClick={() => alert("getCheckout")}  className="text-white btn-add-to-cart btn btn-primary">
                                                        <span className="btn-remove-to-cart-txt"> ادامه فرایند خرید </span>
                                                    </a>
                                                    :
                                                    <a onClick={() => this.handleAddCart(singleProdcut.map(product => product.id))}  className="text-white btn-add-to-cart btn btn-primary">
                                                        <span className="btn-add-to-cart-txt">افزودن به سبد خرید</span>
                                                    </a>
                                            }
                                        </div>
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

Content.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        singleProduct: state.singleProduct,
        breadCrumb: state.breadCrumb,
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClickToAddCart: (producId,config) => {
            dispatch(storeCart(producId,config))
        },
        getUserCart: config => {
            dispatch(fetchCarts(config))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);
