import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Gallery from "./SubComponents/Gallery";
import BreadCrumb from "./SubComponents/BreadCrumb";
import Content from "./SubComponents/Content";
import Icons from "./SubComponents/Icons";
import Tabs from "./SubComponents/Tabs";

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
                        <div class="page-content page-row">
                            <div class="main-row">
                                {/*url helpers*/}
                                <BreadCrumb/>
                                <div class="col-lg">
                                    <div class="product type-product">
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
            </>
        );
    }
}

Index.propTypes = {};

export default Index;
