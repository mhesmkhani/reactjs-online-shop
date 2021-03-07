import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Index from "./Index";
import {fetchSearch} from "../../../redux/actions/SearchProductAction";
import {connect} from "react-redux";
import {fetchSingleProduct} from "../../../redux/actions/GetProductAction";

class SingleProduct extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {
        let param =  this.props.match.params.slug
        this.props.getSingleProductData(param)
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                 <Index/>
                <Footer/>
            </React.Fragment>
        );
    }
}

SingleProduct.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSingleProductData: slug => {
            dispatch(fetchSingleProduct(slug))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SingleProduct);
