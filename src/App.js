import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from "./components/Front/Header/Header";
import Home from "./components/Front/Home/Home";
import Slider from "./components/Front/Slider/Slider";
import Footer from "./components/Front/Footer/Footer";
import Login from "./components/Front/Auth/Login/Login";
import Test from "./components/Front/Test";
import Register from "./components/Front/Auth/Register/Register";
import Profile from "./components/Front/Profile/Profile";
function App() {
  return (
      <>
       <Router basename="/" >
             <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/cart" component={Test} />
               <Route path="/login" component={Login} />
               <Route path="/register" component={Register} />
               <Route path="/profile" component={Profile} />
             </Switch>
       </Router>
     </>
  );
}

export default App;
