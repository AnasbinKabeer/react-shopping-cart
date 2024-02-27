// feature 1
import React from 'react'
import "./App.css";
import Header from "./Components/Header/Header";

import data from './data.json'
import Products from "./Components/Products/Products";

import Filter from './Components/Filter/Filter';
import Cartdiv from './Components/Cart/Cartdiv';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : []

    }
  }

  createOrder = (order) => {
    alert("need to save order for" + order.name)

  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id)
    })
    localStorage.setItem("cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    )
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        alreadyInCart = true;
        item.count++;

      }
    }
    );

    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

  };




  sortProducts = (e) => {
    const sort = e.target.value
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (
        sort === "lowest" ? ((a.price > b.price) ? 1 : -1) :
          sort === "higest" ? ((a.price > b.price) ? 1 : -1) :
            ((a._id > b._id) ? 1 : -1)
      ))
    }))
    console.log(e.target.value)

  }
  filterProducts = (e) => {

    if (e.target.value === "") {

      this.setState({
        products: data.products,
        size: e.target.value
      })
    } else {

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
        <Header />



        <div className="content">
          <div className="main">
            <Filter count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts} />

            <Products products={this.state.products}
              addToCart={this.addToCart} />
          </div>


          <div className="sidebar">
            <Cartdiv createOrder={this.createOrder} cartItems={this.state.cartItems}
              removeFromCart={this.removeFromCart} />
          </div>

        </div>


      </div>
    )
  }
}

export default App
