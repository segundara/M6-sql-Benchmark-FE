import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Alert,
  Tab,
  Spinner,
  Nav,
  Badge,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import Pagination from "react-bootstrap-4-pagination";
import "./Style.css";

class Products extends React.Component {
  state = {
    products: [],
    numOfProduct: [],
    numPerPage: 6,
    currentPageNum: 1,
    loading: false,
    pageNumbers: [],
  };

  getNumberOfProduct = async () => {
    let total = [];
    const categories = await this.getCategories();
    if (categories) {
      for (const category of categories) {
        // get total number for each category
        const url = `${process.env.REACT_APP_API_URL}/products?category=${category}`;
        const resp = await fetch(url);

        if (resp.ok) {
          const products = await resp.json();
          total.push(products.count);
        }
      }

        // get total number for all category together
      const url = `${process.env.REACT_APP_API_URL}/products`;
      const resp = await fetch(url);

      if (resp.ok) {
        const products = await resp.json();
        total.unshift(products.count);
      }
      this.setState({
        numOfProduct: total,
      });
      this.getPages(total);
    }
  };

  getPages = (total) => {
    const pages = [];
    for (let i = 0; i < total.length; i++) {
      const element = total[i];
      let innerPages = [];
      for (let j = 1; j <= Math.ceil(element / this.state.numPerPage); j++) {
        innerPages.push(j);
      }
      pages.push(innerPages);
    }
    this.setState({
      pageNumbers: pages,
    });
  };

  changePage = (value) => {
    if (value > 1) {
      this.setState({
        currentPageNum: value,
      });
    } else {
      this.setState({ currentPageNum: 1 });
    }
    this.fetchProducts();
  };

  getCategories = async () => {
    const url = `${process.env.REACT_APP_API_URL}/products`;
    const resp = await fetch(url);

    if (resp.ok) {
      const categories = await resp.json();
      let catArray = categories.data.map((item) => item.category);
      let selectedCategories = [];
      catArray.map((item) =>
        !selectedCategories.includes(item)
          ? selectedCategories.push(item)
          : null
      );

      return selectedCategories;
    }
  };

  fetchProducts = async () => {
    let allCategories = [];
    const categories = await this.getCategories();
    if (categories) {
      const skip =
        this.state.currentPageNum * this.state.numPerPage -
        this.state.numPerPage;
      for (const category of categories) {
        // get all products and break them into category and add into the array
        let list = {};
        const url = `${process.env.REACT_APP_API_URL}/products?category=${category}&limit=${this.state.numPerPage}&offset=${skip}`;
        const resp = await fetch(url);

        if (resp.ok) {
          const products = await resp.json();
          list.category = category;
          list.items = products.data;
          allCategories.push(list);
        }
      }

      // get all products for all categories and add into the array
      let listForAll = {};
      const category = "All Products";
      const url = `${process.env.REACT_APP_API_URL}/products?limit=${this.state.numPerPage}&offset=${skip}`;
      const resp = await fetch(url);

      if (resp.ok) {
        const products = await resp.json();
        listForAll.category = category;
        listForAll.items = products.data;
        allCategories.unshift(listForAll);
      }
      this.setState({
        products: allCategories,
      });
    }
  };

  componentDidMount() {
    this.getNumberOfProduct();
    this.fetchProducts();
  }

  linkToDetails = (id) => {
    this.props.history.push("/productDetails/" + id);
  };

  addToCart = async (productId) => {
    const userid = 1;
    const url = `${process.env.REACT_APP_API_URL}/cart`;
    const addProduct = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ productid: productId, userid: userid }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (addProduct.ok) {
      this.props.sendCartUpdate(productId, userid);
    }
  };

  render() {
    return (
      <>
        <Container fluid>
          {this.state.products && this.state.products.length > 0 && (
            <Row className="pt-5">
              <Col>
                <Tab.Container
                  id="left-tabs-example"
                  defaultActiveKey="0"
                  onSelect={() => this.changePage(1)}
                >
                  <Row>
                    <Col sm={2}>
                      <Nav variant="pills" className="flex-column">
                        {this.state.products.map((list, i) => {
                          return (
                            <Nav.Item key={i}>
                              <Nav.Link
                                eventKey={i}
                                className="d-flex justify-content-between"
                              >
                                <small>
                                  <b>{list.category}</b>
                                </small>
                                <Badge variant="light">
                                  <span>{this.state.numOfProduct[i]}</span>
                                </Badge>
                              </Nav.Link>
                            </Nav.Item>
                          );
                        })}
                      </Nav>
                    </Col>
                    <Col sm={10}>
                      <Tab.Content>
                        {this.state.products.map((list, i) => {
                          return (
                            <Tab.Pane key={i} eventKey={i}>
                              {this.state.loading && (
                                <div
                                  style={{
                                    width: "10%",
                                    height: "auto",
                                    margin: "auto",
                                  }}
                                >
                                  <Spinner animation="border" variant="dark" />
                                </div>
                              )}
                              {!this.state.loading &&
                                list.items.length > 0 &&
                                this.state.pageNumbers &&
                                this.state.pageNumbers.length > 0 && (
                                  <>
                                    <div className="d-flex flex-wrap">
                                      {list.items.map((product) => (
                                          <Card
                                          key={product._id}
                                            style={{ width: "20rem" }}
                                            className="productCard"
                                          >
                                            <Card.Img
                                              variant="top"
                                              src={product.image_url}
                                              height="300px"
                                            />
                                            <Card.Body>
                                              <Card.Title>
                                                {product.name}
                                              </Card.Title>
                                              <div className="d-flex justify-content-between">
                                                <label>
                                                  Brand: {product.brand}
                                                </label>
                                                <h4> €{product.price}</h4>
                                              </div>
                                              <div className="d-flex justify-content-between">
                                                <Button
                                                  variant="info"
                                                  onClick={() =>
                                                    this.linkToDetails(
                                                      product._id
                                                    )
                                                  }
                                                >
                                                  detail
                                                </Button>
                                                <Button
                                                  variant="secondary"
                                                  onClick={
                                                    () =>
                                                      this.addToCart(
                                                        product._id
                                                      )
                                                  }
                                                >
                                                  add to cart
                                                  <FontAwesomeIcon
                                                    icon={faCartPlus}
                                                  />
                                                </Button>
                                              </div>
                                            </Card.Body>
                                          </Card>
                                      ))}
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <Pagination
                                        threeDots
                                        totalPages={
                                          this.state.pageNumbers[i].length
                                        }
                                        currentPage={this.state.currentPageNum}
                                        showMax={7}
                                        prevNext
                                        activeBgColor="#17a2b8"
                                        color="#17a2b8"
                                        activeBorderColor="#17a2b8"
                                        onClick={(page) =>
                                          this.changePage(page)
                                        }
                                      />

                                      <Alert
                                        variant="light"
                                        className="text-right"
                                      >
                                        page{" "}
                                        <strong>
                                          {this.state.currentPageNum}
                                        </strong>{" "}
                                        of{" "}
                                        <strong>
                                          {this.state.pageNumbers[i].length}
                                        </strong>
                                      </Alert>
                                    </div>
                                  </>
                                )}
                              {!this.state.loading && list.items.length < 1 && (
                                <p className="text-center">
                                  <strong>No product in store</strong>
                                </p>
                              )}
                            </Tab.Pane>
                          );
                        })}
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Row>
          )}

        </Container>
      </>
    );
  }
}

export default withRouter(Products);