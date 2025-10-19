import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';
import Card from './card';
import MyClassComponent from './MyClassComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button name="aditya"/>
        <Button name="react"/>
      <Card name="Aditya" age={24} phoneNumber='2356775' />
      <Card name="Megesh" age={24} phoneNumber='2356775' />
      <Card name="Rahul" age={24} phoneNumber='2356775' />
      <MyClassComponent />
      </header>
    </div>
  );
}

export default App;
