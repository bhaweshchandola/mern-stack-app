import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phone_number: '',
            address: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        // axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        axios.post('http://localhost:5000/contacts/add', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        const { name, phone_number, address } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="phone_number" value={phone_number} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="address" value={address} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
