import React, { Component } from 'react'
import {connect} from 'react-redux'
import Home from '../components/Home'

 class HomeContainer extends Component {
    render() {
        return (
          <Home films={this.props.films}></Home>
        )
    }
}

const mapStateToProps = (state) => ({
  films: state.films
})

export default connect(mapStateToProps, null)(HomeContainer)