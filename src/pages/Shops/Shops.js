// @Styles

// @Vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';

// @Actions
import shopActions from '../../actions/shopActions';

// @Components
import Order from '../../components/Order/Order';

class Shops extends Component {

  removeProduct(product){
    this.props.removeProduct(product);
  }

  render() {
    const { shops } = this.props;
    return (
      <div className="App-shops">
        <div className="container">
          {this.props.shops.orders.map( (order, index) => {
            <div key={index}>
              <Order order={order}/>
            </div>
          })};
        </div>
      </div>
    );
  }
}

export default connect(
    state => {
        return {
            shops: state.shopReducer
        }
    },{
        removeProduct: shopActions.removeProduct, // Uso una acción para agregar al carrito
    }
)(Shops);
