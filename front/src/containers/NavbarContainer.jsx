import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import {fetchSearch} from '../redux/actions/movie'
import { withRouter } from 'react-router-dom';

class NavbarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valueToSearch: ""
        };
        this.handleChange= this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({valueToSearch: value});
    }

    onSubmit(e) {
            e.preventDefault()
            this.props.receiveFilms(this.state.valueToSearch)
            this.props.history.push('/movies');

    }

    render() {
        return (
            <Navbar onSubmit={this.onSubmit} handleChange={this.handleChange}/>
        )
    }
}

const mapDispachToProps = dispatch => {
    return {
        receiveFilms: value => {
            dispatch(fetchSearch(value))
        }
    }
}

export default withRouter(connect(null, mapDispachToProps)(NavbarContainer))