import React, {Component} from 'react';
import './toolbar.css'

class Toolbarcomp extends Component {
    render() {
        return (
            <header className={"toolbar"}>
                <div>menu</div>
                <div>logo</div>
                <nav>
                    <ul>links</ul>
                </nav>
            </header>
        );
    }
}

export default Toolbarcomp;
