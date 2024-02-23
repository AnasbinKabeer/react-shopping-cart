
import React, { Component } from 'react'
import './Cart.css'

export default class Cartdiv extends Component {
 
  render() {
    const {cartItems} = this.props;
    return (
  
      <div>
        {cartItems.length === 0 ? <div  className='cart cart-header'>Cart is empty</div>:
         <div className='cart cart-header'>you have {cartItems.length} in the cart</div>}
    
    <div>

     
        <div className="cart">
          <ul className='cart-items'>
            {cartItems.map((item)=>{
              return(
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                    {item.count}  X {"₹"+item.price} {" "}
                    <button onClick={()=> {this.props.removeFromCart(item)
                    console.log(item)
                    }}>Remove</button>
                    </div>


                  </div>
                </li>
            )
            })}
          </ul>

        </div>
         {cartItems.length!==0  &&
        <div className="cart">
          <div className="total">
            
          <div>Total: {" "}₹{cartItems.reduce((a, c) => a + (c.price * c.count), 0)}</div>

          </div>
          <button className='button primary'>Proceed</button>
        </div>
        }
       </div>
       </div>

     
    )
  }
}
