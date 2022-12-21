import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
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
      .then((users) => this.setState(() => { return { monsters: users, filteredMonsters: users } }));
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
        <SearchBox className='search-box' placeholder='Search Monster' onChangeHandler={onSearchChange} />
        {/* 
            filteredMonsters.map(m => {
              return (
                <div key={m.id}><h1>{m.name}</h1></div>
              )
            })*/
        }
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
