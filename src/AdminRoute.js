import React, { Component } from 'react'
import {Redirect, Route} from "react-router-dom";
import * as action from './redux/actions/AdminCheckAction'
import PropTyps from 'prop-types';
import { connect } from 'react-redux'
import axios from "axios";
import ApiUrl from "./Config/ApiUrls";
import withCommonError from "./HOC/withCommonError";

export class AdminRoute extends Component {

    static propTypes = {

    };
    constructor(props) {
        super(props);
        this.state = {
            admin: false
        }

    }

    componentDidMount() {
        setTimeout(
            function() {
                const config = {
                    headers: {'Authorization': this.props.auth.apiToken}
                }
                this.props.getAdminCheck(config,callback => {
                    if(callback === "success"){
                        this.setState({
                            admin: true
                        })
                    }
                })
            }
                .bind(this),
            100
        )

    }

    render() {
        const { component: Component,  ...restProps } = this.props;

        return <Route {...restProps} render={(props) => (
            this.state.admin ? (
                // alert("success"),
                <Component {...props}/>
            ) : null
        )} />
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps,action)(AdminRoute)
