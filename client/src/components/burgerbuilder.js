import React, {Component} from 'react';
import Aux from "../hoc/aux";
import Burger from "./burger/burger";
import Buildcontrollist from "./burger/buildcontrollist/buildcontrollist";
import Modal from "./UI/modal/modal";
import Ordersummary from "./burger/ordersummary/ordersummary";

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
        totalprice: 11,
        maxamout: 4,
        canpurchase: false,
        modalpurchase: false
    }

    updatepurchasestate = (ingredients) => {
        // const ingredients = {
        //     ...this.state.ingredients
        // };

        //todo checkout waht this is doing
        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({canpurchase: sum > 0})
    }
    addingredienthandler = (type) => {
        let oldcount = this.state.ingredients[type];
        let updatedcount;
        if (oldcount < this.state.maxamout) {
            updatedcount = oldcount + 1;
        } else {
            updatedcount = this.state.maxamout;
        }

        const updateingedient = {
            ...this.state.ingredients
        };
        updateingedient[type] = updatedcount;
        const priceaddval = INGREPRICES[type];
        const oldprice = this.state.totalprice;
        const newprice = oldprice + priceaddval;
        this.setState({
            totalprice: newprice,
            ingredients: updateingedient
        });
        this.updatepurchasestate(updateingedient);
    };

    removeingredienthandler = (type) => {
        let oldcount = this.state.ingredients[type];
        let updatedcount;
        if (oldcount > 0) {
            updatedcount = oldcount - 1;
        } else {
            updatedcount = 0;
        }
        const updateingedient = {
            ...this.state.ingredients
        };
        updateingedient[type] = updatedcount;
        const priceaddval = INGREPRICES[type];
        const oldprice = this.state.totalprice;
        const newprice = oldprice - priceaddval;
        this.setState({
            totalprice: newprice,
            ingredients: updateingedient
        });
        this.updatepurchasestate(updateingedient);
    }

    purchasehandler = () => {
        this.setState({modalpurchase: true});

    }
    purchasecancelhandler = () => {
        this.setState({modalpurchase: false});
    };

    purchasecontinuehandler = () => {
        alert("continue");
    }

    render() {
        const disabledinfo = {
            ...this.state.ingredients
        };
        //if it is below 0 , give ture
        for (let key in disabledinfo) {
            if (disabledinfo[key] <= 0) {
                disabledinfo[key] = true;
            } else {
                disabledinfo[key] = false;
            }
            console.log(disabledinfo);

        }

        return (
            <Aux>
                <Modal show={this.state.modalpurchase}
                       closemodal={this.purchasecancelhandler}>
                    <Ordersummary ingredients={this.state.ingredients}
                                  closemodal={this.purchasecancelhandler}
                                  purchasecontinue={this.purchasecontinuehandler}
                                  totalprice={this.state.totalprice}/>
                </Modal>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <Buildcontrollist
                    ingredientadded={this.addingredienthandler}
                    ingredientremoved={this.removeingredienthandler}
                    disabled={disabledinfo}
                    canpurchase={this.state.canpurchase}
                    totalprice={this.state.totalprice}
                    ordered={this.purchasehandler}/>
            </Aux>
        );
    }
}

export default Burgerbuilder;
