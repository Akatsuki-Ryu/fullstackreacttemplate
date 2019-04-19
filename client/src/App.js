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
        showperson: true
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

    deletepersonhandler = (index) => {

        // console.log("this person is deleted " + index);
        // const persondata = this.state.persons;
        // persondata.splice(index, 1);
        // this.setState({
        //     persons:persondata
        // })

        const persondata = [...this.state.persons];
        persondata.splice(index, 1);
        this.setState({
            persons: persondata
        })

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
                        onClick={() => this.buttonclickhandler("name from arrow green")}>a button
                    </button>
                    <button
                        style={inlinestyle}
                        onClick={() => this.buttonclickhandler("name from arrow red")}>a button
                    </button>
                    <h1>this is title </h1>
                    {this.state.persons.map((data, index) => {
                        return (
                            <Personcomponent
                                nameattr={data.name}
                                ageattr={data.age}
                                clickattr={this.buttonclickhandler.bind(this, 'component', 12)}
                                changed={this.namechangedhandler}
                                deltepersonattr={() => this.deletepersonhandler(index)}>{index}
                            </Personcomponent>
                        )
                    })}

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
