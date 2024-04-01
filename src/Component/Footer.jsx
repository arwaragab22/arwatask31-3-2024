import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
      return (
          <div className='footer-body'>
                  <div className='footer container'>
            
            <div>
                © 2021 yeshtery, all rights reserved.</div>
            <div className='payment'>
            <img src="images/cach.png"></img>

                      <img src="images/visa.png"></img>
                                              <img src="images/mmastercard.png"></img>


            </div>
            <div className='powered'>
            
                <span>Powered By</span>
            <img src="images/foots.png"></img>
            </div>
      </div>
        </div>
    
    )
  }
}
