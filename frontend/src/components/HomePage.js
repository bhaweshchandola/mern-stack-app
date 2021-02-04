import React from 'react';
import { increment, user_add } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux'
// import '../cover.css'
function HomePage() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    console.log(increment());
    console.log(typeof(increment()));
    return (
        <div>
            <main role="main" className="inner cover">
                <h1 className="cover-heading">Counter Value via redux: {counter}</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                    Some
                    </p>
                <button className="btn btn-success" onClick={() => dispatch(increment())}>Increment Counter</button>
            </main>

            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p>Cover template for.</p>
                </div>
            </footer>
        </div>
    );
}


export default HomePage;