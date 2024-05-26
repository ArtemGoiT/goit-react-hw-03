import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const searchId = useId();

  return (
    <div className={css.searchBoxContainer}>
      <label className={css.searchLabel} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={(e) => onFilter(e.target.value)}
        className={css.searchInput}
        id={searchId}
        type="search"
        inputMode="search"
        value={value}
      />
    </div>
  );
};

export default SearchBox;
