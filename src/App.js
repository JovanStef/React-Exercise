import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserInput from './userInput/userInput';
// import UserOutput from './userOutput/userOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Nesto', age: 28 },
      { name: 'Isto', age: 12345 },
      { name: 'Blee', age: 145 }
    ],
    showPersons:false

  }
  nameChangeHandler = (newName,newAge) => {
    this.setState({
      persons: [
        { name: newName, age: newAge },
        { name: 'Isto', age: 12345 },
        { name: 'Blee', age: 145 }
      ],
    })
  }
  name_ChangeInputHandler = (event) => {
    this.setState({
      persons: [
        { name: "newName", age: "newAge" },
        { name: event.target.value, age: 12345 },
        { name: 'Blee', age: 145 }
      ]
    })
  }
  toggleShow=()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }


  render() {
    const buttonStyle ={
      backgroundColor: 'white',
      padding:'5px',
      border:'1px solid blue'
    }
    let persons=null;

    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map(person=>{
            return <Person
            name={person.name}
            age={person.age}
            change={this.name_ChangeInputHandler}
            />
          })}


    </div>
    )

    }

    return (
      <div className="App">
        <h1>Hi,Nesto</h1>
        <button 
        style={buttonStyle}
        onClick={this.toggleShow}>Name change</button>
        {persons}
      </div>
    );
  }
}

export default App;
