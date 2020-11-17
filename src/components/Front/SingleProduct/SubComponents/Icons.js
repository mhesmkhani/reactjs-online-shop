import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../Config/GlobaliCons";

class Icons extends Component {
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
                <div className="product-usp">
                    <div className="product-feature">
                        <div className="product-feature-col">
                            <a href="#" className="product-feature-item">
                                <img src={Icon.Delivery}/>
                                امکان تحویل
                                <br/>
                                اکسپرس
                            </a>
                        </div>
                        <div className="product-feature-col">
                            <a href="#" className="product-feature-item">
                                <img src={Icon.ContactUs}/>
                                ۷ روز هفته
                                <br/>
                                ۲۴ ساعته
                            </a>
                        </div>
                        <div className="product-feature-col">
                            <a href="#" className="product-feature-item">
                                <img src={Icon.PaymentTerms}/>
                                امکان
                                <br/>
                                پرداخت در محل
                            </a>
                        </div>
                        <div className="product-feature-col">
                            <a href="#" className="product-feature-item">
                                <img src={Icon.ReturnPolicy}/>
                                هفت روز ضمانت بازگشت کالا
                            </a>
                        </div>
                        <div className="product-feature-col">
                            <a href="#" className="product-feature-item">
                                <img  src={Icon.OriginGuarantee}/>
                                ضمانت
                                <br/>
                                اصل بودن کالا
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Icons.propTypes = {};

export default Icons;
