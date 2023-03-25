import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./userDetail.css";

export default function UserDetail() {
  const userDetails = useSelector((state: RootState) => state.user.user);
  return (
    <div className="detail">
      <h3> User details </h3>
      <p>NAME:{userDetails.name}</p>
      <p>Email:{userDetails.email}</p>
    </div>
  );
}
