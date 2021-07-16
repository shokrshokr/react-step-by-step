import React, {Component} from 'react';

class Hello extends Component{

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
    render(){
        return (
            <div>
                Hello /\
                {this.props.name}
                /\ from class component. ||-- (props [name])

                <p>Name: {this.state.user.name} | Age: {this.state.age} ||-- (State [name & age])</p>
            </div>
        )
    }
}

export default Hello;
