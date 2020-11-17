import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }



    render() {
        return (
            <div>
                <div className="col-lg-3 col-md-3 col-xs-12 pr sticky-sidebar">
                    <div className="shop-archive-sidebar">
                        <div className="sidebar-archive mb-3">
                            <section className="widget-product-categories">
                                <header className="cat-header">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block text-right"
                                                data-toggle="collapse" href="#headingOne" role="button"
                                                aria-expanded="false" aria-controls="headingOne">
                                            دسته بندی محصولات
                                            <i className="mdi mdi-chevron-down"></i>
                                        </button>
                                    </h2>
                                </header>
                                <div className="product-filter">
                                    <div className="card">
                                        <div className="collapse show" id="headingOne">
                                            <div className="card-main mb-0">
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember"
                                                           className="remember-me">همه</label>
                                                </div>
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember" className="remember-me">کالای
                                                        دیجیتال</label>
                                                </div>
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember" className="remember-me">آرایشی،
                                                        بهداشتی و سلامت</label>
                                                </div>
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember" className="remember-me">مد
                                                        و پوشاک</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="widget-product-categories">
                                <header className="cat-header">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block text-right"
                                                data-toggle="collapse" href="#headingTwo" role="button"
                                                aria-expanded="false" aria-controls="headingTwo">
                                            برند ها
                                            <i className="mdi mdi-chevron-down"></i>
                                        </button>
                                    </h2>
                                </header>
                                <div className="product-filter">
                                    <div className="card">
                                        <div className="collapse show" id="headingTwo">
                                            <div className="card-main mb-0">
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember"
                                                           className="remember-me">سامسونگ</label>
                                                </div>
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember"
                                                           className="remember-me">اپل</label>
                                                </div>
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember"
                                                           className="remember-me">نوکیا</label>
                                                </div>
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember"
                                                           className="remember-me">هواوی</label>
                                                </div>
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember"
                                                           className="remember-me">شیایومی</label>
                                                </div>
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember" className="remember-me">ال
                                                        جی</label>
                                                </div>
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember"
                                                           className="remember-me">سونی</label>
                                                </div>
                                                <div className="form-auth-row">
                                                    <label htmlFor="#" className="ui-checkbox">
                                                        <input type="checkbox" value="1" name="login"
                                                               id="remember"/>
                                                        <span className="ui-checkbox-check"></span>
                                                    </label>
                                                    <label htmlFor="remember" className="remember-me">اچ
                                                        تی سی</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="widget-product-categories">
                                <header className="cat-header">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block text-right collapsed"
                                                data-toggle="collapse" href="#headingThree"
                                                role="button" aria-expanded="false"
                                                aria-controls="headingThree">
                                            محدوده قیمت
                                            <i className="mdi mdi-chevron-down"></i>
                                        </button>
                                    </h2>
                                </header>
                                <div className="product-filter">
                                    <div className="card">
                                        <div className="collapse show" id="headingThree">
                                            <div className="card-main mb-0">
                                                <div className="box-data">
                                                    <form action="">
                                                        <div className="mt-5 mb-4">
                                                            <div id="slider-non-linear-step"></div>
                                                        </div>
                                                        <div className="filter-range mt-2 mb-2 pr">
                                                            <span>قیمت: </span>
                                                            <span className="example-val"
                                                                  id="slider-non-linear-step-value"></span> تومان
                                                        </div>
                                                        <div className="mt-2 pl">
                                                            <button className="btn btn-range">
                                                                اعمال
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {};

export default Sidebar;
