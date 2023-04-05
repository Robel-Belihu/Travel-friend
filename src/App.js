import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex mx-auto md:container md:mx-auto">
        <List />
        <Map />
      </div>
    </div>
  );
}

export default App;
