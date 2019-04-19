import React, {Component} from 'react';

class Cockpitcompo extends Component {



    render() {
        console.log(this.props);
        let dynaclasses = '';
        if (this.props.stateattr.persons.length === 2) {
            dynaclasses = 'red';
        }
        if (this.props.stateattr.persons.length === 1) {
            dynaclasses = 'purple';
        }
        const inlinestyle = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'

        }


        return (
            <div>
                <h1 className={dynaclasses}>this is title </h1>

                <button
                    style={inlinestyle}
                    onClick={this.props.togglelisthandlerattr}>toggle
                </button>
            </div>
        );
    }
}

export default Cockpitcompo;
