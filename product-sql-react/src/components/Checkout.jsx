import React from 'react'
import { Alert,Button } from 'react-bootstrap'

class Checkout extends React.Component {
    state={
        cartTotal:0
    }

    componentDidMount = async () => {
        const url = `http://localhost:3004/customers?name=Bee`
        const user = await fetch(url)
        if(user.ok){
            const userJSON = await user.json()
            console.log(userJSON.data[0]._id)
            const url = `http://localhost:3004/customers/${userJSON.data[0]._id}/calculate-cart-total`
            const cartTotal = await fetch(url)
            if(cartTotal.ok){
                const total = await cartTotal.json()
                this.setState({cartTotal: total.total})
                //console.log(total.total)
            }
        }
    }

    render(){
        return (
            <div className="text-center mt-5">
                <Alert variant="info">Total purchase is €{this.state.cartTotal}</Alert>
                <Button variant="success" onClick={() => this.makePayment()}>Make Payment</Button>
            </div>
        )
    }
}

export default Checkout
