import React, { Component } from 'react'
import axios from 'axios'
import PostList from './PostList'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()

        this.state = {
            name: '',
            phone_number: '',
            address: '',
            responseData: [],
            errMsg: ''
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
                this.getData()
            })
            .catch(err => {
                console.log(err)
            })

    }

    getData = () => {
        console.log("*******************getting the data")
        axios.get('http://localhost:5000/contacts')
            .then(response => {
                console.log(response)
                this.setState({ responseData: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errMsg: "error getting the data" })
            })
    }

    componentDidMount() {
        // to focus on the input element when page loades
        // this.inputRef.current.focus()
        this.getData()
    }
    render() {
        // this.getData()
        const { name, phone_number, address, responseData, errMsg } = this.state
        const submitStyle = {
            'top': '10px'
        }
        return (
            <div className="container-fluid">
                <div className="card">
                    <form onSubmit={this.submitHandler}>
                        <div className="col-md-3">
                            <label className="form-label">Name</label>
                            {/* <input type="text" ref={this.inputRef} className="form-control" name="name" value={name} onChange={this.changeHandler} /> */}
                            <input type="text" className="form-control" name="name" value={name} onChange={this.changeHandler} />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Phone Number</label>
                            <input type="text" name="phone_number" className="form-control" value={phone_number} onChange={this.changeHandler} />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Address</label>
                            <input type="text" name="address" className="form-control" value={address} onChange={this.changeHandler} />
                        </div>
                        <div className="col-md-3" >
                            <button type="submit" className="btn btn-primary">Add Contact</button>
                        </div>
                    </form>
                </div>
                <div className="card" style={submitStyle}>
                    <PostList data={responseData} errMsg={errMsg} />
                </div>
            </div>
        )
    }
}

export default PostForm
