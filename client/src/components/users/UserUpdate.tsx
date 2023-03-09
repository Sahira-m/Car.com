import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Typography from "@mui/material/Typography";
import { TextField, Button, IconButton } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { UserType } from "../../common/userType";

import "./UserUpdate.css";
import { userUpdationThunk } from "../../redux/thunks/userRegistration";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//schema
const signUpSchema = Yup.object().shape({
  name: Yup.string(),
  /*  email: Yup.string()
    .email("Invalid email format ,Please add @")
    .required("Please enter a email Id"), */
  password: Yup.string()
    .required("Please Enter a password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      "The password containing minimum 6 digit and include letters and numbers"
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
const initialValues = {
  _id: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function UserUpdation() {
  const userDetails =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user")!)
      : null;
  const email = userDetails.userData.email;

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const isUpdate = useSelector((state: RootState) => state.user.isUpdate);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const userUpdate = (user: UserType) => {
    if (!user) {
      return;
    }
    if (user) {
      dispatch(userUpdationThunk(user));
    }
    if (isUpdate) {
      navigate("/login");
    }
  };
  const showPasswordHandler1 = () => {
    setShowPassword1(!showPassword1);
  };
  const showPasswordHandler2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: UserType) => {
        console.log(values);
        values.email = email;
        userUpdate(values);
      }}
      validationSchema={signUpSchema}>
      {({ values, errors, touched, handleChange }) => {
        return (
          <Form>
            <div className="user-update">
              <div>
                <h3 className="title">Update Details</h3>

                <TextField
                  required
                  name="name"
                  label="Name"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>

              <div className="user-component">
                <TextField
                  required
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  value={email}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <Typography className="error-msg">
                  {errors.email && touched.email ? (
                    <div className="error-message">{errors.email}</div>
                  ) : null}
                </Typography>
              </div>
              <div>
                <TextField
                  required
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  value={values.password}
                  type={showPassword1 ? "text" : "password"}
                />
                <span className="show3">
                  {showPassword1 ? (
                    <IconButton onClick={showPasswordHandler1}>
                      <VisibilityOff />
                    </IconButton>
                  ) : (
                    <IconButton onClick={showPasswordHandler1}>
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

              <div>
                <TextField
                  required
                  name="confirmPassword"
                  label="Confirm Password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                  type={showPassword2 ? "text" : "password"}
                />
                <span className="show4">
                  {showPassword2 ? (
                    <IconButton onClick={showPasswordHandler2}>
                      <VisibilityOff />
                    </IconButton>
                  ) : (
                    <IconButton onClick={showPasswordHandler2}>
                      <Visibility />
                    </IconButton>
                  )}
                </span>

                <Typography className="error-msg">
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="error-message">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </Typography>
              </div>
              <Button variant="contained" type="submit">
                Update
              </Button>
              <div>
                {isUpdate ? (
                  <Typography>Updated Successfully</Typography>
                ) : (
                  <Typography>Not Updated</Typography>
                )}
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
