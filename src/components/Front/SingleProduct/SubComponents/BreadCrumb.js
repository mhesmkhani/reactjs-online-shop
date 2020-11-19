import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as action from '../../../../redux/actions/BreadCrumbAction'

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
            const categoryTitle = this.props.breadCrumb.breadCrumb.map(category => category.title);
            const subcategorieTitle = this.props.breadCrumb.breadCrumb.map(category => category.subcategories.map( subcategorie => subcategorie.title));

        return (
            <div>
                <div id="breadcrumb">
                    <i className="mdi mdi-home"></i>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">خانه</a></li>
                            <li className="breadcrumb-item"><a href="#">{categoryTitle}</a></li>
                            <li className="breadcrumb-item"><a href="#">{subcategorieTitle}</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{productTitle}</li>
                        </ol>
                    </nav>
                </div>
            </div>
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
