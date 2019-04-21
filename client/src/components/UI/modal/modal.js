import React, {Component} from 'react';
import Aux from "../../../hoc/aux";
import './modal.css'

class Modal extends Component {
    render() {
        return (
            <div className={"Modal"}>
                {this.props.children}
            </div>
        );
    }
}

export default Modal;
