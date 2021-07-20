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
/** Event onChange-updateName */
    updateName(event){
        //console.log(event.target.value)
        const newName = event.target.value;
        this.setState({
            /** method one *//*
                user:{
                    name: newName,
                    lastName: this.state.user.lastName
                }
            *//** End // method one */
            /** method tow */
            //bye5od lstate user metel ma heye byerja3 bi 8ayer li badna n8ayro
                user:{
                    ...this.state.user,
                    name: newName
                }
            /** End // method tow */
        });
    }
/** End // Event onChange-updateName */
    render(){
        return (
            <div>
                {/*
                    Hello /\
                    {this.props.name}
                    /\ from class component. ||-- (props [name])
                */}
                <p>Name: {this.state.user.name} | Age: {this.state.age} | lastName: {this.state.user.lastName} ||-- (State [name & age])</p>
            {/**method one /}
                <button onClick={()=>{this.setState({age: this.state.age + 1})}}>Increase</button>
            {/** End // method one /}
            {/**method tow /}
                <button onClick={this.decrement}>Decrease</button>
            {/**End // method two /}
            {/**method there /}
                <button onClick={this.increase.bind(this)}>Increase with function</button>
            {/**End // method there /}
            {/**method four /}
                <button onClick={this.dec}>dec with function</button>
            {/**End // method four /}
            <br />
            {/** Event onChange */}
                <input type="text" value={this.state.user.name} onChange={this.updateName.bind(this)} />
            {/** End // Event onChange */}
            </div>
        )
    }
}

export default Hello;
