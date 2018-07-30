import React , { Component } from 'react';
import trash from './trahs.png'
import './ProductInCart.css'

class ProductInCart extends Component {
  render(){
    return (
      <div className="App-productInCart">
        {this.props.product.name} - ${this.props.product.price} - {this.props.product.cant} - <img src={trash} alt={this.props.product.name} onClick={this.props.click}/>
      </div>
    );
  }
}

export default ProductInCart;
