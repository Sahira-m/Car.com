import { AppDispatch } from "../store";
import { userActions } from "../slices/user";
import { port } from "../../common/port";
import axios from "axios";
import { UserType } from "../../common/userType";
const Port = port;
type InputType = { email: string; password: string | RegExp };
export function userLoginThunk(user: InputType) {
  const url = `http://localhost:${Port}/users/login`;
  console.log("url is", url);
  return async (dispatch: AppDispatch) => {
    try {
      //const config = { headers: { "Content-Type": "application/json" } };
      await axios.post(url, user).then((res) => {
        console.log("user is", user);
        if (res.status === 200) {
          dispatch(userActions.getUser);
          dispatch(userActions.loginHandler(true));
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log(res.status, "status in thunk login");
        }
      });
    } catch (error) {
      dispatch(userActions.loginHandler(false));
      console.log(error);
    }
  };
}
