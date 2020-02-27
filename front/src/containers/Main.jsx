import React, { Component } from 'react'
import { Route,Switch } from "react-router-dom";
import NavbarContainer from './NavbarContainer';
import MoviesContainer from './MoviesContainer'
import HomeContainer from './HomeContainer'
import SingleMovieContainer from './SingleMovieContainer';
import RegisterContainer from './RegisterContainer';

export default class Main extends Component {
    render() {
        return (
                <div>
                    <NavbarContainer />
                    <Switch>
                        <Route exact path="/" component={HomeContainer} />
                        <Route exact path="/movies" component={MoviesContainer} />
                        <Route exact path="/singleMovie/:id" component={SingleMovieContainer}/>
                        <Route exact path="/register" component={RegisterContainer} />
                    </Switch>
                </div>
        );
    }
}
