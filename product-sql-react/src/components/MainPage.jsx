import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "./SideNav";
import './SideNav.css'
import MyShop from "./Shop.jsx";

class Homepage extends React.Component {
    
    state={
        category: '',
        // productid:'',
        // userid:''
    }

    displayCategory = (category) => {
        this.setState({category})
      };

    // incrementCart = (count) => {
    //     this.props.addToCart(count)
    // }

    updateCart = (productid, userid) => {
        //this.setState({productid,userid})
        this.props.updateCartInfo(productid,userid)
    }


    render(){
        console.log(this.state.productid)
        console.log(this.state.userid)
        return (
            <>
                <>
                    <Row>
                        <Col xs={2}>      
                          <Sidebar showCategory={this.displayCategory}/>
                        </Col>
                        <Col xs={10} id="page-content-wrapper">
                          <MyShop 
                            displayCategory={this.state.category} 
                            // updateCart={this.incrementCart} 
                            sendCartUpdate={this.updateCart}
                          />
                        </Col> 
                    </Row>
    
                </>
            </>
            );
        }
  };
  //const Homepage = withRouter(Home);
  export default withRouter(Homepage)