import React, {Component} from 'react';
import './person.css'
import PropTypes from 'prop-types'

class Personcomponent extends Component {
    constructor() {
        super();
        this.inputelement = React.createRef();

    }
    componentDidMount() {
        if (this.props.posistion === 0) {
            this.inputelement.current.focus();
        }

    }

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
                <input type="text"
                       ref={this.inputelement}
                       value={this.props.nameattr}
                       onChange={this.props.namechangedattr}/>
                <button onClick={this.props.deltepersonattr}>delete</button>
            </div>
        );
    }
}

//ensure the right data type , good for teamworks
Personcomponent.proptype = {
    nameattr: PropTypes.string,
    ageattr: PropTypes.number,
    namechangedattr: PropTypes.func,
    deltepersonattr: PropTypes.func

}

export default Personcomponent;




