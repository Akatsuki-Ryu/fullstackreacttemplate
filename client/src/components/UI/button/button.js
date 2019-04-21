import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (//this can be conditional style
            <button onClick={this.props.clicked}
            className={"Button"}>{this.props.children}
            </button>
        );
    }
}

export default Button;
