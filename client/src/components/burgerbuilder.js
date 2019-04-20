import React, {Component} from 'react';
import Aux from "../hoc/aux";
import Burger from "./burger/burger";

class Burgerbuilder extends Component {
    state={
        ingredients:{
            salad:1,
            bacon: 1,
            cheese: 2,
            meat: 2
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
