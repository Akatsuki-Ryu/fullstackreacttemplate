import React, {Component} from 'react';
import './toolbar.css'
import Logocomp from "../../logo/logo";

class Toolbarcomp extends Component {
    render() {
        return (
            <header className={"toolbar"}>
                <div>menu</div>
                <Logocomp/>
                <nav>
                    <ul>links</ul>
                </nav>
            </header>
        );
    }
}

export default Toolbarcomp;
