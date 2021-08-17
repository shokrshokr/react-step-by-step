import React from "react";
import CartItem from "../Components/CartItem";
import ProductsApi from "../api/products";
import {connect} from "react-redux";

class Cart extends React.Component{

    placeOrder = () => {
        // send the request to the server
        // clear cart
        this.props.clearCart();
        alert('We recieved your order, and we are working on it.');
    };

    render(){
        return (
            <div>
                <h1>Cart</h1>

                <div className="row">
                    {this.props.cartItems.map(item => 
                        <div className={'col-3'} key={item.product.id}>
                            <CartItem item={item} />
                        </div>
                    )}
                </div>

                <br />
                <h3>
                    Total: {this.props.total}
                </h3>

                <button className="btn btn-primary btn-block" onClick={this.placeOrder}>Place order</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}


export default connect(mapStateToProps)(Cart);
