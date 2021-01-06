import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Fortnite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    fetchItems = async () => {
        const data = await fetch(
            "https://fortnite-api.theapinetwork.com/upcoming/get"
        );

        const items = await data.json();
        console.log(items.data);
        this.setState({ items: items.data })
    }

    componentDidMount() {
        console.log("mouted")
        this.fetchItems()
    }

    render() {
        const items = this.state.items;
        console.log(items)
        // console.log(items);
        return (
            <div>
                {

                    items.map(item => (
                        <h3 key={item.itemId}>
                            <Link to={`/fortnite/${item.itemId}`}>
                            {item.item.name}
                            </Link>
                        </h3>))
                }
            </div>
        );
    }
}

export default Fortnite;