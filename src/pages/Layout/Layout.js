// @Vendors
import React from 'react';
import { withRouter } from 'react-router-dom';

import './Layout.css';

// @Components
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

class Layout extends React.Component {

  render() {
    return (
      <div className="App-layout">
        <Header />
        <Navbar routes={[
          {
            title: 'Home',
            path: '/'
          },
          {
            title: 'Productos',
            path: '/products'
          },
          {
            title: 'My Shopping Cart',
            path: '/shops'
          }
        ]}/>
        <div className="myContainer">
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default (withRouter(Layout));
