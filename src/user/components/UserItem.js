import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";

const UserItem = (items) => {
  return (
    /* li tags to list all users
    //card components to wrap each user with a card layout
    */
    <>
      <li className='user-item'>
        <Card className='user-item__content'>
          <Link to={`/${items.id}/places`}>
            <div className='user-item__image'>
              <Avatar image={items.image} alt={items.name} />
            </div>
            <div className='user-item__info'>
              <h2>{items.name}</h2>
              <h3>
                {items.placeCount} {items.placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    </>
  );
};
export default UserItem;
