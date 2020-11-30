import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import * as action from '../../../../redux/actions/GetProductAction'
import ApiUrl from "../../../../Config/ApiUrls";

class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    handleGetSingleProduct = (data) => {
        this.props.getSingleProductData(data)
    }
    render() {
        const searchProductResult = this.props.search.searchProduct;
        return (
            <div>
                <div className="col-lg-9 col-md-9 col-xs-12 pl">
                    <div className="shop-archive-content mt-3 d-block">
                        <div className="archive-header">
                            <h2 className="archive-header-title">آرشیو محصولات</h2>
                            <div className="sort-tabs mt-0 d-inline-block pr">
                                <h4>مرتب‌سازی بر اساس :</h4>
                            </div>
                            <div className="nav-sort-tabs-res">
                                <ul className="nav sort-tabs-options" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="Most-visited-tab"
                                           data-toggle="tab" href="#Most-visited" role="tab"
                                           aria-controls="Most-visited"
                                           aria-selected="true">پربازدیدترین</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="Bestselling-tab" data-toggle="tab"
                                           href="#Bestselling" role="tab" aria-controls="Bestselling"
                                           aria-selected="false">پرفروش‌ترین‌</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="Most-Popular-tab" data-toggle="tab"
                                           href="#Most-Popular" role="tab" aria-controls="Most-Popular"
                                           aria-selected="false">محبوب‌ترین</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="newest-tab" data-toggle="tab"
                                           href="#newest" role="tab" aria-controls="newest"
                                           aria-selected="false">جدیدترین</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="cheapest-tab" data-toggle="tab"
                                           href="#cheapest" role="tab" aria-controls="cheapest"
                                           aria-selected="false">ارزان‌ترین</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="most-expensive-tab"
                                           data-toggle="tab" href="#most-expensive" role="tab"
                                           aria-controls="most-expensive"
                                           aria-selected="false">گران‌ترین</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-items">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="Most-visited"
                                     role="tabpanel" aria-labelledby="Most-visited-tab">
                                    <div className="row">
                                        {
                                            searchProductResult.map(productData =>
                                                <div className="col-lg-3 col-md-3 col-xs-12 order-1 d-block mb-3">
                                                    <NavLink to={"/product/"+(productData.slug)} onClick={() => this.handleGetSingleProduct(productData.slug)}>
                                                    <section className="product-box product product-type-simple">
                                                        <div className="thumb">
                                                            <div className="d-block">
                                                                <div className="promotion-badge">فروش ویژه</div>
                                                                <div className="product-rate">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="discount-d">
                                                                    <span>20%</span>
                                                                </div>
                                                                {
                                                                    <img src={ApiUrl.BaseUrl + (productData.images[0].filename)}/>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="title">
                                                            <span>{productData.title}</span>
                                                        </div>
                                                        <div className="price">
                                                    <span className="amount">
                                                        {productData.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                        <span className="mx-1">تومان</span>
                                                    </span>
                                                        </div>
                                                    </section>
                                                    </NavLink>
                                                </div>
                                            )}
                                    </div>


                                </div>

                            </div>
                        </div>


                        <div className="pagination-product">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link active" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        search: state.search
    }
}
export default connect(mapStateToProps,action)(Sidebar);
