import React, { Component } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { Button, Badge, Navbar, Form, FormControl, Col,Dropdown, InputGroup } from 'react-bootstrap';
import { ProductConsumer } from '../context';

class MySweetNavBar extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { cart, products, hasLogedIn,logOutHandle,activeUser,searchProducts,openLoginModal } = value;
                    return (
                        <Navbar expand="lg" className=" navbar-header sweet-nav-bar  " variant="light" fixed="top">




                            <div className="d-flex justify-content-start " style={{ marginRight: "40px" }}>
                                <Link to="/">

                                    <img src={logo} alt="store" className="navbar-brand img-fluid"
                                    />


                                </Link>

                                <h2 className="text-title text-capitalize align-center">my store</h2>
                            </div>







                            <div className="container " style={{display:"flexbox !important",width:"700px"}}>
                                <input className="form-control in
                                
                                
                                put-sm" type="text" onChange={searchProducts} placeholder="Search..." />

                            </div>





                            <div  className="" style={{alignItems:"right !important"}}>
                                <Form inline className="align-center py-2 " >
                                    <Link to="/cart">
                                        <Button variant="primary" className="text-capitalize" pill="true">
                                            <span className="mr-2">
                                                <i className="fas fa-cart-plus" />
                                            </span>
                                            <Badge variant="light">{cart.length}</Badge>
                                            <span className="sr-only"></span>
                                        </Button>
                                    </Link>
                                   
                                    {hasLogedIn ?
                                        
                                     
                                    <Dropdown>
                                    <Dropdown.Toggle className="flex" variant="primary" id="dropdown-basic" style={{marginLeft:"10px"}}>
                                    <span className="mr-2">
                                                <i className="fas fa-user" />
                                            </span>
                                        {activeUser.name}
                                    </Dropdown.Toggle>
                                  
                                    <Dropdown.Menu>
                                      <Dropdown.Item ><Link to="/cart">My Shopping Cart</Link></Dropdown.Item>
                                      <Dropdown.Item href="#/action-2">My Purchase History</Dropdown.Item>
                                      <Dropdown.Item onClick={logOutHandle}>Sign Out!</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                    
                                    
                                    :
                                    
                                    <Button primary style={{marginLeft:"10px"}} onClick={openLoginModal}>
                                    <span className="mr-2">
                                                <i className="fas fa-user" />
                                            </span>
                                        Sign In
                                    </Button>}
                                    
                                    
                                </Form>
                            </div>


                        </Navbar>

                    )
                }}

            </ProductConsumer>




        );
    }
}

export default MySweetNavBar;