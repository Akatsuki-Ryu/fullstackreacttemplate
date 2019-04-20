import React, {Component} from 'react';
import Aux from "../hoc/aux";
import Burger from "./burger/burger";

class Burgerbuilder extends Component {
    render() {
        return (
            <Aux>
                <div>
                   <Burger/>
                </div>
                <div>build controls</div>
            </Aux>
        );
    }
}

export default Burgerbuilder;
