import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import OwlCarousel from 'react-owl-carousel2';
import ReactImageZoom from 'react-image-zoom';

// import 'react-owl-carousel2/style.css'

import {NavLink, Redirect} from "react-router-dom";
import {fetchSingleProduct} from "../../../../redux/actions/GetProductAction";
import {deleteFavorite, fetchFavorite, storeFavorite} from "../../../../redux/actions/FavoriteAction";
import ApiUrl from "../../../../Config/ApiUrls";
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImage: '',
        }

    }

    componentWillMount() {

    }
    componentDidMount() {
        const apiToken = this.props.auth.apiToken
        if (apiToken.length > 0) {
            const config = {
                headers: {'Authorization': this.props.auth.apiToken}
            }
            this.props.getUserFavorite(config)
        }

    }
    handleSetImage = (data) => {
       this.setState({
           mainImage: data
       })
    }
    handleAddFavortie = (id) => {
        const apiToken = this.props.auth.apiToken;
        if(apiToken){
            const productID = id[0];
            const config = {
                headers: {'Authorization': this.props.auth.apiToken}
            }
            const data = {
                product_id: productID,
            }
            this.props.onClickToAddFavorite(data,config)
            setTimeout(
                function() {
                    this.componentDidMount();
                }
                    .bind(this),
                100
            )
        }else {
            this.setState({
                redirect: true
            })
        }

    }
    handleRemoveFavorite = (id) => {
        const productID = id[0];
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        const data = {
            product_id: productID,
        }
        this.props.onClickToRemoveFavorite(data,config)
        setTimeout(
            function() {
                this.componentDidMount();
            }
                .bind(this),
            100
        )
    }
    render() {
        const {mainImage,redirect} = this.state;
        const singleProdcut = this.props.singleProduct.singleProduct;
        const {favorite} = this.props;
        const favoriteData = favorite.favorite;
        let isFavorite = false;
        if(redirect){
            return <Redirect to={'/login'}/>
        }

        singleProdcut.map((product) => {
                    /*use Find instead of the reduce*/
                    favoriteData.find(item => {
                        if (item.id === product.id){
                            isFavorite = true
                        }
                    })
                //     favoriteData.reduce((fav, item) => {
                //     if (item.id !== null && product.id === item.id) {
                //         isFavorite = true
                //     }
                //     return fav;
                // }, [])
        })

        const options = {
            rtl: true,
            loop: false,
            dots: false,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 2,
                },
                1000:{
                    items: 4
                }
            }
        };
        return (
            <React.Fragment>
                <div className="col-lg-5 col-xs-12 pr d-block ">
                    <section className="product-gallery">
                        <div className="gallery">
                            <div className="gallery-item">
                                <div>
                                    <ul className="gallery-actions">
                                        {
                                            isFavorite === true ?
                                                <li className="mx-1">
                                                    < a onClick={() => this.handleRemoveFavorite(singleProdcut.map(item => item.id))} className="btn-option btn-isFavorite add-product-wishes cursor-pointer">
                                                        <i className="mdi mdi-heart"></i>
                                                        <span>
                                                       <span>??????????</span>
                                                </span>
                                                    </a>
                                                </li>
                                                :
                                                <li className="mx-1">
                                                    < a onClick={() => this.handleAddFavortie(singleProdcut.map(item => item.id))} className="btn-option add-product-wishes cursor-pointer">
                                                        <i className="mdi mdi-heart-outline"></i>
                                                        <span>
                                                       <span>??????????</span>
                                                </span>
                                                    </a>
                                                </li>
                                        }

                                        <li className="mx-1 option-social">
                                            <a href="#" className="btn-option btn-option-social"
                                               data-toggle="modal" data-target="#option-social">
                                                <i className="mdi mdi-share"></i>
                                                <span>????????????</span>
                                            </a>
                                            <div className="modal fade" id="option-social"
                                                 tabIndex="-1" role="dialog"
                                                 aria-labelledby="exampleModalCenterTitle"
                                                 aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered"
                                                     role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title"
                                                                id="exampleModalCenterTitle">????????????
                                                                ??????????</h5>
                                                            <button type="button" className="close"
                                                                    data-dismiss="modal"
                                                                    aria-label="Close">
                                                                                        <span
                                                                                            aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="title">???? ?????????????? ????
                                                                ??????????????? ?????? ??????????????????? ?????? ????????
                                                                ???? ???? ???????????? ?????? ???? ????????????
                                                                ??????????????.
                                                            </div>
                                                            <form action="#"
                                                                  className="email-sharing">
                                                                <h5 className="share-title">?????????? ????
                                                                    ???????? ??????????</h5>
                                                                <div
                                                                    className="input-group-sharing">
                                                                    <input type="email"
                                                                           className="share-email-address form-control"
                                                                           id="share-email"/>
                                                                    <button
                                                                        className="btn-send-email btn btn-primary"
                                                                        type="submit">??????????
                                                                        ??????????
                                                                    </button>
                                                                </div>
                                                            </form>
                                                            <div className="share-options">
                                                                <div
                                                                    className="share-social-buttons text-center">
                                                                    <a href="#"
                                                                       className="share-social share-social-twitter">
                                                                        <i className="mdi mdi-twitter"></i>
                                                                    </a>
                                                                    <a href="#"
                                                                       className="share-social share-social-facebook">
                                                                        <i className="mdi mdi-facebook"></i>
                                                                    </a>
                                                                    <a href="#"
                                                                       className="share-social share-social-whatsapp">
                                                                        <i className="mdi mdi-whatsapp"></i>
                                                                    </a>
                                                                    <a href="#"
                                                                       className="share-social share-social-email-outline">
                                                                        <i className="mdi mdi-email-outline"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="form-share-col">
                                                                <input className="ui-url-field"
                                                                       type="url"
                                                                       value="https://www.digikala.com/product/dkp-1672478"
                                                                       readOnly=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mx-1 option-alarm">
                                            <a href="#" className="btn-option btn-option-alarm"
                                               data-toggle="modal"
                                               data-target="#btn-option-alarm">
                                                <i className="mdi mdi-bell-outline"></i>
                                                <span>???????????????????????</span>
                                            </a>
                                            <div className="modal fade" id="btn-option-alarm"
                                                 tabIndex="-1" role="dialog"
                                                 aria-labelledby="exampleModalCenterTitle"
                                                 aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered"
                                                     role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title"
                                                                id="exampleModalCenterTitle">????
                                                                ???? ?????????? ??????</h5>
                                                            <button type="button" className="close"
                                                                    data-dismiss="modal"
                                                                    aria-label="Close">
                                                                                        <span
                                                                                            aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div
                                                                className="form-notification-title">????
                                                                ????????:
                                                            </div>
                                                            <div className="form-auth-row">
                                                                <label htmlFor="#"
                                                                       className="ui-checkbox mt-1">
                                                                    <input type="checkbox"
                                                                           value="1"
                                                                           name="login"
                                                                           id="remember"/>
                                                                    <span
                                                                        className="ui-checkbox-check"></span>
                                                                </label>
                                                                <label htmlFor="remember"
                                                                       className="remember-me mr-0">??????????
                                                                    ????
                                                                    info@esarmad.ir</label>
                                                            </div>
                                                            <div className="form-auth-row">
                                                                <label htmlFor="#"
                                                                       className="ui-checkbox mt-1">
                                                                    <input type="checkbox"
                                                                           value="1"
                                                                           name="login"
                                                                           id="remember"/>
                                                                    <span
                                                                        className="ui-checkbox-check"></span>
                                                                </label>
                                                                <label htmlFor="remember"
                                                                       className="remember-me mr-0">??????????
                                                                    ???? *******0991</label>
                                                            </div>
                                                            <div className="form-auth-row">
                                                                <label htmlFor="#"
                                                                       className="ui-checkbox mt-1">
                                                                    <input type="checkbox"
                                                                           value="1"
                                                                           name="login"
                                                                           id="remember"/>
                                                                    <span
                                                                        className="ui-checkbox-check"></span>
                                                                </label>
                                                                <label htmlFor="remember"
                                                                       className="remember-me mr-0">??????????
                                                                    ???????? ???????? ????????
                                                                    ????????????</label>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button"
                                                                    className="btn btn-primary ml-2">??????
                                                            </button>
                                                            <button type="button"
                                                                    className="btn btn-secondary"
                                                                    data-dismiss="modal">????????????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mx-1 Three-dimensional">
                                            <a href="#" className="btn-option btn-Three-dimensional"
                                               data-toggle="modal" data-target="#more-product">
                                                <i className="mdi mdi-more"></i>
                                                <span>?????????? ??????????</span>
                                            </a>
                                            <div className="modal fade" id="more-product"
                                                 tabIndex="-1" role="dialog"
                                                 aria-labelledby="exampleModalCenterTitle"
                                                 aria-hidden="true">
                                                <div
                                                    className="modal-dialog modal-dialog-centered more-product"
                                                    role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-body">
                                                            <div id="custom-events">
                                                                {
                                                                    singleProdcut.map(product => product.images.map(image =>
                                                                        <a href={ApiUrl.BaseUrl + (image.filename)}>
                                                                            <img  src={ApiUrl.BaseUrl+ (image.filename)}/>
                                                                        </a>
                                                                    ))}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mx-1 Three-dimensional">
                                            <a href="product-comparison.html"
                                               className="btn-option btn-compare">
                                                <i className="mdi mdi-compare"></i>
                                                <span>????????????</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-img">
                                    {singleProdcut.map(item =>
                                        <a href="#" >
                                            <img className="background-main-image" src={ApiUrl.BaseUrl +(mainImage.length > 1 ? mainImage : item.images[0].filename)} width={500}/>
                                        </a>
                                    )}
                                    <div id="gallery_01f"   style={{width: 500, float: 'right'}}>
                                        <ul className="gallery-items" id="gallery-slider">
                                            <OwlCarousel
                                                options={options}
                                           >
                                            {singleProdcut.map(item => item.images.map(image =>
                                                <li className="item">
                                                    <div onClick={() => this.handleSetImage(image.filename)} className="elevatezoom-gallery  active"
                                                       data-update=""
                                                       data-image={ApiUrl.BaseUrl + (image.resized_name)}
                                                       data-zoom-image={ApiUrl.BaseUrl + (image.resized_name)}>
                                                        <img className="cursor-pointer" src={ApiUrl.BaseUrl + (image.resized_name)} style={{width: 100}}/>
                                                    </div>
                                                </li>
                                            ))}
                                            </OwlCarousel>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

Gallery.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        singleProduct: state.singleProduct,
        favorite: state.favorite,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClickToAddFavorite: (producId,config) => {
            dispatch(storeFavorite(producId,config,callback => {
                if(callback === "success"){
                    // alert("success")
                }
            }))
        },
        onClickToRemoveFavorite: (producId,config) => {
            dispatch(deleteFavorite(producId,config,callback => {
                console.log(callback)
            }))
        },
        getUserFavorite: config => {
            dispatch(fetchFavorite(config))
        },

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);
