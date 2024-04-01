import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronCircleLeft ,faChevronLeft,faChevronRight,fachev} from '@fortawesome/free-solid-svg-icons';
import { faCartShopping, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import "../carsoul.css";
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      images: this.props.images
    };
  }

  prevSlide = () => {
    this.setState((prevState) => ({
      position: Math.max(0, prevState.position - 3)
    }));
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      position: Math.min(prevState.position + 3, this.state.images.length - 3)
    }));
  };

  render() {
    const { images, position } = this.state;

    return (
      <div className="slider smallimgslider">
                <div className="arrow" onClick={this.prevSlide} style={{ opacity: position === 0 ? '.4' : '1' }}>
 <FontAwesomeIcon icon={faChevronLeft} style={{fontSize:"25px"}}/>            </div>
        <div className="slides-container" style={{display:'flex',gap:"10px"}}>
          {images.slice(position, position + 3).map((image, index) => (
            <img key={index} src={require(`../images/${image}`)} alt={`Slide ${index}`} width="70px" height="70px"
              style={{ borderRadius: "10px", }} />
          ))}
        </div>

    
          <div className="arrow" onClick={this.nextSlide} style={{ opacity: position >= this.state.images.length - 3 ? '.5' : '1' }}>
 <FontAwesomeIcon icon={faChevronRight} style={{fontSize:"25px"}}/>            </div>
      
      </div>
    );
  }
}

export default Slider;
