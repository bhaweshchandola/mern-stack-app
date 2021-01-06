import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fortnite from './components/Fortnite';
import FortniteItem from './components/FortniteItem';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contact-manager" component={PostForm} />
            <Route path="/fortnite" exact component={Fortnite} />
            <Route path="/fortnite/:id" exact component={FortniteItem} />
            {/* <FortniteItem/> */}
            {/* <Fortnite/> */}
            {/* <PostList className="true"/> */}
            {/* <LifeCycleA /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
