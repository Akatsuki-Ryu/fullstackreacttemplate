import React, {Component} from 'react';
import './App.css';
import Personcomponent from "./component/person";

class App extends Component {
    state = {
        persons: [
            {
                name: 'somename',
                age: 10
            },
            {
                name: 'person2',
                age: 11
            },
            {
                name: 'aka',
                age: 12
            }
        ],
        otherstate: 'something'
    };

    buttonclickhandler = (newname) => {
        // console.log("click");
        this.setState({
            persons: [
                {
                    name: newname,
                    age: 99
                }, {
                    name: newname,
                    age: 99
                },
                {
                    name: 'aka',
                    age: 99
                }
            ],
        })
    }


    render() {
        return (
            <div className="App">
                <button onClick={this.buttonclickhandler.bind(this, "button")}>a button</button>
                <h1>this is title </h1>
                <Personcomponent
                    nameattr={this.state.persons[0].name}
                    ageattr={this.state.persons[0].age}
                    clickattr={this.buttonclickhandler.bind(this, 'component')}>
                </Personcomponent>
                <br/>
                <Personcomponent
                    nameattr={this.state.persons[1].name}
                    ageattr={this.state.persons[1].age}
                    clickattr={this.buttonclickhandler.bind(this, "slot2")}>
                    children text (can be html strucutre)
                </Personcomponent>

                <br/>
                <Personcomponent name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        )
            ;
    }
}

export default App;
