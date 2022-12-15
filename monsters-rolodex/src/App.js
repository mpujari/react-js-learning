import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'L1',
          id: "1"
        },
        {
          name: 'L2',
          id: "2"
        },
        {
          name: 'L3',
          id: "3"
        },
        {
          name: 'L4',
          id: "4"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map( m => {
            return (
              <div key={m.id}><h1>{m.name}</h1></div>
            )
          })
        }
      </div>
    )
  }
}

export default App;
