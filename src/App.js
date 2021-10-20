import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import Ourservices from './components/OurServices/Ourservices';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
            <Header></Header>

          <Switch>

              <Route path="/home">
                  <Home></Home>
              </Route>

              <Route path="/about">
                  <About></About>
              </Route>

              <Route path="/our-services">
                  <Ourservices></Ourservices>
              </Route>

              <Route path="/blog">
                  <Blog></Blog>
              </Route>

              <PrivateRoute  path="/serviceDetails/:id">
                  <ServiceDetails></ServiceDetails>
              </PrivateRoute>

              <Route path="/login">
                  <Login></Login>
              </Route>

              <Route path="/signup">
                  <SignUp></SignUp>
              </Route>

              <Route exact path="/">
                  <Home></Home>
              </Route>

              <Route path="*">
                  <NotFound></NotFound>
              </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
