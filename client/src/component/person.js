import React, {Component} from 'react';

class Personcomponent extends Component {
    render() {
        const randomnum = () => {
            let testfuncret = Math.floor(Math.random() * 100);
            return testfuncret;
        }
        return (
            <div>
                <button onClick={this.props.clickattr}>in component </button>
                <p>component static text</p>
                <br/>
                attribute name {this.props.nameattr}
                <br/>
                a random number from component {randomnum()}
                <br/>
                an attribute number {this.props.ageattr}
                <br/>
                {this.props.children}
                <input type="text" onChange={this.props.changed} value={this.props.nameattr}/>
            </div>
        );
    }
}

export default Personcomponent;
