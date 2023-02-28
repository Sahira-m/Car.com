import React from "react";
import "./userDetail.css";
export default function UserDetail() {
  const userDetails =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user")!)
      : null;

  return (
    <div className="main2">
      <h3> User details is</h3>
      <p>NAME:{userDetails.userData.name}</p>
      <p>Email:{userDetails.userData.email}</p>
    </div>
  );
}
