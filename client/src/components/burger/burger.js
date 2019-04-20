import React, {Component} from 'react';
import './burger.css';
import './burgeringre/burgeringre.css';
import Burgeringre from "./burgeringre/burgeringre";


class Burger extends Component {
    render() {
        const transformedingredients = Object.keys(this.props.ingredients)
            .map(igkey => {
                return [...Array(this.props.ingredients[igkey])].map((_, i) => {
                    return <Burgeringre key={igkey + 1} type={igkey}/>
                })
            })
        return (
            <div className={"burger"}>
                <Burgeringre type={"bread-top"}/>
                {transformedingredients}
                <Burgeringre type={"bread-bottom"}/>

            </div>
        );
    }
}

export default Burger;
