import React, { Component } from 'react'
import Carousel from '../Component/Productslider'; // Assuming Carousel component is in the same directory
import Slider from '../Component/Productslider';

export default class Productimg extends Component {

     constructor(props) {
       super(props);
    this.state = {item: props.item};
  }
  componentDidMount() {
  }
  render() {
  
        return (
        
    <>    <div className='img-main'>
                    <img src={require(`../images/${this.props.item.images[0]}`)} alt="Sea and mountain" />
      <Slider images={this.props.item.images} />

            </div>

            </>
            
     
    )
  }
}
