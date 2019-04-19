import React, {Component} from 'react';

class Personcomponent extends Component {
    render() {
        const randomnum = () => {
            let testfuncret = Math.floor(Math.random()*100);
            return testfuncret;
        }
        return (
            <div>
                component static text
                <br/>
                attribute name {this.props.name}
                <br/>
                a random number from component  {randomnum()}
                <br/>
                an attribute number {this.props.age}


            </div>
        );
    }
}

export default Personcomponent;
