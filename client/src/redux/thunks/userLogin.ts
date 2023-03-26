import { AppDispatch } from "../store";
import { userActions } from "../slices/user";
import { port } from "../../common/port";
import axios from "axios";
const Port = port;
type InputType = { email: string; password: string | RegExp };
export function userLoginThunk(user: InputType) {
  const url = `http://localhost:${Port}/users/login`;
  console.log("url is", url);
  return async (dispatch: AppDispatch) => {
    try {
      await axios.post(url, user).then((res) => {
        console.log("user is", user);
        //token take and set now
        const token = res.data.token;
        //localStorage.setItem("userToken", token);

        if (res.data.userData) {
          dispatch(userActions.getUser(res.data.userData));
          dispatch(userActions.loginHandler(true));
          dispatch(userActions.getToken(token));
          console.log(res.status, "status in thunk login");
        }
      });
    } catch (error) {
      dispatch(userActions.loginHandler(false));
      console.log(error);
    }
  };
}
