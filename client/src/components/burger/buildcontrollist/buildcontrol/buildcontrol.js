import React, {Component} from 'react';

class Buildcontrol extends Component {
    render() {
        return (
            <div className={"BuildControl"}>
                <div className={"Label"}>{props.label}</div>
                <button className={"Less"}>less</button>
                <button className={"More"}>more</button>
            </div>
        );
    }
}

export default Buildcontrol;
