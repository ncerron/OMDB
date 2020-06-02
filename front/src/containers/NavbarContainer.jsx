import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { fetchSearch, clearFavourite } from '../redux/actions/movie'
import { withRouter } from 'react-router-dom';
import { logOutUser } from '../redux/actions/user'

class NavbarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valueToSearch:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.hadleClickLogOut = this.hadleClickLogOut.bind(this);
        this.cleanInput= this.cleanInput.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({ valueToSearch: value });
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.receiveFilms(this.state.valueToSearch)
        this.props.history.push('/movies');
    }

    cleanInput(){
        this.setState({ valueToSearch: ""});
    }

    hadleClickLogOut() {
        this.setState({ valueToSearch: ""});
        this.props.logOut()
        this.props.clearFavourite()
    }

    render() {
        return (
            <Navbar onSubmit={this.onSubmit}
                handleChange={this.handleChange}
                user={this.props.user}
                logOut={this.hadleClickLogOut}
                inputValue={this.state.valueToSearch}
                cleanInput={this.cleanInput}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispachToProps = dispatch => {
    return {
        receiveFilms: value => dispatch(fetchSearch(value)),
        logOut: () => {
            dispatch(logOutUser())
            localStorage.clear();
        },
        clearFavourite: () => dispatch(clearFavourite())
    }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(NavbarContainer))