import React from "react";
import BingMapsReact from "bingmaps-react";

function Map({}) {
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
          center: { latitude: 8.9806, longitude: 38.7578 },
          mapTypeId: "grayscale",
        }}
        // onClick={(e) => {
        //   console.log(e);
        //   setCoordinates({
        //     // latitude: e.center.latitude,
        //     // longitude: e.center.longitude,
        //   });
        // }}
      ></BingMapsReact>
    </div>
  );
}

export default Map;
