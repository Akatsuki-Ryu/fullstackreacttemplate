import React, {Component} from 'react';
import Aux from "../hoc/aux";
import Burger from "./burger/burger";
import Burgeringre from "./burger/burgeringre/burgeringre";
import Buildcontrol from "./burger/buildcontrollist/buildcontrol/buildcontrol";
import Buildcontrollist from "./burger/buildcontrollist/buildcontrollist";

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
               <Buildcontrollist/>
            </Aux>
        );
    }
}

export default Burgerbuilder;
