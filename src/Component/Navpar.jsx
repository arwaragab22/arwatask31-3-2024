import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faCartShopping,faPhone,faMapPin} from '@fortawesome/free-solid-svg-icons';
export default class Navpar extends Component {
      constructor(props) {
    super(props);
    this.state = {
      // Initialize your state here
      count: props.count,
    };
  }
  render() {
    return (
        <div className='nav-parent '>
            <div className='container nav'>
            <div className='navstart '>    <FontAwesomeIcon icon={faBars} style={{fontSize:"25px"}}/>

                <h2>yeshtery</h2>
            </div>
        

            <div className='navmiddle'>
                <div>&lt;&nbsp;&nbsp; <span className='mid-par'>valentine day offers buy two get one free</span> <a href='#'>shop now</a> &nbsp;&nbsp; &gt; </div> 
            </div>
            <div className='endnav'>
            <div> <FontAwesomeIcon icon={faPhone} /> <span>contact us</span> </div>
                <div> <FontAwesomeIcon icon={faCartShopping} /><span>take order </span></div>
                <div><FontAwesomeIcon icon={faMapPin} /> <span>find a store</span></div>
            </div>
</div>
        </div>
    )
  }
}
