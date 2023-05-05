import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ActorItemComponent from "../Components/ActorItemComponent";

const Actors = () => {
  const [actors, setActors] = useState(null);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    (async () => {
      const req = await fetch(
        `${import.meta.env.VITE_API_URL}/actor?search=${search}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await req.json();
      setActors(res);
    })();
  }, []);

  return (
    <div>
      <h1>Actors</h1>
      <div>
        {actors === null ? (
          <p>Loading...</p>
        ) : (
          <div>
            {actors.length === 0 ? (
              <p>No actors found</p>
            ) : (
              <>
                <div>
                  {actors.length} Actor {"("}s{")"} Found
                </div>
                <div>
                  {actors.map((actor) => (
                    <ActorItemComponent actor={actor} key={actor.id} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Actors;
