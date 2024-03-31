import React, { Component } from 'react'
import Productimg from './Productimg';
import Productdetailsinfo from './Productdetailsinfo';

export default class Product extends Component {
    constructor(props) {
          super(props);
          
    this.state = {
      item: props.item,
              count: props.count,
      decresecount: props.decresecount,
      quantity:props.quantity,
        incresecount :props.incresecount,
              decresequantity:props.decresequantity,
          increasequantity:props.increasequantity      
// Initialize items state as an empty array
    };
    }
    render() {
    return (
      <div className='product-container container'>
            <div className='left-details' style={{width:"50%"}}>
                <Productimg item={this.props.item}></Productimg>
            </div>
            <div className='right-details'>
          <Productdetailsinfo  decresequantity={this.props.decresequantity}
          increasequantity={this.props.increasequantity} quantity={ this.props.quantity} item={this.props.item} count={this.props.count} data={this.state.data}
            decresecount={this.props.decresecount} incresecount={this.props.incresecount}></Productdetailsinfo>
            </div>
      </div>
    )
  }
}
