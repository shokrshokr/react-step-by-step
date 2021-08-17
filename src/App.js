import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

//Components
import CartIcon from './Components/CartIcon';

//store
import { Provider } from 'react-redux';
import store from './store/store'

//Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Product from './pages/Product';

class App extends Component{
  


  render(){
    return(
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">CatsStore</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">Cart</Link>
                </li>
              </ul>
            </div>

          <CartIcon />

          </nav>


          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/products" component={Products} exact />
          <Route path="/products/:id" component={Product} />



        </div>
      </Router>
        
      
    );
  }
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;