import './styles/App.css';

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
    </div>
  );
}

export default App;
