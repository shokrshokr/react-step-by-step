import React from "react";
import "./CartIcon.css";

function CartIcon(Props){
    return (
        <div id="cart-icon">
                <i className="fa fa-shopping-cart"></i>
                <span className="badge badge-danger">2</span>
        </div>
    )
}



export default CartIcon;