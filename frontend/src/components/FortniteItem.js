import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class FortniteItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {
                item: {
                    images: {}
                }
            }
        }
    }

    fetchItems = async () => {
        const data = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`
        );

        const item = await data.json();
        this.setState({ item: item.data })
    }

    componentDidMount() {
        this.fetchItems()
    }

    render() {
        const item = this.state.item;
        const imgStyle = {
            'width': '18rem',

        }
        const divStyle = {
            'top': '40px',

        }
        // console.log(items);
        return (
            <div className="col d-flex justify-content-center" style={divStyle}>
                <div className="card" style={imgStyle}>
                    <img className="card-img-top" src={item.item.images.icon} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{item.item.name}</h5>
                        <p className="card-text">{item.item.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FortniteItem;