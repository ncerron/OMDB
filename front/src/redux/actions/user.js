import axios from "axios";

export const receiveUser = (user) => ({
  type: "LOGIN",
  user,
});

export const logout = (user) => ({
  type: "LOGOUT",
  user,
});

export const register= (user) => ({
  type: "REGISTER",
  user
});

export const search = (user) => ({
  type: "SEARCH_USER",
  user
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


export const logIn = (data) => (dispatch) =>
clienteAxios.post(`/api/user/logIn`, data).then((res) => {
    dispatch(receiveUser(res.data));
  });

export const logOutUser = () => (dispatch) =>
clienteAxios.get("/api/user/logOut").then(() => {
    dispatch(logout({}));
  });

/* export const fetchUser = () => dispatch =>
  axios
    .get("/api/user/me")
    .then(res => res.data)
    .then(user => {
      dispatch(receiveUser(user));
    }); */

//para buscar usuario usando localStorage
export const searchUser = (userId) => (dispatch) =>
clienteAxios.get(`/api/user/${userId}`).then((res) => {
    dispatch(receiveUser(res.data[0]));
  });

export const registerUser = (data) => (dispatch) =>
clienteAxios.post(`/api/user/register`,data).then((res) => {
    dispatch(register(res.data));
  });

  export const searchUserRegister= (userMail) => (dispatch) =>
  clienteAxios.get(`/api/user/search/${userMail}`).then((res) => {
    dispatch(search(res.data));
  });