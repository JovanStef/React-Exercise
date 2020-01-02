import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserInput from './userInput/userInput';
// import UserOutput from './userOutput/userOutput';

class App extends Component {
  state = {
    persons: [
      { id:'1',name: 'Nesto', age: 28 },
      { id:'2',name: 'Isto', age: 12345 },
      { id:'3',name: 'Blee', age: 145 }
    ],
    showPersons:false

  }
 deletePerson = (index)=>{
  let persons = [...this.state.persons];
  persons.splice(index,1);
  this.setState({persons:persons})
 }
  name_ChangeInputHandler = (event,id) => {
    let personIndex = this.state.persons.findIndex(p=> {
      return p.id===id
    });
    let person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    let personas = [...this.state.persons];
    personas[personIndex]=person;
    console.log(personas)
    this.setState({persons:personas})
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
          {this.state.persons.map((person,index)=>{
            return <Person
            click = {()=>this.deletePerson(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            change={(event)=>this.name_ChangeInputHandler(event,person.id)}
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
        onClick={this.toggleShow}>Toggle visible</button>
        {persons}
      </div>
    );
  }
}

export default App;
