import React, {Component} from 'react';
import './naviitem.css'

class Naviitem extends Component {
    render() {
        console.log("this props active");
        console.log(this.props.active);
        return (
            <li className={"navigatonitem"}>
                <a className={this.props.active ? "active" : null}
                   href={this.props.link}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}

export default Naviitem;
