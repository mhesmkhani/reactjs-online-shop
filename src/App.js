import logo from './logo.svg';
import './App.css';
import {Redirect, Route, Router, Switch} from "react-router";

function App() {
  return (
     <>
       <Router basename="/" >
           <div>
             <Switch>
               <Route exact path="/" component={}/>
             </Switch>
           </div>
       </Router>

     </>
  );
}

export default App;
