import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import routes from './routes';
class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch >
            {this.showComponent(routes)}
          </Switch>
        </div>
      </Router>
    );

  }
  
  showComponent = (routes) => {
    let showComponent = null
    if (routes.length > 0) {
      showComponent = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }

    return showComponent;
  }
}

export default App;
