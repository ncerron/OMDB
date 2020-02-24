import React, { Component } from "react";
import { connect } from "react-redux";
import SingleMovie from "../components/SingleMovie";
import { fetchMovie, addMovie, deleteMovie } from "../redux/actions";

class SingleMovieContainer extends Component {
  constructor(props) {
    super(props);

    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  componentDidMount() {
    this.props.receiveMovie(this.props.match.params.id);
  }

  handleClickAdd() {
    this.props.addFavourite(this.props.movie);
  }

  handleClickDelete(item) {
    this.props.deleteFavourite(item);
  }


  render() {
    return (
      <SingleMovie
        movie={this.props.movie}
        handleClickAdd={this.handleClickAdd}
        favourites={this.props.favourites}
        handleClickDelete={this.handleClickDelete}
      ></SingleMovie>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => {
  return {
    receiveMovie: value => {
      dispatch(fetchMovie(value));
    },
    addFavourite: value => {
      dispatch(addMovie(value));
    },
    deleteFavourite: value => {
        dispatch(deleteMovie(value));
      }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMovieContainer);
