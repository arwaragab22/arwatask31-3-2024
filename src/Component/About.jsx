import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='abot-body'>
      <div className='about container'>
            <div className='about-text'>
                <img src="images/brand-logo-yellow.svg"></img>
                <div>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat.
                    <br></br>
                        <br></br>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                    
                    commodo consequat.
                    <br></br>
                        <br></br>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed dia m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                    enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                    odio dignissim qui blandit</div>
            </div>
            <div className='about-social'>
          <div className="subscribe"><h4>Subscribe to our newsletter</h4><form ><input name="email" type="email" required="" placeholder="Enter Your Mail" /><button>Subscribe <img src="images/send.svg" alt="Subscribe" /></button></form></div><div class="row"><div class="col">
            <ul className='about-yeshtery'><li><a href="/">About Us</a></li><li><a href="/">Contact Us</a></li>
            <li><a href="/">Track Order</a></li>
            <li><a href="/">Terms & Conditions</a></li>
            <li><a href="/">ATerms & Conditions</a></li>
              <li><a href="/sell-with-us">Sell With Us</a></li><li><a href="/">Shipping And Returns</a></li>
            </ul>
          </div><div className="col">
              <ul className='social-col'><li><div class="icon">
            <img src="images/facebook.svg" alt="" /></div>
            <a href="#">/yeshtery</a></li>
            <li><div className="icon"><img src="images/linkedin.svg" /></div><a target="_blank" >/yeshtery</a></li>
            <li><div className="icon"><img src="images/insta.svg" /></div><a >/yeshtery</a></li><li><div className="icon"><img src="images/twetter.svg" /></div><a >/yeshtery</a></li></ul></div></div>
            </div>
        </div>
        </div>
    )
  }
}
