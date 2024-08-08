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
  const [activateSearch, setActivateSearch] = useState(false);

  const fetchData = async ({ query, category }: { query: string; category: string }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if (query || category) {
      let searchQuery = query;

      if (query && category) {
        searchQuery = `${query} ${category}`;
      } else if (category) {
        searchQuery = category;
      }
      const response = await axios.get("https://api.unsplash.com/serach/photos/", {
        params: {
          client_id: apiKey,
          query: searchQuery,
        },
      });
      setPhotos(response.data.results);
      return;
    }

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

  useEffect(() => {
    if (activateSearch) {
      fetchData({ query, category });
      setActivateSearch(false);
    }
  }, [activateSearch]);

  return (
    <div className="container">
      <SearchBar
        setQuery={setQuery}
        setCategory={setCategory}
        setActivateSearch={setActivateSearch}
      />
      <ListPhotos photos={photos} setAmplifiedPhoto={setAmplifiedPhoto} />
      {amplifiedPhoto && (
        <AmplifiedPhoto photo={amplifiedPhoto} setPhotoAmplified={setAmplifiedPhoto} />
      )}
    </div>
  );
}

export default App;
