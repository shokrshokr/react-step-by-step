import React from "react";
import {getById} from "../api/products";

class Product extends React.Component{

    state={
        loading: true,
        quantity: 0,
        product: {}
    };

    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id))
            .then(product => {
                //setTimeout(() => {
                    this.setState({
                        product,
                        loading: false
                    });
                //}, 2000)
                
            })
    }

    handleQuantity = (event) => {
        const value = event.target.value;

        if(value < 0)
            return ;

        this.setState({
            quantity: value
        })
    }

    render(){
        if(this.state.loading)
            return 'Loading ..';

        const product = this.state.product;
        const quantity = this.state.quantity;

        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={product.image} width={'100%'}/>
                    </div>
                    <div className="col-6">
                    <h1>{product.name}</h1>

                        <p>Price: {product.price}$</p>

                        <p>{product.description}</p>


                        <input 
                            type="number" 
                            value={quantity}
                            onChange={
                                this.handleQuantity
                            } 
                        />
                        
                        <br /><br />

                        <p>Total: {quantity * product.price}</p>

                        <button 
                            className="btn btn-primary" 
                            onClick={() => 
                                this.addToCart(product)
                            }
                        >
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default Product
