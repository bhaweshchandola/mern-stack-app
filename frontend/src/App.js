import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import LifeCycleA from './components/LifeCycleA';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <PostForm/>
        <PostList className="true"/>
        <LifeCycleA />
      </div>
    )
  }
}

export default App;
