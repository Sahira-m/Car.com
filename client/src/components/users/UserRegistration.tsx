import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { UserType } from "../../common/userType";
import "./UserRegistration.css";

import { userRegistrationThunk } from "../../redux/thunks/userRegistration";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

//schema
const signUpSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .email("Invalid email format ,Please add @")
    .required("Please enter a email Id"),
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
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function UserRegistration() {
  const message = useSelector((state: RootState) => state.user.isRegister);
  //const [open, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const userRegister = (user: UserType) => {
    if (!user) {
      return;
    }
    if (user) {
      dispatch(userRegistrationThunk(user));
    }
    if (message) {
      navigate("/login");
      console.log("message", message);
    }
  };

  //self code
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: UserType) => {
        userRegister(values);
      }}
      validationSchema={signUpSchema}>
      {({ values, errors, touched, handleChange }) => {
        return (
          <Form>
            <div className="main1">
              <div>
                <h3 className="title">Registration</h3>

                <TextField
                  required
                  name="name"
                  label="Name"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>

              <div>
                <TextField
                  required
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  value={values.email}
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
                  type="password"
                />
                <Typography className="error-msg">
                  {errors.password && touched.password ? (
                    <div className="error-message">{errors.password}</div>
                  ) : null}
                </Typography>
              </div>

              <div>
                <TextField
                  required
                  name="confirm password"
                  label="Confirm Password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                  type="password"
                />
                <Typography className="error-msg">
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="error-message">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </Typography>
              </div>
              <Button variant="contained" type="submit">
                Register
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
