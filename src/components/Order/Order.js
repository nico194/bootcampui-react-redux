import React , { Component } from 'react';
//import './Product.css';
class Order extends Component {
  //  {{width: 18 + 'em'}}
  render(){
    return (
      <div className="App-order">
        <div className="ViewOrder">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <img src={this.props.order.image} alt={this.props.order.name} className="img-fluid img-thumbnail"/>
              </div>
              <div className="col-7">
                <h3>{this.props.order.name}</h3>
              </div>
              <div className="col-1">
                cantidad
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
