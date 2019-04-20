import React, {Component} from 'react';
import Aux from "../hoc/aux";

class Layout extends Component {
    render() {
        return (
            <Aux>

                <p>toolbar, sidebar backdrop</p>
                <div>
                    {this.props.children}
                </div>

            </Aux>
        );
    }
}

export default Layout;
