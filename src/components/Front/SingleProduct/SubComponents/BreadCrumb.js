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
            <div>
                <div id="breadcrumb">
                    <i className="mdi mdi-home"></i>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">خانه</a></li>
                            <li className="breadcrumb-item"><a href="#">کالای دیجیتال</a></li>
                            <li className="breadcrumb-item"><a href="#">موبایل</a></li>
                            <li className="breadcrumb-item active" aria-current="page">گوشی موبایل
                                سامسونگ
                                مدل Galaxy Note 10 SM-N970F/DS دو سیم‌کارت ظرفیت 256 گیگابایت
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        );
    }
}

BreadCrumb.propTypes = {};

export default BreadCrumb;
