import React, {Component} from 'react';
import Aux from "../hoc/aux";
import Burger from "./burger/burger";
import Buildcontrollist from "./burger/buildcontrollist/buildcontrollist";

const INGREPRICES = {
    salad: 5,
    cheese: 1,
    bacon: 10,
    meat: 20

}

class Burgerbuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalprice: 0
    }

    addingredienthandler = (type) => {
        let oldcount = this.state.ingredients[type];
        const updatedcount = oldcount + 1;
        const updateingedient = {
            ...this.state.ingredients
        };
        updateingedient[type] = updatedcount;
        const priceaddval = updateingedient[type];
        const oldprice = this.state.totalprice;
        const newprice = oldprice + priceaddval;
        this.setState({
            totalprice: newprice,
            ingredients: updateingedient
        });
    };

    removeingredienthandler=(type)=>{
        let oldcount = this.state.ingredients[type];
        const updatedcount = oldcount - 1;
        const updateingedient = {
            ...this.state.ingredients
        };
        updateingedient[type] = updatedcount;
        const priceaddval = updateingedient[type];
        const oldprice = this.state.totalprice;
        const newprice = oldprice + priceaddval;
        this.setState({
            totalprice: newprice,
            ingredients: updateingedient
        });
    }

    render() {
        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <Buildcontrollist
                    ingredientadded={this.addingredienthandler}
                    ingredientremoved={this.removeingredienthandler}/>
            </Aux>
        );
    }
}

export default Burgerbuilder;
