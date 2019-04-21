import React, {Component} from 'react';
import Naviitem from "./naviitem/naviitem";
import './navilist.css'

class Navilist extends Component {
    render() {
        return (
            <ul className={"navigationlist"}>
                <Naviitem link="/" active>burger builder</Naviitem>
                <Naviitem link="/">checkout</Naviitem>
            </ul>
        );
    }
}

export default Navilist;
