import React, {Component} from 'react';
import './burger.css';
import './burgeringre/burgeringre.css';
import Burgeringre from "./burgeringre/burgeringre";


class Burger extends Component {
    render() {
        //put ingredient array into div elements
        console.log(Object.keys(this.props.ingredients));
        let transformedingredients = Object.keys(this.props.ingredients)
            .map(igkey => {
                return [...Array(this.props.ingredients[igkey])].map((_, i) => {
                    return <Burgeringre key={igkey + i} type={igkey}/>
                })
            })
            .reduce((arr, el) => {
                return arr.concat(el)
            }, []);
        if (transformedingredients.length === 0) {
            transformedingredients = <p>please start adding stuff </p>
        }
        console.log(transformedingredients);


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
