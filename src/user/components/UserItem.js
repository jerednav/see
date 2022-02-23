import React from "react";

import Avatar from "../../shared/components/UIElements/Avatar/Avatar";
import "./UserItem.css";

const UserItem = (items) => {
  return (
    <>
      <li className='user-item'>
        <div className='user-item__content'>
          <div className='user-item__image'>
            <Avatar image={items.image} alt={items.name} />
          </div>
          <div className='user-item__info'>
            <h2>{items.name}</h2>
            <h3>
              {items.placeCount} {items.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </div>
      </li>
    </>
  );
};
export default UserItem;
