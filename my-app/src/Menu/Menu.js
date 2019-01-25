import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import firebase from "firebase";
import {config} from "../DataBase/config";
import ProductList from "../ProductList/ProductList"
import ProductAdd from "../ProductAdd/ProductAdd"
import '../Menu/Menu.css'

class Menu extends Component {
    constructor(props) {
        super(props);

        this.app = firebase.initializeApp(config);
        this.db = this.app.database().ref().child('products');
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <li>
                            <Link to="/productList">Lista produktów</Link>
                        </li>
                        <li>
                            <Link to="/productAdd">Dodaj Product</Link>
                        </li>
                    </nav>
                    <Route exact path="/" component={() => <ProductList db={this.db}/>}/>
                    <Route exact path="/productList" component={() => <ProductList db={this.db}/>}/>
                    <Route exact path="/productAdd" component={() => <ProductAdd db={this.db}/>}/>
                </div>
            </Router>
        );
    }
}

export default Menu;