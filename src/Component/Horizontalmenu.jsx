import React, { Component } from 'react'
export default class Horizontalmenu extends Component {
  render() {
    return (
        <div style={{ backgroundColor: "black",}}>
        
                
                <ul className='ul-menu container'><li>
                <a >Men</a></li>
        <li>
                    <a >Women</a></li>   
                <li>
                    <a >unixes</a></li>
                <li>
                <a >kids</a></li>
                <li>
                <a >best seller</a></li>

                <li>
                    <a >new arrivals</a></li>
                    <li>
                <a className='active-link'>others</a></li>
            
            </ul>
        
      </div>
    )
  }
}
