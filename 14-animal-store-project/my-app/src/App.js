import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          < Menu />
          {this.showPages(routes)}
        </div>
      </Router>
    );

  }

  showPages(routes) {
    let showPage = null;
    if (routes.length > 0) {
      showPage = routes.map((route, index) => {
        
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    
    return (
      <Switch>{showPage}</Switch>
    );
     
  }



}

export default App;
