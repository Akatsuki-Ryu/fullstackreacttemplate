import React, {Component} from 'react';
import './App.css';
import './component/person.css'
import Personcomponent from "./component/person";

class App extends Component {
    state = {
        persons: [
            {
                name: 'person1',
                age: 11
            },
            {
                name: 'person2',
                age: 12
            },
            {
                name: 'person3',
                age: 13
            }
        ],
        otherstate: 'something',
        showperson: false
    };

    buttonclickhandler = (newname, age) => {
        // console.log("click");
        this.setState({
            persons: [
                {
                    name: newname,
                    age: age
                }, {
                    name: newname,
                    age: age
                },
                {
                    name: 'aka',
                    age: 99
                }
            ],
        })
    }

    namechangedhandler = (event) => {
        console.log("namechanged");
        this.setState({
            persons: [
                {
                    name: "aka",
                    age: 10
                }, {
                    name: event.target.value,
                    age: 20
                },
                {
                    name: 'aka',
                    age: 99
                }
            ],
        })
    }

    togglelisthandler = () => {
        const doesshow = this.state.showperson;
        // console.log("toggleperson handler");
        this.setState(
            {showperson: !doesshow}
        )

    }

    render() {
        const inlinestyle = {
            backgroundColor: 'red',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'

        }

        let person = null;
        if (this.state.showperson === true) {
            person = (
                <div>
                    <button
                        className="testbutton"
                        onClick={() => this.buttonclickhandler("name from arrow")}>a button
                    </button>
                    <button
                        style={inlinestyle}
                        onClick={() => this.buttonclickhandler("name from arrow")}>a button
                    </button>
                    <h1>this is title </h1>
                    <Personcomponent
                        nameattr={this.state.persons[0].name}
                        ageattr={this.state.persons[0].age}
                        clickattr={this.buttonclickhandler.bind(this, 'component', 12)}
                        changed={this.namechangedhandler}>
                    </Personcomponent>
                    <br/>
                    <Personcomponent
                        nameattr={this.state.persons[1].name}
                        ageattr={this.state.persons[1].age}
                        clickattr={this.buttonclickhandler.bind(this, "slot2", 13)}
                        changed={this.namechangedhandler}>
                        children text (can be html strucutre)
                    </Personcomponent>

                    <br/>
                    <Personcomponent
                        nameattr={this.state.persons[2].name}
                        ageattr={this.state.persons[2].age}
                        changed={this.namechangedhandler}/>
                </div>
            )
        }
        return (
            <div className="App">
                <button
                    onClick={this.togglelisthandler}>toggle
                </button>
                {person}


            </div>
        )
            ;
    }
}

export default App;
