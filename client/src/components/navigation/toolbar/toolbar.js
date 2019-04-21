import React, {Component} from 'react';
import './toolbar.css'
import Logocomp from "../../logo/logo";
import Navilist from "../navilist/navilist";

class Toolbarcomp extends Component {
    render() {
        return (
            <header className={"toolbar"}>
                <div onClick={this.props.opensidemenu}>menu</div>
                <Logocomp/>
                <nav className={"desktoponly"}>
                    <Navilist/>
                </nav>
            </header>
        );
    }
}

export default Toolbarcomp;
