import React from 'react'

export default function CartItem({item,value}) {

    const {product_id,image,name,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center">


         <div className="col-10 mx-auto col-lg-2">
         <img src={process.env.PUBLIC_URL + '/Images/product_images/' + image} alt="product" style={{width:'5rem',height:'5rem'} } className="image-fluid" />
         </div>


         <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product :</span>
            {name}
         </div>


         <div className="col-10 mx-auto col-lg-2">
         <span className="d-lg-none">price :</span>
            {price}
         </div>


         <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
         <div className="d-flex justify-content-center">
                <div>
                    <span className="btn btn-black mx-1" onClick={() =>{decrement(product_id)}}>-</span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span className="btn btn-black mx-1" onClick={() =>{increment(product_id)}}>+</span>
                   
                
                </div> 
            </div>
         </div>



         <div className="col-10 mx-auto col-lg-2">
           <div className="cart-icon">
           < i className="fas fa-trash" onClick={() =>{removeItem(product_id)}} />

           </div>
           
         </div>

         <div className="col-10 mx-auto col-lg-2">
           <strong>item total : $  {total} </strong>
           
         </div>

        </div>

       
        
    )
}