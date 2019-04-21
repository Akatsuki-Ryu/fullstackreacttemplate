import React, {Component} from 'react';
import Logocomp from "../../logo/logo";
import Navilist from "../navilist/navilist";
import Naviitem from "../navilist/naviitem/naviitem";
import './sidedrawer.css'

class Sidedrawer extends Component {
    render() {
        return (
            <div className={"sidedraw"}>
                <div className={"logosidedrawer"}>
                <Logocomp attr="something"/></div>
                <div></div>
              <Navilist/>
            </div>
        );
    }
}

export default Sidedrawer;
