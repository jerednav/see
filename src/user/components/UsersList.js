import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./UsersList.css";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No users found</h2>
        </Card>
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
