import React from 'react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
        <Header />
        <Login />
        <Footer />
        <SignUp />

      <Switch>
        <PrivateRoute exact path='/logout' component={Logout}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/' component={App} />
      </Switch>
    </div>
  );
}

export default App;
