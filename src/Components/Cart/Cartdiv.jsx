
import React, { Component } from 'react'
import './Cart.css'

export default class Cartdiv extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email:"",
      address: "",
      showCheckout:false};
  }
 
  handleInput =(e)=> {
    this.setState({ [e.target.name]: e.target.value})
  }


createOrder=(e)=>{
  e.preventDefault()
  const order={
    name: this.state.name,
    email: this.state.email,
    address: this.state.address,
    cartItems: this.props.cartItems
  }
  this.props.createOrder(order)
}

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
          <button onClick={()=>{this.setState({showCheckout:true})}} className='button primary'>Proceed</button>
        </div>
       
       }
       {this.state.showCheckout && (
        
        
        <div className=''>
        <form action="" onSubmit={this.createOrder}>
          <ul className='form-Container'>
            <li>
            
              <label  htmlFor="email" >Email</label>
              <input type="email" name='email'  required onChange={this.handleInput}/>
            
              <label  htmlFor="name" >Name</label>
              <input type="text" name='name'  required onChange={this.handleInput}/>

              <label  htmlFor="Adrdess" >Address</label>
              <input type="text" name='Address'  required onChange={this.handleInput}/>
            </li>
            <li>
              <button type='sumit' onClick={this.props.createOrder} className='button primary'>Checkout</button>
            </li>
          </ul>
        </form>
        </div>
       )}
       </div>
       </div>

     
    )
  }
}
