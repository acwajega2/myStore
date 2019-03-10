import React, { Component } from 'react';

class itemDepartments extends Component {
    render() {
        return (
            <React.Fragment>
            {this.props.departments.map(item => {
                return (
                   
                    <div className="item-categories text-capitalize"  >
                    
                        <h6 onClick={this.props.clickHandle} key={item.department_id} id={item.department_id} style={{ marginLeft: "1rem" }}><i className="fas fa-angle-right" />  {item.name}</h6 >


                    </div>

                )
            })}

        </React.Fragment>
        );
    }
}

export default itemDepartments;