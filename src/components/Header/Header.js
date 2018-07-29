import React, {Component} from 'react';

//Assets
import image from './cart.jpg'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={image} alt="carrito" className="imgCart"/>
        <h1 className="title">Your Shopping Cart Online</h1>
      </div>
    );
  }
}

export default Header;
