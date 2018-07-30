// @Styles
import './Products.css';

// @Vendors
import React, { Component } from 'react';
import { connect } from 'react-redux'

// @Actions
import productsActions from '../../actions/productsActions';
import shopActions from '../../actions/shopActions';

// @Components
import Product from '../../components/Product/Product'
import ProductInCart from '../../components/ProductInCart/ProductInCart.js'

class Products extends Component {
  componentDidMount(){
    this.props.getProducts();
  }

  addProduct(product) {
		this.props.addProduct(product);
	}

  removeProduct(product){
    this.props.removeProduct(product);
  }

  render(){
    const { products, shops } = this.props;
    const orders = shops.orders.length ? shops.orders.map((product, index) => {
      return (
          <ProductInCart key={index} product={product} click={() => {
            this.props.removeProduct(product.product.id, product.product.price);
          }} />
    		);
    	}) : <p>No hay productos en el carrito</p>;
      return (
          <div className="row">
            <div className="col-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <p>Categories</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="list-group-item active">Procucts in your Cart:</p>
                    {orders}
                    <p>Total: {this.props.shops.total}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="d-flex flex-wrap">
                {products.list.map( (product, index) =>
                  <div className="p-2" key={index}>
                    <Product  product={product} click={() => {
                      this.props.addProduct(product);
                    }}/>
                  </div>
                )}
              </div>
            </div>
          </div>
      );
  }
}

export default connect(
    state => {
        return {
            products: state.productsReducer, // Saco los productos del reducer
            shops: state.shopReducer
        }
    },{
        addProduct: shopActions.addProduct,
        removeProduct: shopActions.removeProduct,
        getProducts: productsActions.getProducts
    }
)(Products);
