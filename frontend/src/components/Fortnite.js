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
        this.setState({ items: items.data })
    }

    componentDidMount() {
        console.log("mouted")
        this.fetchItems()
    }

    render() {
        const items = this.state.items;
        return (
            <div >
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Rarity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => (
                                <tr>
                                        <td>{index + 1}</td>
                                        <td><Link to={`/fortnite/${item.itemId}`}>{item.item.name}</Link></td>
                                        <td>{item.item.description}</td>
                                        <td>{item.item.rarity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Fortnite;