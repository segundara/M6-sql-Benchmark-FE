import React from 'react'
import { Alert,Button, Table, Container } from 'react-bootstrap'

class Checkout extends React.Component {
    state={
        cartTotal:0,
        cartItems: []
    }

    componentDidMount = async () => {
        
        const url = `http://localhost:3234/cart/1`
        const resp = await fetch(url)
        if(resp.ok){
          const products = await resp.json()
          const totalArray = products.map(item => parseFloat(item.total))
          let totalAmount = totalArray.reduce((acc, curr) => {return (acc + curr)})
          this.setState({cartItems: products,
                        cartTotal: totalAmount
                    })
            console.log(totalArray)
        }
    }

    render(){
        console.log(this.state.cartItems)
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
                            {this.state.cartItems.map((item,i)=>(
                                <tr key={i}>
                                    <th>{i+1}</th>
                                    <th>{item.name}</th>
                                    <th>{item.unitary_price}</th>
                                    <th>{item.quantity}</th>
                                    <th>{item.total}</th>
                                </tr>
                            )
                            )}
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Overall Total</th>
                                <th>€{this.state.cartTotal}</th>
                            </tr>
                    </tbody>
                </Table>
                <Alert variant="info">Total purchase is €{this.state.cartTotal}</Alert>
                <Button variant="success" onClick={() => this.makePayment()}>Make Payment</Button>
            </div>
            </Container>
        )
    }
}

export default Checkout
