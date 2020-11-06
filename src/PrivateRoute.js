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
        const isAuthenticated = this.props.isAuthenticated

        return <Route {...restProps} render={(props) => (

            isAuthenticated[0] ? (
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
        // isAuthenticated: state.setIsAuth
    }
}
export default connect(mapStateToProps)(PrivateRoute)
