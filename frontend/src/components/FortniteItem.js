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
        console.log(item.data);
        this.setState({ item: item.data })
    }

    componentDidMount() {
        console.log(this.props.match)
        this.fetchItems()
    }

    render() {
        const item = this.state.item;
        console.log(item)
        const imgStyle = {
            'height': '400px'
        }
        // console.log(items);
        return (
            <div>
                <img style={imgStyle} src={item.item.images.icon}/>
                <h3 key={item.itemId}>
                    {item.item.name}
                </h3>

            </div>
        );
    }
}

export default FortniteItem;