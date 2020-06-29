// import React from "react";
// import { Switch, Route } from "react-router-dom";

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Components for blog
//import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";

// Components for auth
import AuthPage from '../../containers/AuthPage';
import ConnectPage from '../../containers/ConnectPage';
import EditPage from '../../containers/EditPage';
// import HomePage from '../HomePage';
import NotFoundPage from '../../containers/NotFoundPage';
import ProductPage from '../../containers/ProductPage';
import CustomerPage from '../../containers/CustomerPage';


// This component ios HoC that prevents the user from accessing a route if he's not logged in
import PrivateRoute from '../../containers/PrivateRoute';

// Design
//import './styles.css';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../../components/NavigationBar';
// import SideNav from '../../components/SideBar';
import Product from '../../components/Product';
import ProductList from '../../components/ProductList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          {/* <Nav /> */}
          <NavigationBar />
          {/* <SideNav /> */}

          <Switch>
            <Route path="/" component={Articles} exact />
            <Route path="/blog" component={Articles} exact />
            <Route path="/customer" component={CustomerPage} exact />

            <Route path="/article/:id" component={Article} exact />
            <Route path="/category/:id" component={Category} exact />

            {/* A user can't go to the HomePage if is not authenticated */}
            {/* <PrivateRoute path="/login" component={HomePage} exact /> */}
            <Route path="/login" component={AuthPage} exact />
            <Route path="/auth/:authType/:id?" component={AuthPage} />           
            <PrivateRoute exact path="/product" component={ProductPage} />
            <PrivateRoute path="/:contentType/:id" component={EditPage} />
            <Route exact path="/connect/:provider" component={ConnectPage} />
            <Route path="" component={NotFoundPage} />

            <Route path="/products" exact component={ProductList} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </div>    
      </Router>
    );
  };
}

export default App;
