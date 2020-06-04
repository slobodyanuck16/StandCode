import React from "react";
import User from "./User";

const Users = () => {
    return (
        <div className="page__content">
            <h1>Users</h1>
            <User userId="facebook" />
        </div>
    );
};

export default Users;
