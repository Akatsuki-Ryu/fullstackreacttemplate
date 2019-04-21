import React, {Component} from 'react';
import Logocomp from "../../logo/logo";
import Navilist from "../navilist/navilist";
import Naviitem from "../navilist/naviitem/naviitem";

class Sidedrawer extends Component {
    render() {
        return (
            <div>
                <Logocomp/>
                <Naviitem link="/" active>burger builder</Naviitem>
                <Naviitem link="/">checkout</Naviitem>
            </div>
        );
    }
}

export default Sidedrawer;
