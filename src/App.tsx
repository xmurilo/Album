import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ListPhotos from "./components/ListPhotos";
import AmplifiedPhoto from "./components/AmplifiedPhoto";

function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <SearchBar />
      <ListPhotos />
      <AmplifiedPhoto />
    </>
  );
}

export default App;
