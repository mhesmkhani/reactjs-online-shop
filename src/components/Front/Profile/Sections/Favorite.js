import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as action from '../../../../redux/actions/FavoriteAction'

class Favorite extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        this.props.fetchFavorite(1)
    }


    render() {
        return (
            <>
                <div className="col-lg-9 col-md-9 col-xs-12 pl">
                    <div className="profile-content">
                        <div className="profile-stats">
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
                                    <tr>
                                        <th scope="row">
                                            <div className="favorites-product-img">
                                                <img src="assets/images/slider-product/Samsung-S10Plus.jpg"/>
                                                    <div className="product-rate">
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                    </div>
                                            </div>
                                        </th>
                                        <td>
                                            <a href="#">سامسونگ گلکسی اس 10 پلاس – 128 گیگابایت – دو سیم کارت</a>
                                        </td>
                                        <td>
                                                    <span className="amount">6,000,000
                                                        <span>تومان</span>
                                                    </span>
                                        </td>
                                        <td className="text-left actions">
                                            <a href="#" className="remove-product"><i className="mdi mdi-close"></i></a>
                                        </td>
                                    </tr>
                                    <tr className="spacer"></tr>
                                    </tbody>
                                </table>
                                <div className="profile-recent-fav">
                                    <a href="#" className="img-profile-favorites">
                                        <img src="assets/images/slider-product/Samsung-S10Plus.jpg"/>
                                    </a>
                                    <div className="profile-recent-fav-col">
                                        <a href="#">سامسونگ گلکسی اس 10 پلاس – 128 گیگابایت – دو سیم کارت</a>
                                    </div>
                                    <div className="profile-recent-fav-price">
                                            <span className="amount">6,000,000
                                                <span>تومان</span>
                                            </span>
                                    </div>
                                    <div className="profile-recent-fav-remove">
                                        <a href="#"><i className="mdi mdi-close"></i></a>
                                    </div>
                                </div>

                            </div>
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
        auth: state.auth
    }
}
export default connect(mapStateToProps,action)(Favorite);