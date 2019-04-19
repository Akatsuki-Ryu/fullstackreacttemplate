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
            },
            {
                name: 'aka',
                age: 12
            }
        ]
    };

    buttonclickhandler=()=>{
        console.log("click");
    }


    render() {
        return (
            <div className="App">
                <button onClick={this.buttonclickhandler}>a button</button>
                <h1>this is title </h1>
                <Personcomponent name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <br/>
                <Personcomponent>children text (can be html strucutre ) </Personcomponent>
                <br/>
                <Personcomponent name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        )
            ;
    }
}

export default App;
