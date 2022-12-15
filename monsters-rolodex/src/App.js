import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: []
    }
    console.log(1);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => { console.log(users) }
      ));
    console.log(3);
  }

  render() {
    console.log(2);
    return (
      <div className="App">
        {
          this.state.monsters.map(m => {
            return (
              <div key={m.id}><h1>{m.name}</h1></div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
