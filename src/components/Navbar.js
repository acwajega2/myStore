import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { Button, Badge } from 'react-bootstrap';
import { ProductConsumer } from '../context';


class Navbar extends Component {
    render() {
        return (         <ProductConsumer>
                {value => {
                     const { cart } = value;
                    return (
                    <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                        {/*http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd */}
                        <Link to="/">
                            <img src={logo} alt="store" className="navbar-brand"
                            />
                        </Link>
                        <ul className="navbar-nav alight-items-center" >
                            <li className="nav-item ml-5">
                                <Link to="/" className="nav-link">

                                   
                                    <Button variant="primary" className="text-capitalize" pill="true">
                                        <span className="mr-2">
                                            <i className="fas fa-shopping-basket" />
                                        </span>
                                        Products
                                        </Button>
                                   
                                </Link>
                            </li>

                        </ul>
                        <Link to="/cart" className="ml-auto">

                            <Button variant="primary" className="text-capitalize" pill="true">
                                <span className="mr-2">
                                    <i className="fas fa-cart-plus" />
                                </span>
                                my shoppin cart <Badge variant="light">{cart.length}</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>



                        </Link>
                    </NavWrapper>)
                }}



            </ProductConsumer>

        );
    }
}


const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-Link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;

}
`
export default Navbar;