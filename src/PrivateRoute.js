import React, { Component } from 'react'
import {Redirect, Route} from "react-router-dom";
import PropTyps from 'prop-types';
import { connect } from 'react-redux'

export class PrivateRoute extends Component {

    static propTypes = {
        // component : PropTyps.func.isRequired,
        // path : PropTyps.string.isRequired
    };


    render() {
        const { component: Component,  ...restProps } = this.props;
        let apiToken = ''
        if(this.props.auth.apiToken.length < 1){
            apiToken = null
        }else {
            apiToken = this.props.auth.apiToken
        }
        const isAuthenticated = apiToken

        return <Route {...restProps} render={(props) => (

            isAuthenticated ? (
                // alert("success"),
                <Component {...props}/>
            ) : (
                // alert("fail"),
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        )} />
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(PrivateRoute)
