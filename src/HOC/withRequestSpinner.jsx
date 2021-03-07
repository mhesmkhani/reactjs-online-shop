import React from "react"
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {setErrorAction} from "../redux/actions/ErrorAction";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Loader from "react-loader-spinner";

const withRequestSpinner = (WrappedComponent) => {
    const Component = class extends React.Component {
        state = {
            spinner: false,
            showAlert: false,
            redirectToSignin: false,
            title:'',
            code: 0
        }

        componentDidMount() {
            axios.interceptors.request.use((request) => {
                this.props.onSetError({});
                this.setState({
                    spinner: true,
                    showAlert: false
                });
                return Promise.resolve(request);
            })
            axios.interceptors.response.use((response) => {
                 this.setState({
                     spinner: false,
                 })
                return response
                },

                (error) => {
                    return Promise.reject(error);
                });
        }
        render() {
            return (
                <React.Fragment>
                    {
                        this.state.spinner ?
                            <div className="main-loading d-flex justify-content-center align-items-center mt-3" >
                                <Loader className="text-center" type="Oval" color="#00bfd6" height={50} width={50} style={{zIndex:1600}}/>
                            </div>
                            :
                            null
                    }
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    }


    const mapStateToProps = (state) => {
        return {
            error: state.error
        }
    }

    const mapActionToProps = (dispatch) => {
        return {
            onSetError: error => {
                dispatch(setErrorAction(error))
            }
        }
    }

    return connect(mapStateToProps, mapActionToProps)(Component);
}


export default withRequestSpinner;
