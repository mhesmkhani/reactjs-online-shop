import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CartBasket from "./CartBasket";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as action from '../../../../redux/actions/SearchProductAction'
import {fetchSingleProduct, setClearSingleProduct} from "../../../../redux/actions/GetProductAction";
import {fetchFavorite} from "../../../../redux/actions/FavoriteAction";
import {getsearchValue} from "../../../../redux/actions/SearchProductAction";
import {fetchSearch} from "../../../../redux/actions/SearchProductAction";
import {searchProduct} from "../../../../redux/actions/SearchProductAction";
import ApiUrl from "../../../../Config/ApiUrls";

class Search extends Component {
    constructor(props) {
        super(props);
       this.state = {
           searchedText: ''
       }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount() {

    }
    handleGetSingleProduct = (slug) => {
        document.getElementById('searchResultBox').style.display = 'none';
        this.props.getSingleProductData(slug)
    }
    searchKeyUp = () => {
        const data = {
            keyword: this.state.searchedText ? this.state.searchedText : null
        }
        this.props.getSearch(data)
    }
    render() {
        const userInfo = this.props.auth.userInfo;
        const searchResult = this.props.search.searchResult;
        return (
            <React.Fragment>
                <div className="col-lg-9 pl">
                    <div className="header-search row text-right">
                        <div className="header-search-box">
                            <form action="#" className="form-search">
                                <input type="search" className="header-search-input"
                                       onKeyUp={this.searchKeyUp}
                                       onChange={this.onChange}
                                       value={this.state.searchedText}
                                       name="searchedText"
                                       placeholder="نام کالای مورد نظر خود را جستجو کنید ..."/>
                                <div className="action-btns">
                                    <button className="btn btn-search" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                                <div id="searchResultBox"
                                     className="bg-white position-absolute search-parent result-parent"
                                     style={{
                                      display: 'none'
                                }}>
                                    {
                                          searchResult ?
                                              searchResult.map( product =>
                                              <div id="searchItem" className="mt-2">

                                                  <div className="d-flex col-12 border-bottom p-1">
                                                      <div
                                                          className="col-1 text-center search-modal-result-symbol my-auto">
                                                          {
                                                              (!product.images.length) ? null : <img src={ApiUrl.BaseUrl+product.images[0].resized_name} width={40}/>
                                                          }
                                                      </div>
                                                      <div
                                                          className="col-11 text-right d-flex align-items-center py-2 cursor-pointer">
                                                          <Link to={"/product/"+(product.slug)} onClick={() => this.handleGetSingleProduct(product.slug)} className="result-corpName">
                                                              {product.summary}
                                                          </Link>
                                                      </div>
                                                  </div>
                                              </div>
                                              )
                                             :
                                              <div className="text-center p-1">
                                                  <h6 style={{
                                                      fontSize: "14px",
                                                      marginTop: 6
                                                  }}> </h6>
                                              </div>
                                    }


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Search.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        search: state.search
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSearch: data => {
            dispatch(searchProduct(data, message => {
              if (message === "success"){
                  document.getElementById('searchResultBox').style.display = 'block'
              }else {
                  document.getElementById('searchResultBox').style.display = 'none'
              }
            }))
        },
        getSingleProductData: slug => {
            dispatch(fetchSingleProduct(slug))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Search);
