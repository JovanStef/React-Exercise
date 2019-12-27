import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';
import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput';

class App extends Component {
  // state = {
  //   persons: [
  //     { name: 'Nesto', age: 28 },
  //     { name: 'Isto', age: 12345 },
  //     { name: 'Blee', age: 145 }
  //   ]
  // }
  // nameChangeHandler = (newName,newAge) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: newAge },
  //       { name: 'Isto', age: 12345 },
  //       { name: 'Blee', age: 145 }
  //     ]
  //   })
  // }
  // name_ChangeInputHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: "newName", age: "newAge" },
  //       { name: event.target.value, age: 12345 },
  //       { name: 'Blee', age: 145 }
  //     ]
  //   })
  // }

  state={
    name: 'Trpe'
  }
  inputChangeName = (event)=>{
    this.setState({
      name:event.target.value
    })
  }
  render() {
    // const buttonStyle ={
    //   backgroundColor: 'white',
    //   padding:'5px',
    //   border:'1px solid blue'
    // }
return(
  <div>

  <UserInput inputChange={this.inputChangeName} userName={this.state.name}/>
  <UserOutput userName={this.state.name}/>
  <UserOutput userName={this.state.name}/>
  <UserOutput userName={this.state.name}/>
  </div>

)
  //   return (
  //     <div className="App">
  //       <h1>Hi,Nesto</h1>
  //       <button 
  //       style={buttonStyle}
  //       onClick={() =>this.nameChangeHandler( 'CiuCiu!!!',378)}>Name change</button>
  //       <Person
  //         name={this.state.persons[0].name}
  //         age={this.state.persons[0].age}
  //         click={this.nameChangeHandler.bind(this, 'DrnDRN',256)}
  //         change={this.name_ChangeInputHandler}
  //       />
  //       <Person
  //         name={this.state.persons[1].name}
  //         age={this.state.persons[1].age}
  //         change={this.name_ChangeInputHandler}
  //         >
  //         Hobie: Yes please
  // </Person>
  //       <Person
  //         name={this.state.persons[2].name}
  //         age={this.state.persons[2].age} 
  //         change={this.name_ChangeInputHandler}
  //         />

  //     </div>
  //   );
  }
}

export default App;
