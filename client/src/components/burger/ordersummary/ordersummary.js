import React, {Component} from 'react';
import Buttoncomp from "../../UI/button/buttoncomp";

class Ordersummary extends Component {
    render() {
        const ingredientsummary = Object.keys(this.props.ingredients).map(
            igkey=>{
                return <li key={igkey}>{igkey}:{this.props.ingredients[igkey]}</li>
            }
        );
        return (
            <div>
                <h3>Order summary </h3>
                <p>a summary of order </p>

                {ingredientsummary}


                <Buttoncomp clicked={this.props.closemodal}>cancel</Buttoncomp>
                <Buttoncomp clicked={this.props.purchasecontinue}>continue</Buttoncomp>



            </div>
        );
    }
}

export default Ordersummary;
