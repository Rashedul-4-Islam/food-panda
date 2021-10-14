import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';
import Track from './components/Track/Track';
import Home from './components/Home/Home';
import SingleFood from './components/SingleFood/SingleFood';
import Support from './components/Support/Support';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './context/authProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
        <AuthProvider>
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
                <PrivateRoute path="/singleFood/:id">
                    <SingleFood></SingleFood>
                </PrivateRoute>
                <Route path="/track">
                    <Track></Track>
                </Route>
                <Route path="/support">
                    <Support></Support>
                </Route>
                <Route path="/register">
                    <Register></Register>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
            </Switch>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
