import React, {Component} from 'react';
import Aux from "../../hoc/aux";
import "./layout.css"
import Toolbarcomp from "../navigation/toolbar/toolbar";
import Sidemenu from "../navigation/sidemenu/sidemenu";

class Layout extends Component {

    state = {
        showsidemneu: false
    };

    sidemenuclosehandler = () => {
        this.setState({showsidemneu: false})
    };
    sidemenuopenhandler = () => {
        this.setState({showsidemneu: true})
    };

    render() {
        return (
            <Aux>

                <p>toolbar, sidebar backdrop</p>
                <Sidemenu statusopen={this.state.showsidemneu}
                          close={this.sidemenuclosehandler}/>
                <Toolbarcomp opensidemenu={this.sidemenuopenhandler}/>
                <main className={"contents"}>
                    {this.props.children}
                </main>

            </Aux>
        )
            ;
    }
}

export default Layout;

