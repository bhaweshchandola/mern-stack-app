import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PostList from './PostList';


function PostFormF() {
    const [contact, setContact] = useState({
        name: '',
        phone_number: '',
        address: '',
        responseData: [],
        errMsg: ''
    });

    const [count, setCount] = useState(0);

    var changeHandler = e => {
        console.log(contact);
        console.log([e.target.name])
        // this.setState({ [e.target.name]: e.target.value })
        setContact({ ...contact, [e.target.name]: e.target.value})
    }

    var submitHandler = e => {
        setCount(count + 1)
        e.preventDefault()
        // console.log(this.state)
        // axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        axios.post('http://localhost:5000/contacts/add', contact)
            .then(response => {
                console.log(response)
                getData()
            })
            .catch(err => {
                console.log(err)
            })

    }

    const getData = () => {
        console.log("*******************getting the data")
        axios.get('http://localhost:5000/contacts')
            .then(response => {
                console.log(response)
                setContact({ ...contact,  responseData: response.data })
            })
            .catch(error => {
                console.log(error)
                setContact({ ...contact, errMsg: "error getting the data" })
            })
    }

    // second param in useeffect restrict it from calling this method again and again, as it checks the param with its previous value to see if it is updated then only it executes the useeffect method. ******* if like class component this needs to be called only once like componentdidmount then just pass an empty array
    // useEffect(() => {
    //     getData()
    //     console.log("use effect called")
    // }, [count])
    useEffect(() => {
        getData()
        console.log("use effect called")
    }, [])

    return (
        <div className="container-fluid">
        <div className="card">
            <form onSubmit={submitHandler}>
                <div className="col-md-3">
                    <label className="form-label">Name</label>
                    {/* <input type="text" ref={this.inputRef} className="form-control" name="name" value={name} onChange={this.changeHandler} /> */}
                    <input type="text" className="form-control" name="name" value={contact.name} onChange={changeHandler} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name="phone_number" className="form-control" value={contact.phone_number} onChange={changeHandler} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Address</label>
                    <input type="text" name="address" className="form-control" value={contact.address} onChange={changeHandler} />
                </div>
                <div className="col-md-3" >
                    <button type="submit" className="btn btn-primary">Add Contact</button>
                </div>
            </form>
        </div>
        <div className="card">
            <PostList data={contact.responseData} errMsg={contact.errMsg} />
        </div>
    </div>
    )
}

export default PostFormF
