import React , { Component } from 'react';
import './Product.css';
class Product extends Component {
  //  {{width: 18 + 'em'}}
  render(){
    return (
          <div className="thecard">
            <div className="shadow p-3 mb-5 bg-white rounded rounded thefront">
                <h5 className="font-weight-bold titleProduct">{this.props.product.name}</h5>
                <img className="rounded mx-auto d-block img-thumbnail" src={this.props.product.image} alt={this.props.name} />
                <h4 className="priceProduct" >$ {this.props.product.price}</h4>
            </div>
            <div className="theback">
              <p className="descriptionProduct" >{this.props.product.description}</p>
              <button className="btn btn-primary" onClick={this.props.click}>Add to Cart</button>
            </div>
          </div>
    );
  }
}

export default Product;
