import React, {Component} from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                toolbar, sidebar backdrop
                <div>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Layout;
