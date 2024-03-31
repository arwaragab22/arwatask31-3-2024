import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';


import Navpar from './Component/Navpar';
import Header from './Component/Header';
import Horizontalmenu from './Component/Horizontalmenu';
import Cateogry from './Component/Cateogry';
import Productdetails from './Component/Productdetails';
import Carousel from './Component/Productslider.jsx'; // Assuming Carousel component is in the same directory
import Similarproduct from './Component/Similarproduct.jsx';
import data from './Services/Dummydata.js';
import About from './Component/About.jsx';
import Footer from './Component/Footer.jsx';
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      quantity: 1,
      data:data

    };

  }
  
  incresecount = () => {

    const a = this.state.quantity;
    this.setState(prevState => ({
      count: prevState.count + prevState.quantity,
      
    }));
  }
  decresecount = () => {
    if (this.state.count!==0) {
        this.setState(prevState => ({
      count:
        
            0,
          quantity:0
        })
        
        );
    }
    }
  increasequantity = () => {
   if (true ) {
        this.setState(prevState => ({
          
            quantity: prevState.quantity+1
        }));
    }
};

  decresequantity = () => {
    if (this.state.quantity >1) {
      this.setState(prevState => ({
      
        quantity: prevState.quantity - 1
      }));
    }
  };
  render() {
    
    return (
      <div className="App">
  
        <Navpar count={this.state.count}></Navpar>
        <Header
        
          decresequantity={this.decresequantity}
          increasequantity={this.increasequantity}
          quantity={this.state.quantity} 
          count={this.state.count} data={this.state.data} decresecount={this.decresecount} incresecount={this.incresecount}></Header>
        <Horizontalmenu></Horizontalmenu>
        <Cateogry></Cateogry>

        <Productdetails decresequantity={this.decresequantity}
          increasequantity={this.increasequantity}
          quantity={this.state.quantity} count={this.state.count}
          data={this.state.data} decresecount={this.decresecount} incresecount={this.incresecount}></Productdetails>
        <Similarproduct items={this.state.data}></Similarproduct>
        <About></About>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
