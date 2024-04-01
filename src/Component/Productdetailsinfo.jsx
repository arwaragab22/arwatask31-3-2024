import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
export default class Productdetailsinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
        quantity: props.quantity,
            count: props.count,
      decresecount: props.decresecount,
      
        incresecount :props.incresecount,
      decresequantity:props.decresequantity,
          increasequantity:props.increasequantity
    };
  }



  render() {
    return (
      <div>
            <div className="item-details">
          <img
            src={require(`../images/${this.props.item.brand}`)}
            alt="Sea and mountain"
            width="130px"
          />
          <div className="item-name">{this.props.item.name}</div>
          <div className="cat">{this.props.item.cat}</div>
          <div className="ratinh">
                    <FontAwesomeIcon icon={faStar} style={{ color: "FFC700CF" }} className="activerate"/>
                    <FontAwesomeIcon icon={faStar} style={{ color: "FFC700CF" }} className="activerate"/>
                    <FontAwesomeIcon icon={faStar} style={{ color: "lightgray" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "lightgray" }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "lightgray" }} />
            <span className="ratenumber">{this.props.item.rating} of  5</span>
            <span className="vote-number">{this.props.item.numofvoting} Rates</span>
          </div>
          <div className="itemdetails-info">
            <div className="newprice">
            
              <strong>
                {parseFloat(this.props.item.price.replace(/[^\d.-]/g, "")) -
                  (parseFloat(this.props.item.price.replace(/[^\d.-]/g, "")) *
                    parseFloat(
                      this.props.item.discount.replace(/[^\d.-]/g, "")
                    )) /
                    100}
              </strong>
              <small>LE</small>
            </div>

            <s className="lastprice">
              {this.props.item.price} <small>LE</small>
            </s>
            <span className="discount">{this.props.item.discount}</span>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <h5 className="sizeh5">size</h5>
          <div className="size">
            <div>small</div>
            <div>miduim</div>
            <div>large</div>
            <div>xlarge</div>
            <div>xxlarge</div>
          </div>
        </div>

        <div className="color">
          <h5 >color</h5>
          {this.props.item.imagecolor.map((elem, i) => (
            <div key={i}
              className="img-colorcontainer"
              style={{ width: "fit-content" }}
            >
              <img src={require(`../images/${elem}`)} className="img-color" />
            </div>
          ))}
        </div>
        <div className="quantity">
          <button onClick={this.state.increasequantity}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <span>{this.props.quantity}</span>
          <button
            disabled=""
            
            onClick={this.state.decresequantity}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div className="operation-card">
                <button className="add " onClick={this.state.incresecount }> add to cart</button>
          <button className="remove" onClick={this.state.decresecount}>pickup from store</button>
        </div>
      </div>
    );
  }
}
