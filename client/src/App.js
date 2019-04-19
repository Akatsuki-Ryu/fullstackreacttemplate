import React, {Component} from 'react';
import './App.css';
import Personcomponent from "./component/person";

class App extends Component {
    state = {
        persons: [
            {
                name: 'somename',
                age: 10
            }, {
                name: 'person2',
                age: 11
            }
        ]
    };

    render() {
        return (
            <div className="App">
                <button>a button</button>
                <h1>this is title </h1>
                <Personcomponent name="aka" age="10"/>
                <br/>
                <Personcomponent>children text (can be html strucutre ) </Personcomponent>
                <br/>
                <Personcomponent name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            </div>
        )
            ;
    }
}

export default App;
