import React, {Component} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Index from "./Index";
import {connect} from "react-redux";
import * as action from '../../../redux/actions/SearchProductAction'
import {fetchSearch} from "../../../redux/actions/SearchProductAction";
import {setClearSingleProduct} from "../../../redux/actions/GetProductAction";

class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {

    }

    componentDidMount() {
       let param =  this.props.match.params.q
       this.props.search(param)

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

Archive.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        search: state.search
    }
}
const mapDispatchToProps = dispatch => {
    return {
        search: slug => {
            dispatch(fetchSearch(slug))
        },
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Archive);
