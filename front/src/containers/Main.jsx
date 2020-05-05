import React, { Component } from 'react'
import { Route,Switch } from "react-router-dom";
import NavbarContainer from './NavbarContainer';
import MoviesContainer from './MoviesContainer'
import HomeContainer from './HomeContainer'
import SingleMovieContainer from './SingleMovieContainer';
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer';
import { searchUser } from "../redux/actions/user";
import { connect } from 'react-redux'
import { fetchFavourite } from "../redux/actions/movie";

class Main extends Component {
    componentDidMount() {
        /*Obtener datos almacenados en localStorage*/
        var userIdLS = localStorage.getItem("user");
        var userId = JSON.parse(userIdLS)
      
        if (userId) {
            this.props.fetchFavourites(userId)
            this.props.searchUser(userId)
        }
    } 

    render() {
        return (
            <div>
                <NavbarContainer/>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/movies" component={MoviesContainer} />
                    <Route exact path="/singleMovie/:id" component={SingleMovieContainer} />
                    <Route exact path="/register" component={RegisterContainer} />
                    <Route exact path="/login" component={LoginContainer} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
  })

const mapDispatchToProps = dispatch => {
    return {
        searchUser: data => {
            dispatch(searchUser(data))
        },
        fetchFavourites: value => dispatch(fetchFavourite(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
