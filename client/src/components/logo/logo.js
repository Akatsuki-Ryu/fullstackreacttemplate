import React, {Component} from 'react';
import './logo.css';
import burgerlogo from '../../assets/images/133 burger-logo.png'


class Logocomp extends Component {
    render() {
        return (
            <div className={"logocomp"}>
                <img src={burgerlogo} alt="myburgerapp"/>
            </div>
        );
    }
}

export default Logocomp;
