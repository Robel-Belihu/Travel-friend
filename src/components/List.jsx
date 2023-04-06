import { Card } from "@mui/material";
import React from "react";
import { useState } from "react";
import PlaceDetails from "./PlaceDetails";

function List() {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("restaurants");

  const places = [
    { name: "Best Place" },
    { name: "Best Steak" },
    { name: "Best Beer" },
    { name: "Best Place" },
    { name: "Best Steak" },
    { name: "Best Beer" },
    { name: "Best Place" },
    { name: "Best Steak" },
    { name: "Best Beer" },
  ];

  return (
    <div className="flex-col mx-3 my-3 w-2/5 md:flex md:space-x-2 ">
      <h3 className="font-bold text-xl text-teal-700">
        Find the best Restaurants, Hotels and Attractions around you!
      </h3>
      <div className="relative w-full lg:max-w-sm">
        <h3 className="font-bold text-l text-red-700">Type</h3>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        >
          <option value={0}>Restaurants</option>
          <option value={3}>Hotels</option>
          <option value={4}>Attraction</option>
        </select>
      </div>
      <div className="relative w-full lg:max-w-sm">
        <h3 className="font-bold text-l text-red-700">Rating</h3>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        >
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
        </select>
      </div>
      <div class="grid grid-flow-row auto-rows-max">
        {places?.map((place, i) => (
          <div>
            <PlaceDetails place={place} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
