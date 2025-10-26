import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from './IncrementComponent';
import ClassCounter from './MyClassComponent';
import DataBindingComponent from './DataBindingComponent';
import ParentComponent from './ParentComponent';
import WelcomeMessage from './WelcomeMessage';
import Greeting from './Greeting';
import ConditionalRendering from './ConditionalRendering';
import ItemList from './ListUsage';
import ArrayTraversal from './ArrayTraversal';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Button/>
        <Counter/>
        <ClassCounter/>
        <DataBindingComponent/>
        <ParentComponent/>
        {/* <WelcomeMessage/> */}
        {/* <Greeting   isLoggedIn={true} isAuthorized={true} /> */}
        <ConditionalRendering isLoggedIn={true} defaultProp={false}/>
        <ItemList/>
        <ArrayTraversal/>
        
        
      </header>
      
      
    </div>
  );
}

export default App;
