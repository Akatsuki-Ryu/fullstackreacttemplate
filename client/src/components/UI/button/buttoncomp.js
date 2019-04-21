import React, {Component} from 'react';
import './button.css'

class Buttoncomp extends Component {
    render() {
        return (//this can be conditional style
            <button onClick={this.props.clicked}
            className={"Buttoncomp"}>{this.props.children}
            </button>
        );
    }
}

export default Buttoncomp;
