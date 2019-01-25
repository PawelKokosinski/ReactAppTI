import React, {Component} from "react";
import "./ProductAdd.css"

class ProductAdd extends Component {
    constructor(props) {
        super(props);
        this.db = props.db;

        this.state = {
            name: '',
            pieces: ''
        };

        this.productAdd = this.productAdd.bind(this);
        this.setName = this.setName.bind(this);
        this.setPieces = this.setPieces.bind(this);
    }

    productAdd() {
        this.db.push().set({name: this.state.name, pieces: this.state.pieces});
        this.setState({
            name: '',
            pieces: ''
        })
    }

    setName(e) {
        this.setState({
            name: e.target.value,
        })
    }

    setPieces(e) {
        this.setState({
            pieces: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <div className="title">Dodawanie produktów</div>
                <div className="paddingLeft55">
                    <input className="control" onChange={this.setName} value={this.state.name} placeholder="Produkt"/>
                    <input className="control" onChange={this.setPieces} value={this.state.pieces} placeholder="Ile"/>
                    <button className="btn-add" onClick={this.productAdd}>Dodaj Produkt</button>
                </div>
            </div>
        );
    }
}

export default ProductAdd;
