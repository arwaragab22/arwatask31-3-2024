// import React, { Component, lazy, Suspense } from 'react';
// import data from '../Services/Dummydata.js';
// import Product from './Product.jsx';
// // Lazy load the component that fetches data
// export default class Productdetails extends Component {
//     constructor(props) {
//           super(props);
//     this.state = {
//       items: data,
//       count: props.count,
//       decresecount: props.decresecount,
//       quantity:props.quantity,
//         incresecount :props.incresecount,
//               decresequantity:props.decresequantity,
//           increasequantity:props.increasequantity
// // Initialize items state as an empty array
//     };
//     }

//     render() {
  
//         return (
  
//           <Product
//             item={this.state.items[0]}
            
          
          
//           decresequantity={this.props.decresequantity}
//           increasequantity={this.props.increasequantity} quantity={ this.props.quantity} count={this.props.count} data={this.state.data}
//             decresecount={this.props.decresecount} incresecount={this.props.incresecount}
//           ></Product>
//     )
//   }
// }
import React, { Component, lazy, Suspense } from 'react';
import data from '../Services/Dummydata.js';

// Lazy load the Product component
const Product = lazy(() => import('./Product.jsx'));

export default class Productdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      count: props.count,
      quantity: props.quantity
    };
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Product
          item={this.state.items[0]}
          quantity={this.props.quantity}
          count={this.props.count}
          data={this.state.data}
          decresecount={this.props.decresecount}
          incresecount={this.props.incresecount}
          decresequantity={this.props.decresequantity}
          increasequantity={this.props.increasequantity}
        />
      </Suspense>
    );
  }
}
