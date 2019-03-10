import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import { Pagination, Button } from 'react-bootstrap';
import PageItem from 'react-bootstrap/PageItem';
import SideBar from './SideBar';
import Carousels from './Carousels';
import ProductNotFound from './ProductNotFound';



class ProductList extends Component {



    render() {

        //   console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="row py-5">

                    <div className="container">
                        <Carousels />


                        <div className="row">



                            <ProductConsumer>
                                {value => {


                                    const { products,ProductFound, pageNumbers, currentPage, itemsPerPage, changePage } = value;
                                    //Getting PageNumbers


                                    const indexOfLastItem = currentPage * itemsPerPage;
                                    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
                                    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

                                    pageNumbers.length = 0;
                                    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
                                        pageNumbers.push(i);
                                    }

                                    const renderProducts = currentItems.map(product => {
                                        return    <Product
                                        key={product.product_id}
                                        product={product}

                                    />                                 
                                        
                                    })





                                    const renderPageNumbers = pageNumbers.map(item => {
                                        return (

                                            <Button
                                                key={item}
                                                id={item}
                                                onClick={changePage} style={{ marginLeft: "0.5rem" }}>
                                                {item}
                                            </Button>

                                        );

                                    });









                                    return (
                                        <React.Fragment className="container" >
                                        <div className="row">
                                        <ul id="page-numbers" className="justify-content-end" style={{ textalign: "right" }}>
                                                {renderPageNumbers}
                                            </ul>

                                        </div>
                                        <div className="row container">
                                        {renderProducts}

                                
                                   

                                        </div>


                                              

                                           
                                            
                                        </React.Fragment>
                                       
                                       
                                         
                                      
                                    
                              )
                          }}
                            </ProductConsumer>
                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;