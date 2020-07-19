import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './SideNav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faGamepad, faTv, faPhone, faMugHot, faHeartbeat, faListUl} from "@fortawesome/free-solid-svg-icons";

class Sidebar extends React.Component {

    state={
        categories: []
    }

       
  componentDidMount = async () => {
        const url = `http://localhost:3234/products`
        const resp = await fetch(url)
            
            if (resp.ok) {
            const categories = await resp.json()
            let catArray = categories.data.map(item => item.category)
            let selectedCategories = []
            catArray.map(item => (!selectedCategories.includes(item)) ?selectedCategories.push(item) :null)
            
            this.setState({
                categories: selectedCategories
            });
            }
  }


    render(){
        console.log(this.state.categories)
        return (
            <>
    
                <Nav className="col-md-12 d-none d-md-block bg-light sidebar shadow-lg"
                    onSelect={selectedKey => this.props.showCategory(`${selectedKey}`)}>
                    
                    <div className="text-center">
                        Product Categories
                    </div>
                    <hr/>

                    
                    <Nav.Item>
                        <Nav.Link eventKey="all-category">
                            <FontAwesomeIcon icon={faListUl} className="mr-4"/>
                            All Category
                        </Nav.Link>
                    </Nav.Item>
                    <hr/>

                    
                    {this.state.categories.map((category,i) => (
                        <>
                        <Nav.Item key={i}>
                            <Nav.Link eventKey={category}>
                                {category.toUpperCase()}
                            </Nav.Link>
                        </Nav.Item>
                        <hr/>
                        </>
                        )
                    )}
                </Nav>
    
            </>
            );
        }
  };
  export default withRouter(Sidebar)