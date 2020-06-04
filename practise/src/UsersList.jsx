import React from "react";

const UsersList = ({ users }) => {
    const UsersList = users.map((user) => <li>{user.name}</li>);
    return (
        <div>
            {UsersList}
        </div>
    );
};

export default UsersList;
