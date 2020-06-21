 import axios from "axios";

 const receiveFilms = films => ({
   type: "RECEIVE_FILMS",
   films
 });

 const receiveMovie = movie => ({
   type: "RECEIVE_MOVIE",
   movie
 });

 const addFavouriteMovie = movie => ({
   type: "ADD_FAVOURITE",
   movie
 });

 const deleteFavouriteMovie = movie => ({
   type: "DELETE_FAVOURITE",
   movie
 });

 const receiveFavourite = movie => ({
  type: "RECEIVE_FAVOURITE",
  movie
});

const clearFav = movie => ({
  type: "CLEAR_FAVOURITE",
  movie
});

let API_URL

if (process.env.NODE_ENV == 'production') {
  API_URL=process.env.API_URL
}else{
  API_URL="http://localhost:3000"
}

const clienteAxios = axios.create({
  baseURL : API_URL
});

 export const fetchSearch = data => dispatch =>
   axios.get(`https://www.omdbapi.com/?s=${data}&apikey=${process.env.API_KEY}`).then(res => {
     dispatch(receiveFilms(res.data));
   });

 export const fetchMovie = data => dispatch =>{
  axios.get(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${data}`).then(res => {
   dispatch(receiveMovie(res.data));
 }); 
 }
    
 export const addMovie = data => dispatch =>
 clienteAxios.post(`/api/favourite/add`, data).then(res => {
     dispatch(addFavouriteMovie(res.data));
   });

 export const deleteMovie = data => dispatch =>
 clienteAxios.get(`/api/favourite/delete/${data}`).then(res => {
     dispatch(deleteFavouriteMovie(res.data));
   }); 
  
   export const fetchFavourite = data => dispatch =>
   clienteAxios.get(`/api/favourite/favourites/${data}`).then(res => {
     dispatch(receiveFavourite(res.data));
   }); 

   export const clearFavourite = () => clearFav([]);
   
