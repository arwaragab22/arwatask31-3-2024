import React, { Component } from 'react'
import Cartleftmenu from './Cartleftmenu';

export default class Header extends Component {
      constructor(props) {
    super(props);
    this.state = {
      // Initialize your state here
      count: props.count,
      menuopen: false,
      data: props.data,
      incresecount: props.incresecount,
      decresecount: props.decresecount,
        quantity: props.quantity,
    };
  }
  toggleMenu = () => {

    this.setState(prevState => ({
      menuopen: !prevState.menuopen

    }));
    console.log(this.state.menuopen)
  };
  render() {
    return (
        <div className='header container' 
        style={{  display:" flex",justifyContent:'space-evenly',alignItems:"center"}}>
            <div>
                <div className='searchcontainer'>
                    <img src="images/search.svg" />
                        <input type='text' placeholder='search' id="search"/>
                </div>
            
            
                </div>
            <div > <img src="images/adidas.svg" /></div>
            <div className='left-header' >
                    <div onClick={this.toggleMenu}>
                    
                    <div className='totalcount-header' >                         <img src="images/card.svg" />
                        <div className='count-num'>{ this.props.count}</div>
</div>
                        <div>
                            cart 
                    </div>
                </div>
                        <div>
                        <img src="images/like.svg">
                        </img>
                        <div>
                            wishlist
                    </div>
                </div>
                        <div>
                        <img src="images/login.svg">
                        </img>
                        <div>
                            login
                    </div>
                </div>
                
        </div>
        <Cartleftmenu open={this.state.menuopen} data={this.state.data}
        decresecount={this.props.decresecount}  count={this.props.count} quantity={this.props.quantity}></Cartleftmenu>
            </div>
        
    
    )
  }
}
