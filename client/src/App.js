import React, {Component} from 'react';
import './App.css';
import Personcomponent from "./component/person";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>this is title </h1>
                <Personcomponent name="aka" age="10"/>
                <br/>
                <Personcomponent>something text </Personcomponent>
                <br/>
                <Personcomponent/>
            </div>
        )
            ;
    }
}

export default App;
