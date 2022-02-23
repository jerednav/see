import React from "react";
import "./UsersList.css";

import UserItem from "./UserItem";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className='center'>
        <h2>No users found</h2>
      </div>
    );
  }

  return (
    <ul className='users-list'>
      {items.map((user) => (
        <UserItem
          key={user.id}
          isd={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.place}
        />
      ))}
    </ul>
  );
};

export default UsersList;
