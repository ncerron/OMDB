import React, { Component } from "react";
import { connect } from "react-redux";
import SingleMovie from "../components/SingleMovie";
import { fetchMovie, addMovie, deleteMovie } from "../redux/actions/movie";
import Swal from "sweetalert2";

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
    //si no esta logueado que no tenga funcionalidad el boton
    if (this.props.user.id) {
      //busca que no este ya elegida la pelicula
      const found = this.props.favourites.find(
        element => element.idFavourite == this.props.movie.imdbID);
      if (!found) {
        this.props.addFavourite(this.props.movie)
      } else {
        Swal.fire({
          title: "",
          text: "There is already such the movie",
          width: 300,
          confirmButtonColor: "#4b3558de",
          confirmButtonText: "Ok"
        })
      }
    } else {
      Swal.fire({
        title: "",
        text: "Please login",
        width: 200,
        confirmButtonColor: "#4b3558de",
        confirmButtonText: "Ok"
      })
    }
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
  favourites: state.favourites,
  user: state.user

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
