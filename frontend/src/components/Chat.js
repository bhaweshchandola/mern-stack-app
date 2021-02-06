import React, { Fragment, useState, useEffect } from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:5000')

function Chat() {
    const [user, setUser] = useState({
        name: "",
        email: "",
    })

    const [chat, setChat] = useState("")

    var changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    var submitHandler = e => {

        e.preventDefault();
    }

    var anotherSubmitHandler = e => {
        console.log(socket.emit('new-op', { id: "1", msg: "hello" }))
        e.preventDefault();
    }

    useEffect(() => {
        socket.on('new-op-1', (data) => {
            console.log(data, "from react")
            setChat(chat + `\n ${data["msg"]}`)
            console.log("value of chat", chat);
            // alert(data, "from react")
        })
    })

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="card">
                    <form onSubmit={submitHandler}>
                        <div className="col-md-3">
                            <label className="form-label">Name</label>
                            {/* <input type="text" ref={this.inputRef} className="form-control" name="name" value={name} onChange={this.changeHandler} /> */}
                            <input type="text" className="form-control" name="name" value={user.name} onChange={changeHandler} />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Email</label>
                            <input type="text" name="email" className="form-control" value={user.email} onChange={changeHandler} />
                        </div>
                        <div className="col-md-3" >
                            <button type="submit" className="btn btn-primary">Set Name</button>
                        </div>
                    </form>
                </div>
                <div className="card">
                    <form onSubmit={anotherSubmitHandler}>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Chat Window</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={chat} disabled={true}></textarea>
                        </div>

                        <div className="col-md-3" >
                            <button type="submit" className="btn btn-success">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Chat
