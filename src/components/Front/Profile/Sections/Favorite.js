import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ApiUrl from "../../../../Config/ApiUrls";
import {NavLink} from "react-router-dom";
import {bindActionCreators} from "redux";
import {fetchSingleProduct, getSingleProductData} from "../../../../redux/actions/GetProductAction";
import {deleteFavorite, fetchFavorite} from "../../../../redux/actions/FavoriteAction";
import Icon from "../../../../Config/GlobaliCons";

class Favorite extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        this.props.getUserFavorite(config)
    }
    handleRedirect = (slug) => {
        this.props.onClickSingleProduct(slug)
    }
    handleRemoveFavorite = (id) => {
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        const data = {
            product_id: id,
        }
        this.props.onClickToRemoveFavorite(data,config)
        this.componentDidMount();
    }
    render() {
        const {favorite} = this.props;
        const favoriteData = favorite.favorite;
         return (
            <>
                <div className="col-lg-9 col-md-9 col-xs-12 pl">
                    <div className="profile-content content-page">
                        <div className="profile-stats">
                            {
                                favoriteData.length > 0 ?
                                    <div className="table-favorites">
                                        <table className="table ns-table table-profile-favorites">
                                            <thead>
                                            <tr>
                                                <th scope="col" width="50"></th>
                                                <th scope="col">نام محصول</th>
                                                <th scope="col">قیمت</th>
                                                <th className="actions-th"></th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {
                                                favoriteData.map(product => {
                                                    return (<tr>

                                                            <th scope="row">
                                                                <div className="favorites-product-img">
                                                                    {
                                                                        (!product.images.length) ? null : <img src={ApiUrl.BaseUrl+product.images[0].filename}/>
                                                                    }
                                                                </div>

                                                            </th>

                                                            <td>
                                                                <NavLink to={"/product/"+(product.slug)} onClick={() => this.handleRedirect(product.slug)}>
                                                                    {product.title}
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                <span className="amount">
                                                {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                    <span className={"mx-1"}>تومان</span>
                                                </span>
                                                            </td>
                                                            <td className="text-left actions">
                                                <span onClick={() => this.handleRemoveFavorite(product.id)} className="remove-product cursor-pointer">
                                                 <i className="mdi mdi-close"></i>
                                                </span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }


                                            <tr className="spacer"></tr>
                                            </tbody>
                                        </table>
                                        {
                                            favoriteData.map(product =>
                                                    <div className="profile-recent-fav">
                                                        <a href="#" className="img-profile-favorites">
                                                            <img src={ApiUrl.BaseUrl+product.images[0].resized_name} width={100}/>
                                                        </a>
                                                        <div className="profile-recent-fav-col">
                                                            <NavLink to={"/product/"+(product.slug)} onClick={() => this.handleRedirect(product.slug)}>
                                                                {product.title}
                                                            </NavLink>
                                                        </div>
                                                        <div className="profile-recent-fav-price">
                                            <span className="amount">
                                                {product.price}
                                                <span>تومان</span>
                                            </span>
                                                        </div>
                                                        <div onClick={() => this.handleRemoveFavorite(product.id)} className="profile-recent-fav-remove">
                                                            <a href="#"><i className="mdi mdi-close"></i></a>
                                                        </div>
                                                    </div>
                                            )}

                                    </div>
                                    :
                                    <section className="cart-home">
                                        <div
                                            className="post-item-cart d-block order-2">
                                            <div className="content-page">
                                                <div className="cart-form">
                                                    <div
                                                        className="cart-empty text-center ">
                                                        <div className="cart-empty-img mb-4 mt-4">
                                                            <img src={Icon.HeartEmpty} width={120}/>
                                                        </div>
                                                        <p className="cart-empty-title">
                                                          لیست علاقه مندی شما خالی است
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
            </>


        );
    }
}

Favorite.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        favorite: state.favorite
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClickSingleProduct: slug => {
            dispatch(fetchSingleProduct(slug))
        },
        onClickToRemoveFavorite: (producId,config) => {
            dispatch(deleteFavorite(producId,config))
        },
        getUserFavorite: config => {
            dispatch(fetchFavorite(config))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Favorite);
