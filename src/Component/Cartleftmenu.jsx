import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
export default class Cartleftmenu extends Component {

    constructor(props) {
    super(props);
    this.state = {
      // Initialize your state here
        menuopen: props.open,
        data: props.data,
        count: props.count,
        quantity: props.quantity,
    
              decresequantity:props.decresequantity,
          increasequantity:props.increasequantity
    };
    }
     componentDidUpdate(prevProps) {
    // Check if the 'open' prop has changed
    if (this.props.open !== prevProps.open) {
      this.setState({
        menuOpen: this.props.open
      });
    }
  }

    render() {
          const { menuOpen } = this.state;

    return (
      <div  className={`cart-menu ${menuOpen ? 'open' : ''}`}>
            <div style={{ textAlign: "right" }}><button  className='close-button' onClick={()=>{this.setState({menuOpen:false})}}>
            
            
               <FontAwesomeIcon icon={faClose} style={{fontSize:"25px"}}/></button></div>
            <h2 class="Carttitle">My Cart</h2>
            <p class="Carttext">Cart Summary</p>
            {this.props.count > 0?(
            <div>
            <div >
            <div class="carttotalimg"><div class=""><span >
                    <img width={"100px"} src={require(`../images/${this.state.data[0].image}`)}/>
                    </span>
                </div>
                    <div class="productDetails">
                        <p class="name product-text" >Reebok 2-Piece Jog Set</p
                        >
                        <div class="">
                            <div class="">
                        
                                <p class="product-quantity" >Quantity: {this.props.count }</p>
                        </div>
                            <div className='remove-price'>
                                <p class="price">4,495 EGP</p>
                                                            <button class="remove" onClick={this.props.decresecount}>Remove</button>

                            </div>
                        </div></div>
                </div>
            </div>
            <p class="total">Total: 4,495 LE</p>
            <div className='buyitem'><button class="review">Review Cart</button>
                <button class="checkout">Complete Checkout</button>
                </div>
            
            </div>
            ):(<div>There are no items ..</div>)}
        </div>
     
    )
  }
}
