import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as action from "../../../redux/actions/SearchProductAction";
import Sidebar from "./SubComponents/Sidebar";
import Content from "./SubComponents/Content";
import BreadCrumb from "./SubComponents/BreadCrumb";

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
            <div>
                <div className="container-main">
                    <div className="d-block">
                        <div className="page-content page-row">
                            <div className="main-row">
                                  <BreadCrumb/>
                                  <Sidebar/>
                                  <Content/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        search: state.search
    }
}
export default connect(mapStateToProps,action)(Index);

