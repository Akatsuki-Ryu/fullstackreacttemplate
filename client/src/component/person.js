import React, {Component} from 'react';

class Personcomponent extends Component {
    render() {
        const randomnum = () => {
            let testfuncret = Math.floor(Math.random()*100);
            return testfuncret;
        }
        return (
            <div>
                this is person component
                <br/>
                {randomnum()}

            </div>
        );
    }
}

export default Personcomponent;
