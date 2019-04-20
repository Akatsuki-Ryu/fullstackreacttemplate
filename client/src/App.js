import React, {Component} from 'react';
import './App.css';
import Layout from "./components/layout";
import Builder from "./components/builder";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Builder/>
                </Layout>
            </div>

        );
    }
}

export default App;

