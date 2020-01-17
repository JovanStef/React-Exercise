import React, { Component } from 'react';
import style from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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
    let persons=null;

    if(this.state.showPersons){
      persons=(
        <div>
         <Persons
         persons={this.state.persons}
         clicked={this.deletePerson}
         changed={this.name_ChangeInputHandler}
         /> 


    </div>

    )


    }
const classesArray = [];
if(this.state.persons.length <=2){
  classesArray.push(style.red)
}if(this.state.persons.length <=1){
  classesArray.push(style.bold)
}
    return (
      <div className={style.App}>
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.toggleShow}
        />
        
        {persons}
      </div>
    );
  }
}

export default App;
