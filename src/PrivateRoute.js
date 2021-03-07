import React, { Component } from 'react'
import {Redirect, Route} from "react-router-dom";
import * as action from './redux/actions/AuthAction'

import PropTyps from 'prop-types';
import { connect } from 'react-redux'

export class PrivateRoute extends Component {

    static propTypes = {
        // component : PropTyps.func.isRequired,
        // path : PropTyps.string.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            isAuth: false
        }

    }

    componentDidMount() {
        const config = {
            headers: {'Authorization': this.props.auth.apiToken}
        }
        this.props.getUserCheck(config,callback => {
            if(callback === "success"){
                this.setState({
                    isAuth: true
                })
            }
        })
    }

    render() {
        const { component: Component,  ...restProps } = this.props;
        return <Route {...restProps} render={(props) => (

            this.state.isAuth ? (
                // alert("success"),
                <Component {...props}/>
            ) :
                null
        )} />
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps,action)(PrivateRoute)
