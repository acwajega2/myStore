import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Carousels extends Component {
    render() {
        return (
            <div>
                <Carousel  className ="my-carasole" >
                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src={process.env.PUBLIC_URL + '/Images/carasole/s.jpg'}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Amazing Offers</h3>
                            <p>Check out or amazing Offers</p>
                          
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid flex"
                            src={process.env.PUBLIC_URL + '/Images/carasole/s.jpg'}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Great Discounts</h3>
                            <p>For all your purchases, you will enjoy 10% discount.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src={process.env.PUBLIC_URL + '/Images/carasole/s.jpg'}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>.
            </div>
        );
    }
}

export default Carousels;