import React, {Component} from 'react';
import './buildcontrollist.css'
import Buildcontrol from "./buildcontrol/buildcontrol";


class Buildcontrollist extends Component {
    render() {


        const controldata = [
            {label: 'salad', type: 'salad'},
            {label: 'bacon', type: 'bacon'},
            {label: 'cheese', type: 'cheese'},
            {label: 'meat', type: 'meat'}
        ];

        let controldatashow = controldata.map(data => {
            console.log("data is");
            console.log(data);
            return (

                <Buildcontrol key={data.label} label={data.label}
                              added={() => this.props.ingredientadded(data.type)}
                              removed={() => this.props.ingredientremoved(data.type)}
                              disabled={this.props.disabled[data.type]}/>
            )
        })


        return (
            <div className={"buildcontrol"}>
                <p>current price {this.props.totalprice}</p>
                {controldatashow}
                <button className={"OrderButton"}
                        disabled={!this.props.canpurchase}
                        onClick={this.props.ordered}>
                    order
                </button>
            </div>
        );
    }
}

export default Buildcontrollist;
