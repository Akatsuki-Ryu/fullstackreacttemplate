import React, {Component} from 'react';
import './App.css';
import './component/person.css'
import Personcomponent from "./component/person";
import uuid from 'uuid'
import Personlistcompo from "./component/personlist";
import Cockpitcompo from "./component/cockpit";


class App extends Component {
    state = {
        persons: [
            {
                id: uuid.v4(),
                name: 'person1',
                age: 11
            },
            {
                id: uuid.v4(),
                name: 'person2',
                age: 12
            },
            {
                id: uuid.v4(),
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

    namechangedhandler = (event, index) => {
        console.log("namechanged  ");


        //search by id to find the index and update the value
        // console.log(event);
        // const personindex = this.state.persons.findIndex(pperson=>{
        //     return pperson.id === index;
        // });
        //
        // const newpersondata = {...this.state.persons[personindex]};
        //
        // newpersondata.name = event.target.value;
        // const persons = [...this.state.persons];
        // persons[personindex] = newpersondata;
        //
        // this.setState({
        //     persons: persons
        // })


        //search index and update the value
        const newpersondata = [...this.state.persons];
        newpersondata[index].name = event.target.value;
        this.setState(
            {
                persons: newpersondata
            }
        )


        // this.setState({
        //     persons: [
        //         {
        //             name: "aka",
        //             age: 10
        //         }, {
        //             name: event.target.value,
        //             age: 20
        //         },
        //         {
        //             name: 'aka',
        //             age: 99
        //         }
        //     ],
        // })
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






        return (
            <div className="App">

                <Cockpitcompo
                    stateattr={this.state}
                    togglelisthandlerattr = {this.togglelisthandler}/>

                <Personlistcompo
                    stateattr ={this.state}
                    namechangedhandler = {this.namechangedhandler}
                    deletepersonhandler={this.deletepersonhandler}

                />
            </div>
        )
            ;
    }
}

export default App;
