import React, {Component} from 'react';

class Hello extends Component{

    /*method four*/
        constructor(props){
            super(props);

            this.dec = this.increase.bind(this);
        }
    /*End // method four*/

    state = {
        age:23,
        user: {
            name: "hussein",
            lastName: "shokr"
        },
        socialLinks: [
            "facebook",
            "twitter",
            "instagram"
        ]
    }
/**method tow */
    decrement = () => {
        this.setState({age: this.state.age - 1});
    }
/**End // method tow */
/**method there */
    increase(){
        this.setState({age: this.state.age + 1});
    }
/**End // method there */
/**method four */
    dec(){
        this.setState({age: this.state.age - 1});
    }
/**End // method four */
    render(){
        return (
            <div>
                Hello /\
                {this.props.name}
                /\ from class component. ||-- (props [name])

                <p>Name: {this.state.user.name} | Age: {this.state.age} ||-- (State [name & age])</p>
            {/**method one */}
                <button onClick={()=>{this.setState({age: this.state.age + 1})}}>Increase</button>
            {/** End // method one */}
            {/**method tow */}
                <button onClick={this.decrement}>Decrease</button>
            {/**End // method two */}
            {/**method there */}
                <button onClick={this.increase.bind(this)}>Increase with function</button>
            {/**End // method there */}
            {/**method four */}
                <button onClick={this.dec}>dec with function</button>
            {/**End // method four */}
            </div>
        )
    }
}

export default Hello;
