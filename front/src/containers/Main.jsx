import React, { Component } from 'react'
import { Route,Switch } from "react-router-dom";
import NavbarContainer from './NavbarContainer';
import MoviesContainer from './MoviesContainer'
import HomeContainer from './HomeContainer'
import SingleMovieContainer from './SingleMovieContainer';
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer';
import { fetchUser  } from "../redux/actions/user";
import { connect } from 'react-redux'


class Main extends Component {
    /* componentDidMount() {
        this.props.fetchUser()
    } */

    render() {
        
        return (
            <div>
                <NavbarContainer /* user={this.props.user} *//>
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
        fetchUser: () => {
            dispatch(fetchUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
