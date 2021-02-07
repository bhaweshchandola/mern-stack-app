import React, { Fragment, useState, useEffect } from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:5000')

function Chat() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        msg: ""
    })

    const [chat, setChat] = useState({
        messages: ""
    })

    // const [msg1, setMsg] = useState("")
    var changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    var anotherSubmitHandler = e => {
        let data = { id: "1", msg: `${user.msg} - ${user.name}(${user.email})` }
        console.log("data to be sent ", data)
        console.log(socket.emit('new-op', data))
        e.preventDefault();
    }

    
        socket.on('new-op-1', (data) => {
            console.log(data, "from react")
            console.log("before", chat)
            let temp = chat.messages + `\n ${data["msg"]}`
            console.log("temp", temp)

            setChat({...chat, "messages": chat.messages + `\n ${data["msg"]}`})
            
            console.log("value of chat after", chat);
        })
    

    // var msgHandler = e => {
    //     setMsg(e.target.val)
    // }

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="card">
                    <form>
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
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={chat.messages} disabled={true}></textarea>
                        </div>
                        <div className="col-md-3">
                            
                            <input type="text" name="msg" className="form-control" value={user.msg} onChange={changeHandler} />
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
