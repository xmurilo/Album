import { FunctionComponent, memo } from "react";

interface SearchBarProps {
  setCategory: (value: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ setCategory }) => {
  const category = ["Natureza", "Pessoas", "Futebol", "Desenhos", "Anime"];
  return (
    <div className="search-bar">
      <input type="text" placeholder="Pesquisar fotos..." />
      <button>Pesquisar</button>
      <select onChange={e => setCategory(e.target.value)}>
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
