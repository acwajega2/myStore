import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { product_id, name, description, image, price, incart } = value.detailProduct;

                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slated text-blue my-5">
                                    <h1>{name}</h1>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={process.env.PUBLIC_URL + '/Images/product_images/' + image} alt="product" className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> name : {name}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Description :<span className="text-uppercase">
                                        {description}
                                    </span></h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                <span className="mr-2">
                                                    <i className="fas fa-shopping-basket" />
                                                </span>
                                                Back to Products
                                        </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={incart ? true : false} onClick={() => {
                                            value.addToCart(product_id);value.openModal(product_id)
                                        }}>
                                            <span className="mr-2">
                                                <i className="fas fa-cart-plus" />
                                            </span>
                                            {incart ? 'inCart' : 'add to Cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;