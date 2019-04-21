import React, {Component} from 'react';
import './backdrop.css'


class Backdrop extends Component {
    render() {

        return (
            this.props.show ? <div className={"backdrop"}
            onClick={this.props.clicked}></div> : null
        );
    }
}

export default Backdrop;
