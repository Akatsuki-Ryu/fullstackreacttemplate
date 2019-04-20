import React, {Component} from 'react';

class Buildcontrol extends Component {
    render() {
        return (
            <div>
                <div>{props.label}</div>
                <button>less</button>
                <button>more</button>
            </div>
        );
    }
}

export default Buildcontrol;
