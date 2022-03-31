import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "EMPIRE STATE BUILDING",
    description: "Famous skyscraper",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/2020-01/thumbnail5M2VW4ZF.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "EMPIRE STATE BUILDING",
    description: "Famous skyscraper",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/2020-01/thumbnail5M2VW4ZF.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    create: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
