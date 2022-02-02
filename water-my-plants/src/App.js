import React from 'react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom';

// import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import MyPlantList from './components/MyPlantList';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
        <Header />
        <Login />
        <Footer />
        <SignUp />
        <MyPlantList />
        <MyProfile />

      <Switch>
        <PrivateRoute exact path='/logout' component={Logout}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        {/* <Route exact path='/' component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
