import React, {Component} from 'react';
import Product from "./Product";
import "./ProductList.css"

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.db = this.props.db;

        this.state = {
            list: [],
        }
    }

    componentWillMount() {
        const productList = this.state.list;
        this.db.on('child_added', snap => {
            productList.push({
                id: snap.key,
                name: snap.val().name,
                pieces: snap.val().pieces,
            })
            this.setState({
                list: productList
            })
        })
    }

    render() {
        return (
            <div>
                <div className="title">Lista Produktów</div>
                <div className="paddingLeft55">
                    {
                        this.state.list.map((product) => {
                            return (
                                <Product
                                    name={product.name}
                                    pieces={product.pieces}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProductList;
