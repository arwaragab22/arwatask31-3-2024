import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Similarproductdetails from './Similarproductdetails';
import { faStar, faPlus, faMinus,faBars, faChevronCircleLeft ,faChevronLeft,faChevronRight,fachev,faCartShopping, faPhone, faMapPin  } from "@fortawesome/free-solid-svg-icons";
export default class Similarslider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            similarslideritem: this.props.items
        };
    }
        prevSlide = () => {
            this.setState((prevState) => ({
                position: Math.max(0, prevState.position - 3)
            }));
        };

        nextSlide = () => {
            this.setState((prevState) => ({
                position: Math.min(prevState.position + 3, this.state.similarslideritem.length - 3)
            }));
        };

        render() {
            const { images, position } = this.state;
            return (
                <div className="slider largeslider" >
                    <div className="arrow" onClick={this.prevSlide} style={{ opacity: position === 0 ? '.4' : '1' }}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "25px" }} />            </div>
                    <div className="slides-container" style={{ display: 'flex', gap: "30px" }}>
                        {this.state.similarslideritem.slice(position, position + 3).map((product, index) => (
    <div className='similar-itemdetails' key={index} style={{cursor:"pointer"}}>
            <div  style={{width:"100%"}}>
                            <img src={require(`../images/${product.image}`)}  className='item-similar' style={{backgroundSize:'contain',maxWidth:"100%",maxHeight:"100%"}}/>
                                
                                

                                </div>
                                
                                    <div style={{padding:"20px"}}>
                                            <h5 style={{
                                        margin: "10px 0px", textAlign: 'left', fontWeight: 'bold', fontSize: "12px",
                                        textTransform: "uppercase"
                                    }}>{product.name}</h5>
                                        <div  style={{ display: "flex", gap: "20px",alignItems:"flex-end"}}>
                                    <div style={{ }}>
                <div className='newprice'>    <strong>{parseFloat(parseFloat(product.price.replace(/[^\d.-]/g, '')) - parseFloat(product.price.replace(/[^\d.-]/g, '')) * parseFloat(product.discount.replace(/[^\d.-]/g, '')).toFixed(2) / 100).toFixed(2)}
                    
                    
                    </strong>
                    <small>LE</small></div>
                                        <div className='pricediscountsimilar'>
                                            <div>
                    <s className='lastprice'>{product.price}     <small>LE</small></s>
                    <span className='discount'>{product.discount}</span></div>
                
                                        </div>
                                        </div>
                                    <div>
                            <img src={require(`../images/${product.brand}`)}  className='item-similar' width={"80px"} />
                                    </div>
                                
                                </div>
                                    </div>
                                    <div className="ratinh" style={{marginBottom:"25px",textAlign:"center"}}>
                    <FontAwesomeIcon icon={faStar} style={{ color: "FFC700CF" }} className="activerate"/>
                    <FontAwesomeIcon icon={faStar} style={{ color: "FFC700CF" }} className="activerate"/>
                    <FontAwesomeIcon icon={faStar} style={{ color: "lightgray" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "lightgray" }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "lightgray" }} />
            <span className="ratenumber">{product.rating} of  5</span>
            <span className="vote-number">{product.numofvoting} Rates</span>
          </div>
            
    
      </div>                        ))}
                    </div>

    
                    <div className="arrow" onClick={this.nextSlide} style={{ opacity: position >= this.state.similarslideritem.length - 3 ? '.5' : '1' }}>
                        <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "25px" }} />            </div>
      
                </div>
            );
        }
    }



