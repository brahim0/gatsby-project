import React from 'react'
import Img from 'gatsby-image';
import {FaCartArrowDown} from 'react-icons/fa';

export default function Product({product}) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: '100%' }}  >
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
        <h6>{product.title}</h6>
        <h6>{product.price}$</h6>
        <button className="btn btn-yellow mt-3 px-auto text-capitalize snipcart-add-item"
         data-item-id={product.id}
         data-item-name={product.title}
         data-item-price={product.price}
         data-item-image={product.image.fluid.src}
         data-item-url="http://myapp.com/products/bacon"
         data-item-description={product.description}
        
        >add to cart <FaCartArrowDown className="cart-icon" /> </button>
        </div>
      </div>
    </div>
  )
}
