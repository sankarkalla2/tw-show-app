import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowCard from "./show-card";

const ShowList = () => {
  const [shows, setShows] = useState<any>([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));

    console.log(shows);
  }, []);

  return (
    <div className="p-4 md:px-12 lg:px-20 xl:px-32">
      <header>
        <h1 className="text-4xl font-semibold">Book Your Show</h1>
        <p className="text-muted-foreground text-sm">
          Hurry, Explore and book shows you loved,
        </p>
      </header>
      <div className="pt-10 flex gap-4 flex-wrap justify-center">
        {shows.map((show: any) => (
          <div key={show.show.id} className="">
            <Link to={`/show/${show.show.id}`}>
              <div className="w-[250px]">
                <ShowCard data={show} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
