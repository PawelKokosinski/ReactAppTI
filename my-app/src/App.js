import React, {Component} from 'react';
import 'firebase/database';
import './App.css';
import Menu from "./Menu/Menu"

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
            </div>
        );
    }
}

export default App;
