import React from "react"
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {setErrorAction} from "../redux/actions/ErrorAction";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";

const withCommonError = (WrappedComponent) => {
    const Component = class extends React.Component {
        state = {
            showAlert: false,
            redirectToSignin: false,
            title:'',
            code: 0
        }

        componentDidMount() {
            axios.interceptors.request.use((request) => {
                this.props.onSetError({});
                this.setState({
                    showAlert: false
                });
                return Promise.resolve(request);
            })
            axios.interceptors.response.use((response) => Promise.resolve(response),
                (error) => {
                    let message = null;
                    if (!error.response && error.message === "Network Error") {
                        message = "خطا در سرور!";
                    }
                    if (error.response) {
                        if (error.response.status === 500){
                            this.setState({
                                showAlert: true,
                                title : "خطا در سرور!",
                                code: 500
                            })
                        }else if (error.response.status === 401) {
                            // console.log("here", error.response.status, this.state);
                            this.setState({
                                showAlert: true,
                                title : "خطای شناسایی کاربر!",
                                code: 401
                            })
                            // this.props.unsetAuth();
                        }

                        // const data = {
                        //     code :error.response.status,
                        //     message: message
                        // }
                    }

                    // this.props.onSetError(data);
                    this.setState({
                        showAlert: true
                    });
                    return Promise.reject(error);
                });
        }
        handleClose = () =>{
            this.setState({
                showAlert:false
            })
         if (this.state.code === 401){
             window.location.href = "/"
         }

        }
        render() {
            let redirectToSignin = null;
            if (this.state.redirectToSignin) {
                redirectToSignin = <Redirect to={{
                    pathname: "/login",
                }} />
            }
            return (
                <React.Fragment>
                    {redirectToSignin}
                    <Modal show={this.state.showAlert} onHide={this.handleClose} dir="rtl">
                        <Modal.Header  className="bg-danger m-0 d-flex justify-content-center">
                            <Modal.Title className="text-light d-flex align-items-center">
                                <span style={{fontSize: 'small'}}>Error Code : {this.state.code}</span>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex justify-content-center">
                            <div className="account-box-content col-12">
                                <div className="form-account-title text-center">
                                    <h4>
                                        {this.state.title}
                                    </h4>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="account-box-content p-2">
                            <div className="d-flex form-row-account col-12">
                                <button onClick={this.handleClose} className={"mx-1 col btn btn-dark"} >
                                    بازگشت
                                </button>
                            </div>
                        </Modal.Footer>
                    </Modal>
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


export default withCommonError;
