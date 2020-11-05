import logo from './logo.svg';
import './App.css';
import Test from "./components/test/Test";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from "./components/Front/Header/Header";
function App() {
  return (
     <>
       <Router basename="/" >
           <div>
             <Switch>
               <Route exact path="/" component={Test}/>
             </Switch>
           </div>
       </Router>

     </>
  );
}

export default App;
