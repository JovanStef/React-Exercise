import React, { Component } from 'react';
import styles from './Person.module.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props){
        super(props)
            this.inputElementRef = React.createRef();
        
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    render() {

        return (
            <Aux>

                <p onClick={this.props.click}>I'm {this.props.name} and i am {this.props.age} years old!!!!!</p>
                <p>{this.props.children}</p>
                <input 
                ref={this.inputElementRef} 
                type="text" 
                onChange={this.props.change} 
                value={this.props.name} />
            </Aux>
        )
    }
}

export default WithClass(Person, styles.Person)