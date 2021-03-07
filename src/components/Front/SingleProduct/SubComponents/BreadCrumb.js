import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as action from '../../../../redux/actions/BreadCrumbAction'
import Loader from "react-loader-spinner";

class BreadCrumb extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {
        const singleProdcut = this.props.singleProduct.singleProduct;
        const id = singleProdcut.map(product => product.sub_sub_category_id)
        this.props.getBreadCrumb(id)
    }

    render() {
        const productTitle = this.props.singleProduct.singleProduct.map(product => product.title);
        const breadCrumb = this.props.breadCrumb.breadCrumb;

        return (
            <React.Fragment>
                {/*{*/}
                {/*    this.state.spinner ?*/}
                {/*        <div className="main-loading d-flex justify-content-center align-items-center mt-3" >*/}
                {/*            <Loader className="text-center" type="Oval" color="#00bfd6" height={80} width={80} style={{zIndex:1600}}/>*/}
                {/*        </div>*/}
                {/*        :*/}
                {/*        null*/}
                {/*}*/}
                <div id="breadcrumb">
                    <i className="mdi mdi-home"></i>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">خانه</a></li>
                            <li className="breadcrumb-item"><a href="#">{breadCrumb.category}</a></li>
                            <li className="breadcrumb-item"><a href="#">{breadCrumb.subCategory}</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{productTitle}</li>
                        </ol>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

BreadCrumb.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        singleProduct: state.singleProduct,
        breadCrumb: state.breadCrumb
    }
}
export default connect(mapStateToProps, action)(BreadCrumb);
