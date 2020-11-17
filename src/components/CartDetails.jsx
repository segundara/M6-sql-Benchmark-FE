import React from "react";
import { Alert, Button, Table, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class CartDetails extends React.Component {
  state = {
    cartTotal: 0,
    cartItems: [],
  };

  makePayment = () => {
    this.props.paymentTotal(this.state.cartTotal)
    this.props.history.push("/payments")
  };

  componentDidMount = async () => {
    const url = `${process.env.REACT_APP_API_URL}/cart/1`;
    const resp = await fetch(url);
    if (resp.ok) {
      const products = await resp.json();
      if (products.length > 0) {
        const totalArray = products.map((item) => parseFloat(item.total));
        let totalAmount = totalArray.reduce((acc, curr) => {
          return acc + curr;
        });
        this.setState({
          cartItems: products,
          cartTotal: totalAmount,
        });
        console.log(totalArray);
      }
    }
  };

  render() {
    console.log(this.state.cartItems);
    return (
      <Container>
        <div className="text-center mt-5">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>unit price</th>
                <th>quantity</th>
                <th>total price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cartItems.map((item, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <th>{item.name}</th>
                  <th>{item.unitary_price}</th>
                  <th>{item.quantity}</th>
                  <th>{item.total}</th>
                  <th>
                    <Button
                      variant="danger"
                      onClick={() => this.removeFromCart(item._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </th>
                </tr>
              ))}
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>Overall Total</th>
                <th>€{this.state.cartTotal}</th>
              </tr>
            </tbody>
          </Table>
          <div className="d-flex justify-content-between">
            <Button variant="info" onClick={() => this.props.history.push(`${process.env.REACT_APP_HOMEPAGE}`)}>
              Continue shopping
            </Button>
            <Button variant="success" onClick={() => this.makePayment()}>
              Proceed to Payment
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default CartDetails;
