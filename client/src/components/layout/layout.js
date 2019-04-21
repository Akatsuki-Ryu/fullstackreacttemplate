import React, {Component} from 'react';
import Aux from "../../hoc/aux";
import "./layout.css"
import Toolbarcomp from "../navigation/toolbar/toolbar";

class Layout extends Component {
    render() {


        return (
            <Aux>

                <p>toolbar, sidebar backdrop</p>
                <Toolbarcomp/>
                <main className={"contents"}>
                    {this.props.children}
                </main>

            </Aux>
        );
    }
}

export default Layout;
