// feature 1
import React from 'react'
import "./App.css";
import Header from "./Components/Header/Header";

import data from './data.json'
import Products from "./Components/Products/Products";

import Filter from './Components/Filter/Filter';

 class App extends React.Component {
constructor(){
  super();
  this.state={
    products: data.products,
    size:"",
    sort:""
  }
}

sortProducts=(e)=>{
  const sort = e.target.value
  this.setState((state)=>({
    sort: sort,
products: this.state.products.slice().sort((a,b)=>(
  sort === "lowest" ? ((a.price > b.price) ? 1:-1):
  sort === "higest" ? ((a.price > b.price) ? 1:-1):
 ((a._id > b._id) ? 1:-1)
))
  }))
  console.log(e.target.value)

}
filterProducts=(e)=>{

  if(e.target.value === ""){

    this.setState({
      products: data.products,
      size: e.target.value
    })
  }else{

    this.setState({
      size: e.target.value,
      products: data.products.filter(
        (value) => value.availableSizes.indexOf(e.target.value) >= 0),
    })
  }
}
  render() {
    return (
      <div>
        <Header/>
     


        <div className="content">
          <div className="main">
          <Filter count={this.state.products.length}
          size={this.state.size}
          sort={this.state.sort}
          filterProducts={this.filterProducts}
          sortProducts={this.sortProducts}/>
         
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
