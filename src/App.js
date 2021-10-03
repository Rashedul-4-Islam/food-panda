
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';
import Track from './components/Track/Track';
import Home from './components/Home/Home';
import SingleFood from './components/SingleFood/SingleFood';
import Support from './components/Support/Support';

function App() {
  return (
    <div className="App">
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/foods">
                    <Foods></Foods>
                </Route>
                <Route path="/singleFood/:id">
                    <SingleFood></SingleFood>
                </Route>
                <Route path="/track">
                    <Track></Track>
                </Route>
                <Route path="/support">
                    <Support></Support>
                </Route>
                
                
            </Switch>
        </Router>
    </div>
  );
}

export default App;
