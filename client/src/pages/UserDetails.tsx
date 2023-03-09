import React from "react";
import UserDetail from "../components/users/UserDetail";
import UserUpdation from "../components/users/UserUpdate";
import "./Pages.css";
export default function UserDetails() {
  return (
    <div className="user-update">
      <div className="user-det">
        <UserDetail />
      </div>
      <div className="user-update-form">
        <UserUpdation />
      </div>
    </div>
  );
}
