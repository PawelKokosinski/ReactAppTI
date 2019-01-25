import React, {Component} from "react";
import "./Product.css"

class Product extends Component {

    constructor(props) {
        super(props);
        this.name = props.name;
        this.pieces = props.pieces;
    }

    render() {
        return (
            <div className="product">
                <span className="product-name">{this.name}</span>
                <span className="product-count">{this.pieces}</span>
            </div>
        )
    }
}

export default Product;

