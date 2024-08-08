import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ListPhotos, { PhotoData } from "./components/ListPhotos";
import AmplifiedPhoto from "./components/AmplifiedPhoto";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);
  const [amplifiedPhoto, setAmplifiedPhoto] = useState<PhotoData | null>(null);

  const fetchData = async ({ query, category }: { query: string; category: string }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 10,
      },
    });
    setPhotos(response.data);
  };

  useEffect(() => {
    fetchData({ query, category });
  }, []);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} setCategory={setCategory} />
      <ListPhotos photos={photos} setAmplifiedPhoto={setAmplifiedPhoto} />
      {amplifiedPhoto && (
        <AmplifiedPhoto photo={amplifiedPhoto} setPhotoAmplified={setAmplifiedPhoto} />
      )}
    </div>
  );
}

export default App;
