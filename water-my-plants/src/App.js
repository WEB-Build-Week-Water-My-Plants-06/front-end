import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
        <Header />
        <Login />
        <Footer />
        <SignUp />

      <Routes>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/' component={App} />
      </Routes>
    </div>
  );
}

export default App;
