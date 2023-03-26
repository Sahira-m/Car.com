import { AppDispatch } from "../store";
import { userActions } from "../slices/user";
import { port } from "../../common/port";
import axios from "axios";
import { UserType } from "../../common/userType";
import { UpdateUserType } from "../../common/userType";
const Port = port;
export function userRegistrationThunk(user: UserType) {
  const url = `http://localhost:${Port}/users`;
  console.log("url is", url);
  return async (dispatch: AppDispatch) => {
    try {
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
export function userUpdationThunk(
  user: UpdateUserType,
  userId: string,
  token: string
) {
  const url = `http://localhost:${Port}/users/${userId}`;
  console.log("url is for thunk updates", url);
  console.log("values for update", user);
  return async (dispatch: AppDispatch) => {
    try {
      //const token = localStorage.getItem("userToken");

      const config = { headers: { Authorization: `Bearer ${token}` } };

      await axios.put(url, user, config).then((res) => {
        if (res.status === 200) {
          dispatch(userActions.updateUser(true));
          console.log("1234", res.data.data);
          dispatch(userActions.getUser(res.data.data));
          console.log("1", res.status);
        }
        if (res.status === 400) {
          dispatch(userActions.updateUser(false));
          console.log("2", res.status);
        }
      });
    } catch (error) {
      dispatch(userActions.updateUser(false));
      console.log(error);
    }
  };
}
