import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/TopNav";
import Details from "./components/Details";
import Backoffice from "./components/Backoffice";
import Products from "./components/Products";
import Stripe from "./components/StripeContainer";
import CartDetails from "./components/CartDetails";

class App extends React.Component {
  state = {
    count: 0,
    productidArray: [],
    paymentTotal: 0
  };

  addToCart = async (productid, userid) => {
    if (!this.state.productidArray.includes(productid)) {
      const idArray = [...this.state.productidArray, productid];
      this.setState({ productidArray: idArray, count: this.state.count + 1 });
    } else {
      this.setState({ count: this.state.count });
    }
  };

  emptyCart = (value) => {
    this.setState({ count: value });
  };
  
  setPayment = (value) => {
    this.setState({ paymentTotal: value });
  };

  render() {
    console.log(this.state.productidArray);
    return (
      <Router>
        <Navbar updateProductInCart={this.state.count} />
        <Route
          path="/"
          exact
          render={(props) => (
            <Products {...props} sendCartUpdate={this.addToCart} />
          )}
        />
        <Route path="/productDetails/:id" component={Details} />
        <Route path="/payments" 
          render={(props) => <Stripe {...props} paymentTotal={this.state.paymentTotal} emptyCart={this.emptyCart} />} />
        <Route
          path="/checkout"
          render={(props) => <CartDetails {...props} paymentTotal={this.setPayment} />}
        />
        <Route path="/backoffice" component={Backoffice} />
      </Router>
    );
  }
}

export default App;
