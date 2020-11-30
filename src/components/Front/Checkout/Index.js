import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkout from "./Checkout";
import Form from "./SubComponents/Form";
import DetailProduct from "./SubComponents/DetailProduct";

class Index extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div class="container-main">
                    <div class="d-block">
                        <section class="blog-checkout d-block order-1">
                            <div class="col-lg">
                                <div class="checkout woocommerce-checkout">
                                    <div class="content-checkout container">
                                        <div class="middle-container ">
                                            <div className={"form-checkout"}>
                                                <Form/>
                                                <DetailProduct/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </>

        );
    }
}

Index.propTypes = {};

export default Index;