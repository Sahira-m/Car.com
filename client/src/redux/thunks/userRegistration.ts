import { AppDispatch } from "../store";
import { userActions } from "../slices/user";
import { port } from "../../common/port";
import axios from "axios";
import { UserType } from "../../common/userType";
const Port = port;
export function userRegistrationThunk(user: UserType) {
  const url = `http://localhost:${Port}/users`;
  console.log("url is", url);
  return async (dispatch: AppDispatch) => {
    try {
      //const config = { headers: { "Content-Type": "application/json" } };
      await axios.post(url, user).then((res) => {
        if (res.status === 200) {
          dispatch(userActions.registerUser(true));
        }
        if (res.status === 400) {
          dispatch(userActions.registerUser(false));
        }
      });
    } catch (error) {
      dispatch(userActions.registerUser(false));
      console.log(error);
    }
  };
}

//new code for updates

export function userUpdationThunk(user: UserType) {
  const userDetails =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user")!)
      : null;
  const userId = userDetails.userData._id;
  user._id = userId;
  const url = `http://localhost:${Port}/users/${userId}`;
  console.log("url is for updates", url);
  console.log("values for update", user);
  return async (dispatch: AppDispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      await axios.put(url, user, config).then((res) => {
        if (res.status === 200) {
          dispatch(userActions.updateUser(true));
        }
        if (res.status === 400) {
          dispatch(userActions.updateUser(false));
        }
      });
    } catch (error) {
      dispatch(userActions.updateUser(false));
      console.log(error);
    }
  };
}
