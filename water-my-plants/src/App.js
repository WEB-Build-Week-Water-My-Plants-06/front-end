import React, {useState} from 'react';
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
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <div className="App">
        <Header />
        <Footer />

      <Switch>
        <PrivateRoute exact path='/logout' component={Logout}/>
        <PrivateRoute exact path='/profile' component={MyProfile} />
        <PrivateRoute exact path='/plants' component={MyPlantList} />
        <Route exact path='/login'>
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
