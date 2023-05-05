import React from "react";
import { Link } from "react-router-dom";

const ActorItemComponent = ({ actor }) => {
  return (
    <Link to={`/actor/${actor.id}`}>
      <div>
        <img src={actor.image} alt={actor.title} />
        <h3>{actor.title}</h3>
      </div>
    </Link>
  );
};

export default ActorItemComponent;
