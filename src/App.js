import './App.css';
import React, { Component } from 'react';
import User from './components/User';
import Navbar from './components/Navbar';

class App extends Component {
  render() {

    return (
      <div className="container">
        <Navbar title="User App" />
        <hr/>
        <User name = "Oğuzhan Baş" salary = "30000" department = "Bilişim"/>
        <User name = "Mustafa Murat Coşkun" salary = "5000" department = "Bilişim"/>
        <User name = "Özge Demir" salary = "5000" />
      </div>
    );
  }
}

export default App;
