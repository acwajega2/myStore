import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Pagination} from 'react-bootstrap';

class Pagination extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {products,pageNumbers,currentPage,itemsPerPage} = value;
                    
                      //Getting PageNumbers
                      for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
                        pageNumbers.push(i);
                      }


                    const renderPageNumbers =  pageNumbers.map(item =>{
                        return (
                            <li
                              key={number}
                              id={number}
                              onClick={this.handleClick}
                            >
                              {number}
                            </li>
                          );

                      });


                    return(
                        <div>
                
                        </div>
                    )
                }}    



            </ProductConsumer>
            
        );
    }
}

export default Pagination;