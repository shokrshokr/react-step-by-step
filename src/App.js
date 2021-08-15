import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import CreateUserPage from './Pages/CreateUserPage';
import EditUserPage from './Pages/EditUserPage';
import UserPage from './Pages/UserPage';
import UsersPage from './Pages/UsersPage';
import "./App.css";
import NotFound from './Pages/NotFound';

const HomePage = () => <div>Home</div>
const AboutPage = () => <div>About</div>

const MyNavLink = (props) => <NavLink exact activeClassName="active" {...props}>{props.children}</NavLink>

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MyNavLink to="/">Home</MyNavLink>{" "}
          <MyNavLink to="/users">Users</MyNavLink>{" "}
          <MyNavLink to="/users/create">CreateUser</MyNavLink>{" "}
          <MyNavLink to="/about">About</MyNavLink>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/users" exact component={UsersPage} />
            <Route path="/users/create" exact component={CreateUserPage} />
            <Route path="/users/:id" exact component={UserPage} />
            <Route path="/users/edit/:id" exact component={EditUserPage} />
            <Route component={NotFound} />

          </Switch>
          
        
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
