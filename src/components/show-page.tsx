import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "./booking-form";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState<any>(null);

  useEffect(() => {
    // Fetch data for a specific show
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));

    console.log(show);
  }, [id]);

  return (
    <div className="w-full p-8 md:px-20 lg:px-32 gap-4 flex flex-col justify-center xl:px-48">
      <div className="">
        <h1 className="text-3xl font-semibold pb-2">Show Details</h1>
        {show && (
          <div className="flex flex-col md:flex-row justify-start gap-4">
            <div>
              <img
                src={show.image.original}
                width={400}
                className="min-w-[400px]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <h2 className="pt-4 text-xl font-semibold">{show.name}</h2>
              <p
                dangerouslySetInnerHTML={{ __html: show.summary }}
                className="text-sm text-muted-foreground"
              />
              <div className="flex gap-x-2">
                {show &&
                  show.genres.map((genre: any) => (
                    <Button
                      key={show.id}
                      size="sm"
                      className="h-8 bg-emerald-200 text-purple-600"
                    >
                      {genre}
                    </Button>
                  ))}
              </div>
              <div className="text-lg font-medium flex w-full justify-between items-center">
                <Button className="h-8" variant="destructive">
                  {show.language}
                </Button>
                <Button
                  className="h-8 flex gap-x-1 items-center"
                  variant={"outline"}
                >
                  <Star className="w-4 h-4" />
                  {show.rating.average}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-gray-300 p-3 rounded-md">
        <h1 className="text-2xl font-bold px-20 md:px-32 lg:px-44">Bool Slot</h1>
        {show && <BookingForm showName={show.name} />}
      </div>
    </div>
  );
};

export default ShowDetails;
