import React, {Component} from 'react';
import './burger.css';
import './burgeringre/burgeringre.css';
import Burgeringre from "./burgeringre/burgeringre";


class Burger extends Component {
    render() {
        //put ingredient array into div elements
        console.log(Object.keys(this.props.ingredients));
        const transformedingredients = Object.keys(this.props.ingredients)
            .map(igkey => {
                console.log(igkey);
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
