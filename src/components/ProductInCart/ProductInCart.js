import React , { Component } from 'react';
import trash from './trahs.png'
import './ProductInCart.css'

class ProductInCart extends Component {
  render(){
    return (
      <div className="App-productInCart">
        {this.props.product.product.name} - ${this.props.product.product.price} - <img src={trash} alt={this.props.product.product.name} onClick={this.props.click}/>
      </div>
    );
  }
}

export default ProductInCart;
