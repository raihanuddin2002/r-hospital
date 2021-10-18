import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header></Header>

          <Switch>

              <Route path="/home">
                  <Home></Home>
              </Route>
              <Route exact path="/">
                  <Home></Home>
              </Route>

          </Switch>
          
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
