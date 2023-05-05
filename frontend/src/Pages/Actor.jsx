import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItemComponent from "../Components/MovieItemComponent";

const Actor = () => {
  const { id } = useParams();

  const [actor, setActor] = useState(null);

  useEffect(() => {
    (async () => {
      const req = await fetch(`${import.meta.env.VITE_API_URL}/actor/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await req.json();
      setActor(res);
    })();
  }, []);

  return (
    <div>
      {actor === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          {!actor ? (
            <p>Actor not found</p>
          ) : (
            <div>
              <div>
                <img src={actor.image} alt={actor.name} />
                <h1>{actor.name}</h1>
                <div>{actor.summary}</div>
              </div>
              <div>
                {actor.films.map((film) => (
                  <MovieItemComponent movie={film} key={film._id} actorId={actor.imDBId} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Actor;
