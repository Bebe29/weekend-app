import Axios from "axios";
import { API_URL } from "../../constants/API";

export const usernameInputHandler = text => {
  return {
    type: "ON_CHANGE_USERNAME",
    payload: text
  };
};

export const loginHandler = userData => {
  return dispatch => {
    // dispatch({
    //   type: "TESTING",
    //   payload: "Hello World!"
    // });
    // dispatch({
    //   type: "TESTING2",
    //   payload: "Halo Dunia!"
    // });
    const { username, password } = userData;
    Axios.get(`${API_URL}/users`, {
      params: {
        username,
        password
      }
    })
      .then(res => {
        if (res.data.length > 0) {
          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0]
          });
        } else {
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "Username atau password salah"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
}; //dispatch ngebuat dia ga langsung berhenti

export const registerHandler = (userData, newUser) => {
  return dispatch => {
    const { username, password, repeatPass } = userData;
    Axios.get(`${API_URL}/users`, {
      params: {
        username
      }
    })
      .then(res => {
        if (res.data.length === 0) {
          if (repeatPass === password) {
            Axios.post(`${API_URL}/users`, newUser)
              .then(res => {
                dispatch({
                  type: "ON_REGISTER_SUCCESS",
                  payload: newUser
                });
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            dispatch({
              type: "ON_REGISTER_FAIL",
              payload: `Password belum cocok`
            });
          }
        } else {
          dispatch({
            type: "ON_REGISTER_FAIL",
            payload: `Username ${username} sudah ada`
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
}; //dispatch ngebuat dia ga langsung berhenti
