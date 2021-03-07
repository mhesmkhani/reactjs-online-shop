import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Front/Header/Header";
import Home from "./components/Front/Home/Home";
import Slider from "./components/Front/Slider/Slider";
import Footer from "./components/Front/Footer/Footer";
import Login from "./components/Front/Auth/Login/Login";
import Test from "./components/Front/Test";
import ReceiveCode from "./components/Front/Auth/Register/ReceiveCode";
import VerifyCode from "./components/Front/Auth/Register/VerifyCode";
import CreatePassword from "./components/Front/Auth/Register/CreatePassword";
import Profile from "./components/Front/Profile/Profile";
import PrivateRoute from "./PrivateRoute.js";
import AdminRoute from "./AdminRoute";
import Uploader from "./components/Back/Uploader";
import Archive from "./components/Front/Archive/Archive";
import SingleProduct from "./components/Front/SingleProduct/SingleProduct";
import Favorite from "./components/Front/Profile/Sections/Favorite";
import Checkout from "./components/Front/Checkout/Checkout";
import withCommonError from "./HOC/withCommonError";
import React, {Component} from "react";
import axios from "axios";
import {Alert} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Loader from "react-loader-spinner";
import {connect} from "react-redux";
import {setErrorAction} from "./redux/actions/ErrorAction";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import withRequestSpinner from "./HOC/withRequestSpinner";

class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            showModal:false,
            errorCode: 0,
            title: ''

        };
    }
     componentDidMount() {

     }


    render() {
    return (
        <React.Fragment>
            <ToastContainer />
            <Router basename="/">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Test}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/receive-code" component={ReceiveCode}/>
                    <PrivateRoute path="/verify-code" component={VerifyCode}/>
                    <PrivateRoute path="/create-password" component={CreatePassword}/>
                    <Route path="/category/search/:q?" component={Archive}/>
                    <Route path="/product/:slug?" component={SingleProduct}/>
                    <AdminRoute path="/upload" component={Uploader}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <PrivateRoute path="/user/checkout" component={Checkout}/>
                    {/*<Route  path="/profile/favorite" component={Favorite}/>*/}
                </Switch>
            </Router>
        </React.Fragment>
    );
   }


}
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        favorite: state.favorite
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // onSetError: error => {
        //     dispatch(setErrorAction(error))
        // }
    }

}
export default  withRequestSpinner(connect(mapStateToProps,mapDispatchToProps)(App));
