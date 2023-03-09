import React, { useState } from "react";
//formik
import { Formik, Form } from "formik";
import * as Yup from "yup";
//mui
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//css
import "./UserLogiIn.css";
//redux
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { userLoginThunk } from "../../redux/thunks/userLogin";

type InputType = { email: string; password: string | RegExp };
const initialValue: InputType = { email: "", password: "" };
const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format ,Please add @")
    .required("Please enter a email Id"),
  password: Yup.string()
    .required("Please Enter a password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      "The password containing minimum 6 digit and include letters and numbers"
    ),
});

export default function UserLogIn() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const userLogin = (user: InputType) => {
    if (!user) {
      handleClose();
      return;
    }
    if (user) {
      dispatch(userLoginThunk(user));
      console.log("login", isLogin);
      //navigate("/");
    }
    if (isLogin) {
      navigate("/");
      console.log("login", isLogin);
    }
  };
  const handleClose = () => {
    setAlert(false);
  };

  return (
    <div className="login-page">
      <Formik
        initialValues={initialValue}
        onSubmit={(values: InputType) => {
          userLogin(values);
        }}
        validationSchema={signInSchema}>
        {({ values, errors, touched, handleChange }) => {
          return (
            <Form>
              <div className="login-form">
                <h3 className="title">Log In</h3>

                <div>
                  <label className="labels">Email address</label>
                </div>
                <div>
                  <TextField
                    required
                    type="email"
                    className="text"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                  <Typography className="error-msg">
                    {errors.email && touched.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : null}
                  </Typography>
                </div>
                <div></div>
                <div>
                  <label className="labels">Password</label>
                </div>
                <div>
                  <TextField
                    required
                    type={showPassword ? "text" : "password"}
                    className="text"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                  />
                  <span className="show">
                    {showPassword ? (
                      <IconButton onClick={showPasswordHandler}>
                        <VisibilityOff />
                      </IconButton>
                    ) : (
                      <IconButton onClick={showPasswordHandler}>
                        <Visibility />
                      </IconButton>
                    )}
                  </span>
                  <Typography className="error-msg">
                    {errors.password && touched.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : null}
                  </Typography>
                </div>
                <div></div>
                <div>
                  <Button
                    variant="contained"
                    className="button1"
                    //onClick={navigate("/userdetails")}
                    type="submit"
                    onClick={() => setAlert(true)}>
                    LOGIN
                  </Button>
                </div>

                <div>
                  {alert ? (
                    isLogin ? (
                      <Typography sx={{ ml: 6, mt: 4, textAlign: "center" }}>
                        Login successfully!
                      </Typography>
                    ) : (
                      <Typography sx={{ ml: 6, mt: 4, textAlign: "center" }}>
                        Please check Email or Password
                      </Typography>
                    )
                  ) : null}
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
