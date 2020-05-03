import axios from "axios";

export const receiveUser = user => ({
  type: "LOGIN",
  user
});


export const logIn = data => dispatch =>
  axios.post("/api/user/logIn", data).then(res => {
    dispatch(receiveUser(res.data))
  
  });

export const logOutUser = () => dispatch =>
  axios.get("/api/user/logout").then(() => {
    dispatch(receiveUser({}));
  });

export const fetchUser = () => dispatch =>
  axios
    .get("/api/user/me")
    .then(res => res.data)
    .then(user => {
      dispatch(receiveUser(user));
    });
