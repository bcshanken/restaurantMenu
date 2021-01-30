import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import Menu from './Containers/Menu/Menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;
