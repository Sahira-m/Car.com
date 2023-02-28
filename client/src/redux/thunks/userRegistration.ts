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
          localStorage.setItem("user", res.data);
          localStorage.getItem("user");
        }
      });
    } catch (error) {
      dispatch(userActions.registerUser(false));
      console.log(error);
    }
  };
}
