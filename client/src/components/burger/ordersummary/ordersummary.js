import React, {Component} from 'react';

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

                <button>cancel</button>
                <button>continue</button>


            </div>
        );
    }
}

export default Ordersummary;
