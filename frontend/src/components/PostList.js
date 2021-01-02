import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errMsg: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/contacts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({errMsg: "error getting the data"})
            })
    }

    render() {
        const { posts, errMsg } = this.state
        const className = this.props.className ? 'primary': ''
        const inlineStyle = {
            fontSize: '40px',
            color: 'red'
        }

        return (
            <div className={`${className} font-xl`}>
                <ol>
                {
                    posts.length ?
                    posts.map(post => <li key={post._id}> {post.name} - {post.phone_number} </li>) :
                    null
                }
                </ol>
                { errMsg ? <div style={inlineStyle}>{errMsg}</div> : null}
            </div>
        )
    }
}

export default PostList
