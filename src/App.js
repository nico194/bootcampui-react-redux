// @Vendors
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// @Store
import store from './store';

// @Routes
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Shops from './pages/Shops/Shops';
 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Route path="/" exact component={ Home } />
            <Route path="/products" component={ Products } />
            <Route path="/shops" component={ Shops } />
          </Layout>
        </Router>
      </Provider>

    );
  }
}

export default App;
