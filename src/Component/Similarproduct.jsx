import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Similarslider from './Similarslider';

export default class Similarproduct extends Component {
      constructor(props) {
    super(props);
    this.state = {
      similarproduct: this.props.items
    };
  }
  render() {
    return (
      <div className='similar container smallslider'>
        <h5 className='similar-title'>Similar Products
            </h5>
            <p className='similar-text'>
                You may like these products also
            </p>
            <Similarslider items={this.state.similarproduct}></Similarslider>
      </div>
    )
  }
}
