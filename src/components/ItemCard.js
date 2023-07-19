import React from 'react';
import { useCart } from  'react-use-cart';
const ItemCard = (props)=> {

  const {addItem}=useCart();


  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className="card p-0 overflow-hidden h-100 shadow text-center">
            <img class="card-img-top img-fluid" src= {props.thumb} />

            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
              <p className='card-text'>{props.price}</p>
              <button href="#" className="btn btn-success"
              onClick={()=>addItem(props.item)}>
              Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCard;