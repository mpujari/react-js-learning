import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('constructor');
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchField: event.target.value.toLocaleLowerCase() };
    });
  }


  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(() => { return { monsters: users, filteredMonsters: users } },
        () => { console.log(users) }
      ));
  }

  render() {
    console.log('render');

    // destructing
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((m) => {
      return m.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monster' onChange={onSearchChange} />
        {
          filteredMonsters.map(m => {
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
