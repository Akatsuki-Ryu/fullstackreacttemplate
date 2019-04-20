import React, {Component} from 'react';
import './App.css';
import Layout from "./components/layout";
import Burgerbuilder from "./components/burgerbuilder";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Burgerbuilder/>
                </Layout>
            </div>

        );
    }
}

export default App;

