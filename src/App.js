import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
            <Header></Header>

          <Switch>

              <Route path="/home">
                  <Home></Home>
              </Route>

              <Route path="/login">
                  <Login></Login>
              </Route>

              <Route path="/signup">
                  <SignUp></SignUp>
              </Route>
              <Route exact path="/">
                  <Home></Home>
              </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
