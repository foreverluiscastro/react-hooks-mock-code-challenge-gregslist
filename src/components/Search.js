import React from "react";

function Search({ search , setSearch }) {

  function handleChange(e) {
    setSearch(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted", search);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
