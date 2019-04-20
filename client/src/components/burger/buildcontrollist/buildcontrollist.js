import React, {Component} from 'react';
import './buildcontrollist.css'
import Buildcontrol from "./buildcontrol/buildcontrol";


class Buildcontrollist extends Component {
    render() {


        const controldata = [
            {label: 'salad', type: 'salad'},
            {label: 'bacon', type: 'bacon'},
            {label: 'cheese', type: 'cheese'},
            {label: 'meat', type: 'meat'}
        ];

        controldata.map(data => {
            console.log(data);
        })

        //
        return (
            <div className={"buildcontrol"}>
                {controldata.map(data=> {
                     <Buildcontrol/>
                    }

                          )}
            </div>
        );
    }
}

export default Buildcontrollist;
