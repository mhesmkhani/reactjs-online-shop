import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {deleteCart, fetchCarts, updateCart} from "../../../../redux/actions/CartAction";
import {fetchCities, fetchProvinces} from "../../../../redux/actions/ProvincesAction";
import {fetchOrders} from "../../../../redux/actions/OrdersAction";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiver_name: '',
            receiver_mobile:'',
            receiver_phone:'',
            province: '',
            city: '',
            address:'',
            plaque: '',
            post_code:'',
            home:'',
            payment_type: 1,
            description:'',
            province_id: 0
        }

    }
    onChangeProvince = (e) => {
        var id = e.target.selectedIndex;
        const data = {
            province_id: id,
        }
        this.props.getCities(data)
        this.setState({
            province: e.target.value,
        })
    }
    onChangeCity = (e) => {
        this.setState({
            city: e.target.value,
        })
    }
    componentWillMount() {

    }

    componentDidMount() {
        const apiToken = this.props.auth.apiToken
        const userInfo = this.props.auth.userInfo;
        if (apiToken.length > 0) {
            this.props.getProvinces();
        }

    }

    render() {
        const {provinces} = this.props;
        const provinceData = provinces.provinces;
        const citiesData = provinces.cities;
        return (
            <React.Fragment>
                <div className="col2-set" id="customer-details">
                    <div className="col-12">
                        <div className="billing-fields mt-4">
                            <h4>جزئیات صورتحساب</h4>
                            <div className="form-checkout-row">
                                <div className="validate-required">
                                    <label htmlFor="name">نام تحویل گیرنده <abbr className="required"
                                                                                 title="ضروری">*</abbr></label>
                                    <input type="text" id="name" className="input-name-checkout form-control"/>
                                </div>

                                <div className="validate-required">
                                    <label htmlFor="phone-number">شماره موبایل <abbr className="required"
                                                                                     title="ضروری">*</abbr></label>
                                    <input type="text" id="phone-number"
                                           className="input-name-checkout form-control text-left"/>
                                </div>

                                <div className="validate-required">
                                    <label htmlFor="province">استان
                                        <abbr className="required" title="ضروری"
                                        >*</abbr>
                                    </label>
                                    <select value={this.state.province} id="province" name="province" onChange={this.onChangeProvince}  className="form-control">
                                        <option value="date-desc" selected="selected">استان
                                            مورد نظر خود را انتخاب کنید
                                        </option>
                                        {
                                            provinceData.map(province =>
                                              <option id={province.id} value={province.name}>{province.name}</option>
                                    )}
                                    </select>
                                </div>
                                <div className="validate-required">
                                    <label htmlFor="city">شهر
                                        <abbr className="required" title="ضروری"
                                        >*</abbr></label>
                                    <select value={this.state.city} id="city" name="city" onChange={this.onChangeCity} className="form-control">
                                        <option value="date-desc" selected="selected">شهر
                                            مورد نظر خود را انتخاب کنید
                                        </option>
                                        {
                                            citiesData.map(city =>
                                                <option id={city.id} value={city.name}>{city.name}</option>
                                      )}
                                    </select>
                                </div>
                                <div className="validate-required">
                                    <label htmlFor="Street">آدرس<abbr
                                        className="required" title="ضروری">*</abbr></label>
                                    <input type="text" id="post-code"
                                           className="input-name-checkout form-control"/>
                                </div>
                                <div className={"validate-required"}>
                                    <label htmlFor="bld-num">
                                        پلاک/واحد
                                        <abbr className="required" title="ضروری"
                                        >*</abbr>
                                    </label>
                                    <input type="text" id="bld-num"
                                           className="input-name-checkout js-input-bld-num form-control"/>
                                </div>

                                <div className="validate-required">
                                    <label htmlFor="post-code">کد پستی <abbr
                                        className="required" title="ضروری">*</abbr></label>
                                    <input type="text" id="post-code"
                                           className="input-name-checkout form-control"
                                           placeholder="کد پستی را بدون خط تیره بنویسید"/>
                                </div>
                                <div className="validate-required">
                                    <label htmlFor="post-code">تلفن ثابت </label>
                                    <input type="text" id="home"
                                           className="input-name-checkout form-control"
                                    />
                                </div>

                                <label htmlFor="address">توضیحات سفارش
                                    <span className="optional">(اختیاری)</span>
                                </label>
                                <textarea rows="5" cols="30" id="address"
                                          className="textarea-name-checkout form-control"
                                          placeholder="یادداشت ها درباره سفارش شما ، برای مثال نکات مهم برای تحویل بار "/>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Form.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        provinces: state.provinces,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        getProvinces: () => {
            dispatch(fetchProvinces())
        },
        getCities: (id) => {
            dispatch(fetchCities(id))
        },

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form);
