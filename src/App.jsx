// feature 1
import React from 'react'
import "./App.css";
import Header from "./Components/Header/Header";

import data from './data.json'
import Products from "./Components/Products/Products";



 class App extends React.Component {
constructor(){
  super();
  this.state={
    products: data.products,
    size:"",
    sort:""
  }
}
  render() {
    return (
      <div>
        <Header/>

        <div className="content">
          <div className="main">
            <Products products={this.state.products}/>
          </div>
       
          
          <div className="sidebar">
            Cart Items
          </div>
         
        </div>


      </div>
    )
  }
}

export default App
