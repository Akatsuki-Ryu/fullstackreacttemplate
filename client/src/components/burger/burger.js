import React, {Component} from 'react';
import './burger.css';
import './burgeringre/burgeringre.css';
import Burgeringre from "./burgeringre/burgeringre";


class Burger extends Component {
    render() {
        return (
            <div className={"burger"}>
                <Burgeringre type={"bread-top"}/>
                <Burgeringre type={"cheese"}/>
                <Burgeringre type={"meat"}/>
                <Burgeringre type={"bread-bottom"}/>

            </div>
        );
    }
}

export default Burger;
