import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Gallery from "./SubComponents/Gallery";
import BreadCrumb from "./SubComponents/BreadCrumb";
import Content from "./SubComponents/Content";
import Icons from "./SubComponents/Icons";
import Tabs from "./SubComponents/Tabs";
import {connect} from "react-redux";

class Index extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }


    render() {
        const singleProduct = this.props.singleProduct.singleProduct.length
        return (
            <>
                {
                    singleProduct > 0 ?
                        <div className="container-main">
                            <div className="d-block">
                                <div className="page-content page-row">
                                    <div className="main-row">
                                        {/*url helpers*/}
                                        <BreadCrumb/>
                                        <div className="col-lg">
                                            <div className="product type-product">
                                                {/*Gallery*/}
                                                <Gallery/>
                                                {/*content*/}
                                                <Content/>
                                                {/*icons*/}
                                                <Icons/>
                                            </div>
                                        </div>
                                    </div>
                                    {/*tabs&information*/}
                                    <Tabs/>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }

            </>
        );
    }
}

Index.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        singleProduct: state.singleProduct
    }
}
export default connect(mapStateToProps)(Index);
