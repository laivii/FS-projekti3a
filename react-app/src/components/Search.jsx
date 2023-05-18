function Search() {
  return (
    <>
      <h2>Search Comment</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          aria-label="Search for comment by username"
        ></input>
        <button type="button" className="btn btn-secondary" id="search-button">
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
