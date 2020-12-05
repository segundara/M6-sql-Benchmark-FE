import React, { Component, useContext } from 'react';
import {
    Container,
    Row,
    Col,
    Image,
    Navbar,
    Nav,
    Button,
    Modal,
    Form,
    Accordion,
    Card,
    Badge
} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";


function CustomToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <div
            onClick={decoratedOnClick}
            style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "900",
                padding: "0.5rem 1rem",
                fontFamily: "sans-serif",
            }}
        >
            {children}
            <FontAwesomeIcon
                style={{ height: "auto" }}
                icon={isCurrentEventKey ? faAngleUp : faAngleDown}
            />
        </div>
    );
}
class Details extends Component {

    state = {
        product: [],
        productid: null,
        addReview: false,
        editModal: false,
        newReview: {
            comment: "",
            rate: 1
        },
        reviews: [],
        photo: ''
    }

    handleChange = (e) => {
        const newReview = this.state.newReview
        if (e.currentTarget.id === "rate") {
            newReview[e.currentTarget.id] = parseInt(e.currentTarget.value)
        }
        else {
            newReview[e.currentTarget.id] = e.currentTarget.value
        }

        this.setState({
            newReview
        });
    }

    fetchDetails = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_URL}/products/` + this.props.match.params.id)
        if (resp.ok) {
            const details = await resp.json()
            this.setState({
                product: details.data
            });
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/` + this.props.match.params.id + "/reviews")
        if (response.ok) {
            const details = await response.json()
            this.setState({
                reviews: details.data
            });
        }
    }

    addReview = async (e) => {
        e.preventDefault()

        const reviewBody = ({ ...this.state.newReview, "productid": this.props.match.params.id })

        const resp = await fetch(`${process.env.REACT_APP_API_URL}/reviews`, {
            method: "POST",
            body: JSON.stringify(reviewBody),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (resp.ok) {

            this.setState({
                addReview: false,
                newReview: {
                    comment: "",
                    rate: null
                },
            });

            this.fetchDetails()
        }
    }

    componentDidMount() {
        this.fetchDetails()
    }

    deleteReview = async (id) => {
        const resp = await fetch(`${process.env.REACT_APP_API_URL}/reviews/` + id, {
            method: "DELETE"
        })

        this.fetchDetails()

    }


    render() {
        console.log(this.state.reviews)
        console.log(this.state.product)
        return (
            <Container className="py-5">
                <Row>
                    {this.state.product && (
                        <>
                            <Col md={3} className="mt-5">
                                <Image src={this.state.product.image_url} style={{ height: "50vh", width: "20rem" }} />
                            </Col>
                            <Col md={7} className="mt-5 detail">
                                <div className="w-50">
                                    <p><h3>{this.state.product.name}</h3></p>
                                    <p>
                                        <span><strong>Description:</strong></span>
                                        <span> {this.state.product.description}</span>
                                    </p>
                                    <p>
                                        <span><strong>Brand:</strong></span>
                                        <span> {this.state.product.brand}</span>
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between w-50">
                                    <Badge variant="info" style={{ lineHeight: '2rem', fontSize: 'large' }}>€{this.state.product.price}</Badge>
                                    <Button variant="secondary" onClick={() => this.setState({ addReview: true })}>Add review</Button>
                                </div>

                                <div className="d-flex justify-content-center mt-4 w-75">
                                    {this.state.reviews.length > 0 ?
                                        <Accordion style={{ width: "70%" }}>
                                            <Card className="accordion-card">
                                                <CustomToggle as={Card.Header} eventKey="1">
                                                    See customers' reviews!
                                                        </CustomToggle>
                                                <Accordion.Collapse eventKey="1">
                                                    <>
                                                        {this.state.reviews.map(review =>
                                                            <Card.Body key={review._id}>
                                                                <Badge variant="info">{review.rate}</Badge> : {review.comment}
                                                                <Button
                                                                    className="ml-3"
                                                                    variant="danger"
                                                                    onClick={() => this.deleteReview(review._id)}
                                                                >Delete</Button>
                                                                {/* <Button
                                                                        className="ml-3"
                                                                        variant="warning"
                                                                    >Edit</Button> */}
                                                            </Card.Body>
                                                        )}
                                                    </>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                        :
                                        null
                                    }
                                </div>
                            </Col>
                        </>
                    )}
                </Row>
                <Modal show={this.state.addReview} onHide={() => this.setState({
                    addReview: false,
                    newReview: {
                        comment: "",
                        rate: null,
                        productid: null
                    }
                })}>
                    <Modal.Body>
                        <Form onSubmit={this.addReview} >
                            <Row className="d-flex justify-content-center">
                                <Col md={8}>
                                    <Form.Group controlId="comment">
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control
                                            value={this.state.newReview.comment}
                                            onChange={this.handleChange}
                                            type="text"
                                            placeholder="Your comment for the product" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col md={8}>
                                    <Form.Group controlId="rate">
                                        <Form.Label>Rate the product</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={this.state.newReview.rate}
                                            onChange={this.handleChange}
                                            placeholder="Rate between 1-5" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" type="submit">
                                    Add review
                                </Button>

                            </div>

                        </Form>
                    </Modal.Body>
                </Modal>

            </Container>
        );
    }
}

export default Details;