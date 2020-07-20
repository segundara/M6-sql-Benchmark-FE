import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/TopNav';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Homepage from './components/MainPage';
import Details from './components/Details';
import Checkout from './components/Checkout';
import Backoffice from './components/Backoffice';

class App extends React.Component {
  state = {
    count: 0,
    productidArray: []
  }

  // addProductToCart = (count) => {
  //   this.setState({count})
  // }
  
  addToCart = async(productid, userid) => {
    if(!this.state.productidArray.includes(productid)){
      const idArray = [...this.state.productidArray, productid]
      this.setState({productidArray: idArray,
        count: this.state.count+1
      })
    }
    else{
      this.setState({count: this.state.count})
    }
  }


  render(){
    console.log(this.state.productidArray)
    return (
        <Router>
          <Navbar updateProductInCart={this.state.count} />
          <Route path="/" exact render={(props) => <Homepage {...props} updateCartInfo={this.addToCart} />} />
          <Route path="/productDetails/:id" component={Details} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/backoffice" component={Backoffice} />
          {/* <Footer /> */}
        </Router>
    );
  }
}


export default App;
