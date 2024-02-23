import React, { Component } from "react";
import "./Products.css"

class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => {
            return (
             
                <li key={product._id}>{product.name}
                <div className="product">
                  <a href={"#"+ product._id}>
                    <img src={product.image} alt="product image" />
                    <p>{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>₹{product.price}</div>
                  
                    <button className="button primary">Add to Card</button>
                </div>
                </div>
               
                </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Products;
