import React from "react";
import BingMapsReact from "bingmaps-react";
import { Autocomplete } from "@react-google-maps/api";

function Map() {
  return (
    <div className="w-full h-4/5 m-2">
      <BingMapsReact
        bingMapsKey="Am6jyi3540pQSigEKsJe5xO8e5zAMUhr4oRr-OmhH2zp5vx_isEImcQg7CzYY3Dl"
        height="90vh"
        mapOptions={{
          navigationBarMode: "square",
        }}
        width="100%"
        viewOptions={{
          center: { latitude: 0, longitude: 0 },
          mapTypeId: "grayscale",
        }}
      />
    </div>
  );
}
export default Map;
