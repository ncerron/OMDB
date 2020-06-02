import React, { Component } from 'react'
import {connect} from 'react-redux'
import Movies from '../components/Movies'
import {deleteMovie, fetchFavourite } from "../redux/actions/movie";

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }
  
    handleClickDelete(item) {
        this.props.deleteFavourite(item);
      }

    render() {
        return (
            <Movies films={this.props.films} 
            favourites ={this.props.favourites }
            handleClickDelete={this.handleClickDelete}
            ></Movies>
        )
    }
}

const mapStateToProps = (state) => ({
    films: state.films,
    favourites:state.favourites, 
    user: state.user
})

const mapDispatchToProps = dispatch => {
    return {
      deleteFavourite: value => {
          dispatch(deleteMovie(value));
        },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)