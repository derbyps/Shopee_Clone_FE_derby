import axios from "axios";

const url = "http://0.0.0.0:9090";

export const doLogin = (props) => {
  return async (dispatch, getState) => {
    const username = getState().user.username;
    const password = getState().user.password;
    try {
      const response = await axios.get(url + "/auth", {
        params: {
          username: username,
          password: password,
        },
      });
      dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("is_login", true);
    } catch (error) {
      console.log(error);
    }
  };
};

export const doRegister = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.username,
      password: getState().user.password,
    };
    const myJSON = JSON.stringify(bodyRequest);
    try {
      await axios.post(url + "/client", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      });
      dispatch({ type: "SUCCESS_REGISTER" });
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeInputUser = (el) => {
  return { type: "CHANGE_INPUT_USER", payload: el };
};

// export const doLogout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("is_login");
//   localStorage.removeItem("bio");
//   return {
//     type: "LOGOUT",
//   };
// };
