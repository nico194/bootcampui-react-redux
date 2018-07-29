import React, { Component } from 'react';

import firstSlide from './firstSlide.jpg'
import secondSlide from './secondSlide.jpg'
import thridSlide from './thridSlide.jpg'

class Home extends Component {
    render() {
        return (
        	<div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={firstSlide} alt="First slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Aprovecha!!!</h5>
                    <p>Tenemos promociones en absolutamente todos los productos</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={secondSlide} alt="Second slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Mercado Pago</h5>
                    <p>Claro, también recibimos MercadoPago</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={thridSlide} alt="Third slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Para el mejor amigo</h5>
                    <p>Hoy promociones en alimentos y juguetes</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
              </div>
          </div>
        );
    }
}

export default Home;
