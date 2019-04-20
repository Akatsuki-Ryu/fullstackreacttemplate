import React, {Component} from 'react';
import Aux from "../hoc/aux";
import Burger from "./burger/burger";

class Burgerbuilder extends Component {
    state={
        ingredients:{
            salad:0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render() {
        return (
            <Aux>
                <div>
                   <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>build controls</div>
            </Aux>
        );
    }
}

export default Burgerbuilder;
