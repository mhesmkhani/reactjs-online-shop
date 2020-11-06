import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class Test extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <section className="page-account-box">
                            <h1>This is test</h1>
                            </section>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

Test.propTypes = {};

export default Test;