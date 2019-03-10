import React, { Component } from 'react';


class ItemCategories extends Component {
    render() {
        return (    
            <React.Fragment>
                {this.props.categories.map(item => {
                    return (
                       
                        <div className="item-categories text-capitalize"  >
                        
                            <h6 onClick={this.props.clickHandle} key={item.category_id} id={item.category_id} style={{ marginLeft: "1rem" }}><i className="fas fa-angle-right" />  {item.name}</h6 >


                        </div>

                    )
                })}

            </React.Fragment>
        )
    }
}

export default ItemCategories;