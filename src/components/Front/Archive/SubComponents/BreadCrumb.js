import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BreadCrumb extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div id="breadcrumb">
                    <i className="mdi mdi-home"></i>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">خانه</a></li>
                            <li className="breadcrumb-item active" aria-current="page">آرشیو محصولات
                            </li>
                        </ol>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

BreadCrumb.propTypes = {};

export default BreadCrumb;
