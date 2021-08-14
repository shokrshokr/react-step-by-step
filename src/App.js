import './App.css';
import React, { Component } from 'react';
import ViewUser from './components/ViewUser';
import { getUsers, deleteUser } from './Api/Users';

class App extends Component {

  state = {
    users: [],
    user: {}
  }

  componentDidMount = () => {
    getUsers()
      .then(response =>{
        this.setState({
          users:response.data
        });
      })
      .catch(error=> {
        alert('حدث خطأ غير معروف');
      })
  }

  setActive = (user) =>{
    this.setState({'user': user});
  }

  deleteUser = (user) => {
    // delete from state
    /*
    let users = this.state.users;
    const index = users.indexOf(user);
    users.splice(index, 1);
    this.setState({users});
    */

    //delete from server
    deleteUser(user.id)
      .then(() => {
        let users = this.state.users;
        const index = users.indexOf(user);
        users.splice(index, 1);
        this.setState({users});
      })
      .catch(error =>{
        alert('حدث خطأ غير معروف');
      })
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>
              {user.name}
              <button onClick={() => this.setActive(user)}>View</button>  
              <button onClick={() => this.deleteUser(user)}>Delete</button>
            </li>
          )}
        </ul>

        <div>
          <h3>User Details</h3>
          {this.state.user.id > 0 ? 
            <ViewUser user={this.state.user} / >
            :
            'please select a user'
          }
        </div>
      </div>
    );
  }
  
}

export default App;
