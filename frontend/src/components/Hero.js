import React, { Fragment } from 'react';
import CheckHero from './CheckHero';
import ErrorBoundary from './ErrorBoundary';

function Hero() {
    return (
        <Fragment>
            <ErrorBoundary>
                <CheckHero heroName="Superman" />
            </ErrorBoundary>
            <ErrorBoundary>
                <CheckHero heroName="Batman" />
            </ErrorBoundary>
            <ErrorBoundary>
                <CheckHero heroName="Joker" />
            </ErrorBoundary>
        </Fragment>
    )
}

export default Hero;