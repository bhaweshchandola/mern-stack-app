import React, { useState } from 'react'
import axios from 'axios';


function PostFormF() {
    const [contact, setContact] = useState({
        name: '',
        phone_number: '',
        address: '',
        responseData: [],
        errMsg: ''
    });

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        // setContact({ ... contact, [e.target.name]: e.target.value })
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


    return (
        <div>

        </div>
    )
}

export default PostFormF
