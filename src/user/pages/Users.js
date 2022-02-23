import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "ul",
      name: "Jered",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg",
      place: 3,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
