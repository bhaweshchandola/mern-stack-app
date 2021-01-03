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

    getData = () =>{
        console.log("*******************getting the data")
        axios.get('http://localhost:5000/contacts')
            .then(response => {
                console.log(response)
                this.setState({ responseData: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({errMsg: "error getting the data"})
            })
    }

    componentDidMount(){
        // to focus on the input element when page loades
        this.inputRef.current.focus()
        this.getData()
    }
    render() {
        // this.getData()
        const { name, phone_number, address, responseData, errMsg } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" ref={this.inputRef} name="name" value={name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="phone_number" value={phone_number} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="address" value={address} onChange={this.changeHandler} />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
                <div>
                    <PostList data={responseData} errMsg={errMsg}/>
                </div>
            </div>
        )
    }
}

export default PostForm
