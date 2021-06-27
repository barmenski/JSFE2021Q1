/*import React, { Component } from 'react';*/
import * as React from 'react';
/*import * as ReactDOM from 'react-dom';*/
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main/>
        <Footer />
      </div>
    );
  }
}
export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/