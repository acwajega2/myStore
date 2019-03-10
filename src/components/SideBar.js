import React, { Component } from 'react';

import ItemCategories from './ItemCategories';
import ItemDepartments from './itemDepartments'
import { ProductConsumer } from '../context';
import ItemColors from './ItemColors';

import {Button,Card} from 'react-bootstrap';




class SideBar extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {productCategories,productDepartments,productColors,filterByCategory,filterByColor,   filterByDepartment} = value;

                    return(
                        <Card className="d-none d-lg-block my-sweet-side-bar" style={{position:"fixed"}}> 
                        <Card.Header>Display By</Card.Header>
                        <Card.Body>
                            <Card.Title>Category</Card.Title>
                            <Card.Text>
                                <ItemCategories categories={productCategories} clickHandle ={filterByCategory}/>
                              </Card.Text>
        
                              <Card.Title>Department</Card.Title>
                            <Card.Text>
                            <ItemDepartments departments={productDepartments} clickHandle ={filterByDepartment}/>
                              </Card.Text>
        
                             
                            
                           
                        </Card.Body>    
                    </Card>
                    )
                }}



            </ProductConsumer>
           
        );
    }
}

export default SideBar;