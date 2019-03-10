import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';



class Modal extends Component {
    render() {
        return (
            <ProductConsumer>

                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { product_id, name, description, image, price, incart } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    }
                    else {



                        return (
                            <ModalContainer>
                                <div className="container ">
                                    <div className="row ">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>Item added to the cart</h5>
                                            <img src={process.env.PUBLIC_URL + '/Images/product_images/' + image} alt="product" className="img-fluid" />
                                            <h5>{name}</h5>
                                            <h5 className="text-muted">price : $ {price}</h5>


                                            <Link to='/'>
                                                <Button variant="secondary"  onClick={() => closeModal()} ClassName="text-capitalize">
                                                 <span className="mr-2">
                                                <i className="fas fa-arrow-right" />
                                            </span>
                                                    Continue Shopping
                                        </Button>
                                            </Link>

                                            <Link to='/cart' className="text-capitalize">
                                                <Button cart onClick={() => closeModal()} style={{marginLeft:"10px"}}>
                                                <span className="mr-2">
                                                <i className="fas fa-cart-plus" />
                                            </span>
                                                    Cart
                                        </Button>
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            </ModalContainer>
                        )

                    }

                }}

            </ProductConsumer>

        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background:rgba(0,0,0,0.3);
display: flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}

`

export default Modal;