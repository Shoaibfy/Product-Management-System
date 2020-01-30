import React,{Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';


class Home extends Component{

  componentDidMount(){
    Axios.get('http://127.0.0.1:8000/')
    .then(res=>{
        this.setState({
            product:res.data
        })
    })
}

  render(){
      return(
        <div>
          <div className="App">
          <ul>
          <li><input type="radio"/>Category</li>
          <li><input type="radio"/><h3>Products</h3></li>
          <li><input type="radio"/><h3>Brands</h3></li>
          </ul>
            </div>
        </div>

      )
  }
}
export default Home;