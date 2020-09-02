import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './assets/main.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import LeftMenu from './components/LeftMenu';
import MainDashboard from './components/MainDashboard';
import Sample from './Sample';
import Components from './Components';
function App() {
  return (
    <div className="w-screen">
      <Switch>  
        <Route
          exact
          path="/">
            <LeftMenu />
            <MainDashboard />     
        </Route>
        <Route
          exact
          path="/sample1">
            <Sample />   
        </Route>
        <Route
          exact
          path="/components">
            <Components />   
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;