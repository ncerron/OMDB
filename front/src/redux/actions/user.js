import axios from "axios";

export const receiveUser = user => ({
  type: "LOGIN",
  user
});

export const logout = user => ({
  type: "LOGOUT",
  user
});

export const logIn = data => dispatch =>
  axios.post("/api/user/logIn", data).then(res => {
    dispatch(receiveUser(res.data))
  
  });

export const logOutUser = () => dispatch =>
  axios.get("/api/user/logOut").then(() => {
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
    export const searchUser = userId=> dispatch =>
    axios
      .get(`/api/user/${userId}`)
      .then(res => {
        dispatch(receiveUser(res.data[0]));
      });

