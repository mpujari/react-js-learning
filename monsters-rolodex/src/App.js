import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: { firstName: 'Foo', lastName: 'Bar' },
      company: 'QY'
    }
  }

  render() {
    return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>hello, world</p>
      <p>hello {this.state.name.firstName} {this.state.name.lastName}</p>
      <button 
        onClick={() => {this.setState(() => {
          return { name: { firstName: 'ooF', lastName: 'raB'} };
        } )}}
      >
        Change name</button>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

    </header>
  </div>;
  }
}

export default App;
