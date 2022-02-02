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

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <div className="App">
        <Header />
        {/* <Login /> */}
        <Footer />
        {/* <SignUp /> */}
        <MyPlantList />

      <Switch>
        <PrivateRoute exact path='/logout' component={Logout}/>
        <PrivateRoute exact path='/plants' component={MyPlantList} />
        <Route exact path='/login'>
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path='/signup' component={SignUp} />
        {/* <Route exact path='/' component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
