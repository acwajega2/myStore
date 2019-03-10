import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';




import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import MySweetNavBar from './components/MySweetNavBar'

import ProductList from './components/ProductList'
import Product from './components/Product'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details';
import Modal from './components/Modal';
import Carousels from './components/Carousels';
import SideBar from './components/SideBar';
import LoginModal from './components/Modals/LoginModal'


class App extends Component {
  render() {
    return (
      <React.Fragment>
         <MySweetNavBar />
         <LoginModal />
         <SideBar />
        
        <div className="row mx-auto" >
       
          
          <div className="col-8 mx-auto" style={{marginLeft:"13rem"}}>
          


            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route component={Default} />
            </Switch>
            <Modal />
          </div>

        </div>
       

      </React.Fragment>
    );
  }
}

export default App;
