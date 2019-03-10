import React, { Component } from 'react';

class ItemColors extends Component {
    render() {
        return (
            <React.Fragment>
            {this.props.colors.map(item => {
                const item_color = item.color;
                return (
                   
                    <div className="item-categories text-capitalize"  >

                    <div style={{ marginLeft: "1rem",color:item_color}}>
                        ........
                    </div>
                           
                       

                    </div>

                )
            })}

        </React.Fragment>
        );
    }
}

export default ItemColors;