import React, { Component } from 'react'

export default class Similarproductdetails extends Component {

        constructor(props) {
        super(props);
        this.state = {
            productdetails: this.props.productdetails
        };
    }
  render() {
    return (
        <div className='similar-itemdetails'>
            <div  style={{width:"200px",height:"200px"}}>
                <img src={require(`../images/${this.state.productdetails.image}`)}
                    style={{ backgroundSize: 'contain', maxWidth: "100%", maxHeight: "100%" }} />

            </div>
            
    
      </div>
    )
  }
}
