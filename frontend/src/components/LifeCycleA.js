import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Class Cons'
        }
        console.log("LifeCycleA constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log("LifecycleA componentdidMount")
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleA ComponentdidUpdate")
    }

    changeState = event =>{
        this.setState({
            name:"new Name"
        })
    }

    render(){
        console.log("LifecycleA Render")
        return (
            // used when coupling multiple child elements into one parent element, like instead of using parent div tag
            <React.Fragment>
                <div>Life CycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </React.Fragment>
        )
    }
}

export default LifeCycleA;