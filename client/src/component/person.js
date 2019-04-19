import React, {Component} from 'react';
import './person.css'

class Personcomponent extends Component {
    render() {
        const randomnum = () => {
            let testfuncret = Math.floor(Math.random() * 100);
            return testfuncret;
        }
        return (
            <div className="Person">
                {/*<p>component static text</p>*/}
                name {this.props.nameattr}
                <br/>
                number {this.props.ageattr}
                <br/>
                {this.props.children}
                <input type="text" value={this.props.nameattr} onChange={this.props.namechangedattr}/>
                <button onClick={this.props.deltepersonattr}>delete</button>
            </div>
        );
    }
}

export default Personcomponent;
