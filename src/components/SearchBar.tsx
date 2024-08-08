import { FunctionComponent, memo } from "react";

interface SearchBarProps {
  setCategory: (value: string) => void;
  setQuery: (value: string) => void;
  setActivateSearch: (value: boolean) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  setCategory,
  setQuery,
  setActivateSearch,
}) => {
  const category = ["Natureza", "Pessoas", "Futebol", "Desenhos", "Anime"];
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar fotos..."
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={() => setActivateSearch(true)}>Pesquisar</button>
      <select
        onChange={e => {
          setCategory(e.target.value);
          setActivateSearch(true)
        }}
      >
        {category.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(SearchBar);
