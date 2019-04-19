import React, {Component} from 'react';
import Personcomponent from "./person";

class Personlistcompo extends Component {
    render() {
        let person = null;
        if (this.props.stateattr.showperson === true) {
            // inlinestyle.backgroundColor = 'red'; //todo inline contiditional styling
            person = (
                <div>

                    {/*<button*/}
                    {/*    className="testbutton"*/}
                    {/*    onClick={() => this.buttonclickhandler("name from arrow green")}>a button*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    style={inlinestyle}*/}
                    {/*    onClick={() => this.buttonclickhandler("name from arrow red")}>a button*/}
                    {/*</button>*/}

                    {this.props.stateattr.persons.map((data, index) => {
                        return (
                            <Personcomponent
                                key={data.id}
                                nameattr={data.name}
                                ageattr={data.age}
                                namechangedattr={(event) => this.props.namechangedhandlerattr(event, index)}
                                deltepersonattr={() => this.props.deletepersonhandlerattr(index)}>
                            </Personcomponent>
                        );
                    })}

                </div>
            )
        }


        return (
            <div>
                {person}
            </div>
        );
    }
}

export default Personlistcompo;



