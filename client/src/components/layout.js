import React, {Component} from 'react';
import Aux from "../hoc/aux";
import "./layout.css"

class Layout extends Component {
    render() {


        return (
            <Aux>

                <p>toolbar, sidebar backdrop</p>
                <main className={"contents"}>
                    {this.props.children}
                </main>

            </Aux>
        );
    }
}

export default Layout;
