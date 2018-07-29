import React from 'react';
import { Link } from 'react-router-dom';

//Assets
import logo from './logoCart.png';
import './Navbar.css'


const generateRoute = (title, path, component, onClick) => {
  if(!!path) {
      return (
          <Link className="nav-link" to={ path }>{ component ? component : title }</Link>
      );
  }
  else {
      return (
          <a
              className="nav-link"
              onClick={ onClick }
          >
              { component ? component : title }
          </a>
      );
  }
}

const Navbar = (props) => {
    return (
    <div className="App-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={logo} width="50" height="50" className="d-inline-block align-top" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            {props.routes.map((route, index) => {
                return (
                    <li className={`nav-item ${route.className}`} key={ index }>
                        { generateRoute(route.title, route.path, route.component, route.onClick) }
                    </li>
                );
            })}
          </ul>
        </div>
      </nav>
    </div>
    );
  }

export default Navbar;
