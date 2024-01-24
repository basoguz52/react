import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {

  state = {
    users: [
      {
        id:1,name:"Oğuzhan Baş",salary:"30000",department:"Bilişim"
      },
      {
        id:2,name:"Mustafa Murat Coşkun",salary:"5000",department:"Bilişim"
      },
      {
        id:3,name:"Özge Demir",salary:"6000",department:"Pazarlama"
      }

    ]
  }

  render() {

    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users users= {this.state.users}/>
      </div>
    );
  }
}

export default App;
