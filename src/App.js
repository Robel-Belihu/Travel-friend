import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import { getPlacesData } from "./api";
import { useState, useEffect } from "react";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [boundaries, setBoundaries] = useState(null);

  useEffect(() => {
    getPlacesData().then((data) => {
      // console.log(data);
      setPlaces(data);
    });
  }, []);

  return (
    <div className="">
      <Header />
      <div className="md:flex">
        <List />
        <Map
        // setCoordinates={setCoordinates}
        // coordinates={coordinates}
        // setBoundaries={setBoundaries}
        />
      </div>
    </div>
  );
}

export default App;
