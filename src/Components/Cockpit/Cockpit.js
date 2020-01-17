import React from 'react';
import style from './Cockpit.module.css'

const cockpit =(props)=>{
    let buttonStyle ='';
    buttonStyle=style.Green;
if(props.showPersons){
    buttonStyle=style.red
}

    const classesArray = [];
if(props.persons.length <=2){
  classesArray.push(style.red)
}if(props.persons.length <=1){
  classesArray.push(style.bold)
}
    return(
        <div className={style.Cockpit}>
            <h1>Hi,Nesto</h1>
        <p className={classesArray.join(' ')}>These are persons</p>
        <button 
        className={buttonStyle}
        onClick={props.clicked}>Toggle visible</button>
        </div>
    )
}

export default cockpit