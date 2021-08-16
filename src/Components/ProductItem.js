import React from 'react'

function ProductItem() {
  return (
    <div className="card">
        <img className="card-img-top" src={'/imgs/1.jpg'} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">White Cat</h5>
            <p className="card-text">Price 100$</p>
            <a href="#" className="btn btn-primary">Details</a>
        </div>
    </div>
  )
}

export default ProductItem
