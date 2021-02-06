import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fortnite from './components/Fortnite';
import FortniteItem from './components/FortniteItem';
import PostFormF from './components/PostFormF';
import FormValidations from './components/FormValidations';
import Hero from './components/Hero';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contact-manager" component={PostFormF} />
            <Route path="/fortnite" exact component={Fortnite} />
            <Route path="/fortnite/:id" exact component={FortniteItem} />
            <Route path="/validation_form" component={FormValidations} />
            <Route path="/hero" component={Hero} />
            
            {/* <FortniteItem/> */}
            {/* <Fortnite/> */}
            {/* <PostList className="true"/> */}
            {/* <LifeCycleA /> */}
            {/* <PostFormF/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
