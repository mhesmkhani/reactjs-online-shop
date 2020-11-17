import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
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
import Uploader from "./components/Back/Uploader";
import Archive from "./components/Front/Archive/Archive";
import SingleProduct from "./components/Front/SingleProduct/SingleProduct";
 function App() {
  return (
      <>

       <Router basename="/" >
             <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/cart" component={Test} />
               <Route path="/login" component={Login} />
               <Route path="/receive-code" component={ReceiveCode} />
               <Route path="/verify-code" component={VerifyCode} />
               <Route path="/create-password" component={CreatePassword} />
               <Route path="/category/search" component={Archive} />
               <Route path="/product" component={SingleProduct} />
               <Route path="/upload" component={Uploader}/>
               <PrivateRoute path="/profile" component={Profile} />
             </Switch>
       </Router>
     </>
  );
}

export default App;
