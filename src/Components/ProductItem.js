import React from 'react'

function ProductItem(props) {
  const {product} = props

  return (
    <div className="card">
        <img className="card-img-top" src={product.image} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}$</p>
            <a href={"/products/" + product.id} className="btn btn-primary">Details</a>
        </div>
    </div>
  )
}

export default ProductItem
