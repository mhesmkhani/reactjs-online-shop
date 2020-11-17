import React, {Component} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Index from "./Index";
import {connect} from "react-redux";
import * as action from '../../../redux/actions/SearchProductAction'

class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {

    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                 <Header/>
                  <Index/>
                 <Footer/>
            </div>
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
export default connect(mapStateToProps)(Archive);
