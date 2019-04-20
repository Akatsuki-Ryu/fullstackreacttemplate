import React, {Component} from 'react';
import "./buildcontrol.css"

class Buildcontrol extends Component {
    render() {

        return (
            <div className={"BuildControl"}>
                <div className={"Label"}>{this.props.label}</div>
                <button className={"Less"}>less</button>
                <button className={"More"} onClick={this.props.added}>more</button>
            </div>
        );
    }
}

export default Buildcontrol;
