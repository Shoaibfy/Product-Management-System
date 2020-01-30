import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Product from './components/product';
import Brand from './components/brand';
import Categories from './components/categories';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Link to="/home">Home</Link><br></br>
            <Link to="/pro">Product</Link><br></br>
            <Link to="/brand">Brand</Link><br></br>
            <Link to="/cat">Category</Link><br></br>
          
            <Switch>
             
              <Route path="/home" exact component={Home}/>              
              <Route path="/brand" exact component={Brand}/>               
              <Route path="/pro" exact component={Product}/>
              <Route path="/cat" exact component={Categories}/>
          
           </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
