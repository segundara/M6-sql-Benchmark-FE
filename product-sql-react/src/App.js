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
    count: 0
  }

  addProductToCart = (count) => {
    this.setState({count})
  }
  
  addToCart = async(productid, userid) => {
        const url = `http://localhost:3234/cart/${userid}`
        const resp = await fetch(url)
        if(resp.ok){
          console.log(resp.json())
        }
  }


  render(){
    return (
        <Router>
          <Navbar updateProductInCart={this.state.count} />
          <Route path="/" exact render={(props) => <Homepage {...props} addToCart={this.addProductToCart} updateCartInfo={this.addToCart} />} />
          <Route path="/productDetails/:id" component={Details} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/backoffice" component={Backoffice} />
          {/* <Footer /> */}
        </Router>
    );
  }
}


export default App;
