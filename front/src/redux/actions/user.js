import axios from "axios";

const login = user => ({
    type: "LOGIN",
    user
  });
 

export const loginUser = data => dispatch =>
axios.post(`/api/user/logIn`,data)
.then(res => {
  console.log("reees daaataaaaaa",res.data)
    return res.data
})
.then(user => {
    return dispatch(login(user));
});
