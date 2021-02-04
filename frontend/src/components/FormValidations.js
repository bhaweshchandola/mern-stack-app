import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import {increment, userAction} from '../actions/index'

function FormValidations(){
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();

    const redux_user = useSelector(state => state.users)

    var changeHandler = e => {
        // console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    var submitHandler = e => {
        e.preventDefault();
        // setUsers([...users, user])
        dispatch(userAction(user))
        console.log("dispatch done");
        console.log(redux_user);
        setUser({
            name: '',
            email: '',
            phone: ''
        })
    }

    return (
        <div className="container-fluid">
        <div className="card">
            <form onSubmit={submitHandler}>
                <div className="col-md-3">
                    <label className="form-label">Name</label>
                    {/* <input type="text" ref={this.inputRef} className="form-control" name="name" value={name} onChange={this.changeHandler} /> */}
                    <input type="text" className="form-control" name="name" value={user.name} onChange={changeHandler} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name="phone" className="form-control" value={user.phone} onChange={changeHandler} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" value={user.email} onChange={changeHandler} />
                </div>
                <div className="col-md-3" >
                    <button type="submit" className="btn btn-primary">Add Contact</button>
                </div>
            </form>
        </div>
        <div className="card">
        <div className="col-md-3">
                <ol className="list-group list-group-flush">
                {
                    redux_user.length ?
                    redux_user.map(people => <li className="list-group-item" key={people.phone}> {people.name} - {people.email} </li>) :
                    null
                }
                </ol>
                
            </div>
        </div>
    </div>
    )
}


export default FormValidations;