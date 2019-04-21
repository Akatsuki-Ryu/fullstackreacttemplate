import React, {Component} from 'react';
import Logocomp from "../../logo/logo";
import Navilist from "../navilist/navilist";
import './sidemenu.css'
import Aux from "../../../hoc/aux";
import Backdrop from "../../UI/backdrop/backdrop";

class Sidemenu extends Component {


    render() {
        let attachclass;
        if (this.props.statusopen) {
            attachclass = "sidedraw open";
        } else {
            attachclass="sidedraw close"
        }

        return (
            <Aux>
                <Backdrop show={this.props.statusopen}
                clicked={this.props.close}/>
                <div className={attachclass}>
                    <div className={"logosidedrawer"}>
                        <Logocomp/></div>
                    <Navilist/>
                </div>
            </Aux>
        );
    }
}

export default Sidemenu;
