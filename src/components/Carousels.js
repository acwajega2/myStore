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
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src={process.env.PUBLIC_URL + '/Images/carasole/d.jpg'}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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