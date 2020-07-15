import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name: 'Karl', age: 28},
            {name: 'Manu', age: 26},
            {name: ' Lucy', age: 48}
        ]

    }

    swithcNameHandler = () => {
        console.log('was clicked')
    }

    render() {
        return (
            <div className="App">
                <h1>Yoo how you doing</h1>
                <button onClick={this.swithcNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> looking for gf </Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> looking for gf </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> looking for gf </Person>
            </div>
        );
    }
}

export default App;
