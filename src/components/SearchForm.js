import React from "react";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        value={searchText}
      />
      <br />
      <button
        type="submit"
        onClick={onSubmit}
        className="search-form__submit-button"
      >
        Search
      </button>
    </div>
  );
}

export default SearchForm;
